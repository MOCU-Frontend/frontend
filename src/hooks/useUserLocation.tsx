import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchAddressData } from '../apis/address/address';
import { UserLocation } from '../store/data/nowUserLocation';

export const useUserLocation = (nowUserLocation: UserLocation) => {
  const {
    data: AddressData,
    isLoading: isAddressDataLoading,
    isError: isAddressDataError,
  } = useQuery({
    queryKey: ['AddressData'],
    queryFn: () => fetchAddressData(5),
  });
  const userLocationArr = AddressData
    ? AddressData.map((data, index) => {
        return { ...data, isChecked: index === 0, id: index };
      })
    : [];
  const checkedLocationIdx = userLocationArr.findIndex((x) => x.isChecked);
  const nowLocationIdx = userLocationArr.findIndex(
    (x) => x.name === nowUserLocation.name
  );
  const copiedArr = [...userLocationArr];
  copiedArr[checkedLocationIdx] &&
    (copiedArr[checkedLocationIdx].isChecked = false);
  copiedArr[checkedLocationIdx] && (copiedArr[nowLocationIdx].isChecked = true);
  const [locationArr, setLocationArr] = useState<UserLocation[]>(copiedArr);
  useEffect(() => {
    if (AddressData) {
      const userLocationArr = AddressData
        ? AddressData.map((data, index) => {
            return { ...data, isChecked: index === 0, id: index };
          })
        : [];
      const checkedLocationIdx = userLocationArr.findIndex((x) => x.isChecked);
      const nowLocationIdx = userLocationArr.findIndex(
        (x) => x.name === nowUserLocation.name
      );
      if (checkedLocationIdx === -1) throw new Error('invalid userLocaionArr');
      if (nowLocationIdx === -1) throw new Error('invalid nowUserLocation');
      const copiedArr = [...userLocationArr];
      copiedArr[checkedLocationIdx].isChecked = false;
      copiedArr[nowLocationIdx].isChecked = true;
      setLocationArr(copiedArr);
    }
  }, [AddressData]);
  return { locationArr, setLocationArr };
};
