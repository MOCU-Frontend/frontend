import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchAddressData } from '../apis/address/address';
import { UserLocation } from '../store/data/nowUserLocation';
import useStore from '../store/useStore';

export const useUserLocation = () => {
  const nowUserLocation = useStore((state) => state.nowUserLocation);
  const setNowUserLocation = useStore((state) => state.setNowUserLocation);
  const userId = useStore((state) => state.userId);
  const { data: AddressData } = useQuery({
    queryKey: ['AddressData'],
    queryFn: () => fetchAddressData(userId || ''),
    enabled: !!userId,
  });

  const userLocationArr = AddressData
    ? AddressData.map((data, index) => {
        return { ...data, isChecked: index === 0 };
      })
    : [];

  useEffect(() => {
    if (!nowUserLocation && userLocationArr.length > 0) {
      setNowUserLocation(userLocationArr[0]);
    }
  }, [nowUserLocation, AddressData, setNowUserLocation, userLocationArr]);

  const [locationArr, setLocationArr] =
    useState<UserLocation[]>(userLocationArr);
  useEffect(() => {
    if (AddressData && nowUserLocation) {
      const userLocationArr = AddressData
        ? AddressData.map((data, index) => {
            return { ...data, isChecked: index === 0 };
          })
        : [];
      const checkedLocationIdx = userLocationArr.findIndex((x) => x.isChecked);
      const nowLocationIdx = userLocationArr.findIndex(
        (x) => x.addressId === nowUserLocation.addressId
      );
      if (checkedLocationIdx === -1) throw new Error('invalid userLocaionArr');
      if (nowLocationIdx === -1) throw new Error('invalid nowUserLocation');
      const copiedArr = [...userLocationArr];
      copiedArr[checkedLocationIdx].isChecked = false;
      copiedArr[nowLocationIdx].isChecked = true;
      setLocationArr(copiedArr);
    }
  }, [AddressData, nowUserLocation]);
  return { locationArr, setLocationArr };
};
