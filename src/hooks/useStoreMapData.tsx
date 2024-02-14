import { useEffect, useState } from 'react';
import pinMapNormalImg from '../assets/icon/pinMapNormal.svg';
import pinMapGiftImg from '../assets/icon/pinMapGift.svg';
import pinMapFireImg from '../assets/icon/pinMapFire.svg';
import axios from 'axios';
import {
  MapStoreMarkerResponse,
  MapStoreResponse,
} from '../store/Type/Map/map';
import { useQuery } from '@tanstack/react-query';
type StoreData = {
  title: string;
  category: string;
  loc: { lat: number; lng: number };
  couponNum: number;
  isFire: boolean;
  isChecked: boolean;
  isGift: boolean;
};

const storeMapData: StoreData[] = [
  {
    title: '크림베이글 건대점1',
    category: '베이커리1',
    loc: { lat: 37.3595704, lng: 127.105399 },
    couponNum: 1,
    isFire: false,
    isChecked: false,
    isGift: false,
  },
  {
    title: '크림베이글 건대점2',
    category: '베이커리2',
    loc: { lat: 37.3696708, lng: 127.105405 },
    couponNum: 0,
    isFire: true,
    isChecked: false,
    isGift: false,
  },
  {
    title: '크림베이글 건대점3',
    category: '베이커리3',
    loc: { lat: 37.3696718, lng: 127.136404 },
    couponNum: 5,
    isFire: false,
    isChecked: false,
    isGift: true,
  },
];
export const useStoreMapData = (
  map: naver.maps.Map | undefined,
  handleClickMarker: () => void
) => {
  const [storeMarkerArr, setStoreMarkerArr] = useState<naver.maps.Marker[]>([]);
  const [selectedStoreInform, setSelectedStoreInform] = useState<
    StoreData | undefined
  >();

  const fetchMapStoreMarkerData = async (
    lat: number,
    lng: number,
    userId: number
  ) => {
    try {
      const response = await axios.get(
        'http://localhost:3000/data/map/mapStoreMarkerDummyData.json'
      );
      const data: MapStoreMarkerResponse = response.data;
      return data.result;
    } catch (error) {
      throw new Error('MapStoreMarker data error');
    }
  };
  const {
    data: storeMapMarkerData,
    isLoading: isStoreMapMarkerDataLoading,
    isError: isStoreMapMarkerDataError,
  } = useQuery({
    queryKey: ['mapStoreMarker'],
    queryFn: () => fetchMapStoreMarkerData(1, 5, 4),
  });

  const fetchMapStoreData = async (userId: number, storeId: number) => {
    try {
      const response = await axios.get(
        'http://localhost:3000/data/map/mapStoreDummyData.json'
      );
      const data: MapStoreResponse = response.data;
      return data.result;
    } catch (error) {
      throw new Error('MapStore data error');
    }
  };
  const [selectedStoreId, setSelectedStoreId] = useState<number | undefined>();
  const {
    data: selectedStoreData,
    isLoading: isSelectedStoreLoading,
    isError: isSelectedStoreError,
  } = useQuery({
    queryKey: ['selectedMapStore', selectedStoreId],
    queryFn: () => fetchMapStoreData(1, selectedStoreId || 5),
    enabled: !!selectedStoreId,
  });

  useEffect(() => {
    if (map && storeMapMarkerData) {
      storeMapMarkerData.forEach((storeData, index) => {
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
          // console.log(storeData.title);
          // setSelectedStoreInform(storeMapData[index]);
          setSelectedStoreId(storeData.storeId);
          handleClickMarker();
        });
      });
    }
  }, [map]);

  return { storeMarkerArr, selectedStoreData, storeMapMarkerData };
};
