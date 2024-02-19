import React, { useEffect, useState } from 'react';
import pinMapNormalImg from '../assets/icon/pinMapNormal.svg';
import pinMapGiftImg from '../assets/icon/pinMapGift.svg';
import pinMapFireImg from '../assets/icon/pinMapFire.svg';
import axios from 'axios';
import {
  MapStoreMarkerResponse,
  MapStoreResponse,
} from '../store/Type/Map/map';
import instance from '../apis/instance';
import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { fetchMapStoreMarkerData } from '../apis/map/fetchMapStoreMarkerData';

import { fetchMapStoreData } from './../apis/map/fetchMapStoreData';
import useStore from '../store/useStore';

// `useStoreMapData`는 지도와 마커 클릭 이벤트 핸들러를 인자로 받는 커스텀 훅입니다.
export const useStoreMapData = (
  map: naver.maps.Map | undefined,
  handleClickMarker: () => void,
  mapApiGet: boolean,
  eventOption: boolean,
  dueDateOption: boolean,
  categoryOption: string
) => {
  // `storeMarkerArr`는 지도에 표시될 마커들의 상태를 관리하는 state입니다.
  const [storeMarkerArr, setStoreMarkerArr] = useState<naver.maps.Marker[]>([]);

  const userId = useStore((state) => state.userId);

  // `useQuery`를 사용하여 `fetchMapStoreMarkerData` 함수를 호출하고,
  // 그 결과를 `storeMapMarkerData`에 저장합니다.

  // `useQuery`를 사용하여 `fetchMapStoreMarkerData` 함수를 호출하고,
  // 그 결과를 `storeMapMarkerData`에 저장합니다.
  const {
    data: storeMapMarkerData,
    isLoading: isStoreMapMarkerDataLoading,
    isError: isStoreMapMarkerDataError,
  } = useQuery({
    queryKey: ['mapStoreMarker', mapApiGet],
    queryFn: () =>
      fetchMapStoreMarkerData(
        userId || '',
        37.5404257,
        127.07209,
        eventOption,
        dueDateOption,
        categoryOption
      ),
    enabled: !!userId,
  });

  // `selectedStoreId`는 현재 선택된 상점의 ID를 관리하는 state입니다.
  const [selectedStoreId, setSelectedStoreId] = useState<number | undefined>();

  // `useQuery`를 사용하여 `fetchMapStoreData` 함수를 호출하고,
  // 그 결과를 `selectedStoreData`에 저장합니다.
  // `selectedStoreId`가 변경될 때마다 새로운 데이터를 가져옵니다.
  const {
    data: selectedStoreData,
    isLoading: isSelectedStoreLoading,
    isError: isSelectedStoreError,
  } = useQuery({
    queryKey: ['selectedMapStore', selectedStoreId],
    queryFn: () => fetchMapStoreData(userId || '', selectedStoreId || 5),
    enabled: !!selectedStoreId && !!userId,
  });

  useEffect(() => {
    // 기존의 마커를 모두 제거합니다.
    storeMarkerArr.forEach((marker) => marker.setMap(null));
    setStoreMarkerArr([]);

    if (map && storeMapMarkerData) {
      storeMapMarkerData.forEach((storeData) => {
        console.log(storeData.latitude);
        console.log(storeData.longitude);
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
  }, [map, mapApiGet, storeMapMarkerData]);

  return { storeMarkerArr, selectedStoreData, storeMapMarkerData };
};
