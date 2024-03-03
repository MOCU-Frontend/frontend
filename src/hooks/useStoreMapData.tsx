import { useEffect, useState } from 'react';
import pinMapNormalImg from '../assets/icon/pinMapNormal.svg';
import pinMapGiftImg from '../assets/icon/pinMapGift.svg';
import pinMapFireImg from '../assets/icon/pinMapFire.svg';
import { useQuery } from '@tanstack/react-query';
import { fetchMapStoreMarkerData } from '../apis/map/fetchMapStoreMarkerData';
import { fetchMapStoreData } from './../apis/map/fetchMapStoreData';
import useStore from '../store/useStore';

export const useStoreMapData = (
  map: naver.maps.Map | undefined,
  handleClickMarker: () => void,
  eventOption: boolean,
  dueDateOption: boolean,
  categoryOption: string,
  isVisitedOption: boolean
) => {
  const [storeMarkerArr, setStoreMarkerArr] = useState<naver.maps.Marker[]>([]);

  const userId = useStore((state) => state.userId);
  const nowUserLocation = useStore((state) => state.nowUserLocation);

  const { data: storeMapMarkerData } = useQuery({
    queryKey: ['mapStoreMarker'],
    queryFn: () =>
      fetchMapStoreMarkerData(
        userId || '',
        nowUserLocation?.latitude || 37.5404257,
        nowUserLocation?.longitude || 127.07209,
        eventOption,
        dueDateOption,
        categoryOption,
        isVisitedOption
      ),
    enabled: !!userId && !!nowUserLocation,
  });

  const [selectedStoreId, setSelectedStoreId] = useState<number | undefined>();

  const { data: selectedStoreData } = useQuery({
    queryKey: ['selectedMapStore', selectedStoreId],
    queryFn: () => fetchMapStoreData(userId || '', selectedStoreId || 5),
    enabled: !!selectedStoreId && !!userId,
  });

  useEffect(() => {
    storeMarkerArr.forEach((marker) => marker.setMap(null));
    setStoreMarkerArr([]);

    if (map && storeMapMarkerData) {
      storeMapMarkerData.forEach((storeData) => {
        const imgUrl = storeData.hasEvent
          ? pinMapFireImg
          : storeData.dueDate
            ? pinMapGiftImg
            : pinMapNormalImg;
        const newMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            storeData.latitude,
            storeData.longitude
          ),
          map: map,
          icon: imgUrl,
        });
        setStoreMarkerArr((prev) => [...prev, newMarker]);
        naver.maps.Event.addListener(newMarker, 'click', function (e) {
          setSelectedStoreId(storeData.storeId);
          handleClickMarker();
        });
      });
    }
  }, [map, storeMapMarkerData]);

  return { storeMarkerArr, selectedStoreData, storeMapMarkerData };
};
