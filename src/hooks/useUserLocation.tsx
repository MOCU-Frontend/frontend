import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { fetchAddressData } from '../apis/address/address';
import { UserLocation } from '../store/data/nowUserLocation';
import useStore from '../store/useStore';
import { useCarouselData } from './useCarouselData';

export const useUserLocation = () => {
  const nowUserLocation = useStore((state) => state.nowUserLocation);
  const setNowUserLocation = useStore((state) => state.setNowUserLocation);
  const userId = useStore((state) => state.userId);
  const { data: AddressData } = useQuery({
    queryKey: ['AddressData'],
    queryFn: () => fetchAddressData(userId || ''),
    enabled: !!userId,
  });

  const userLocationArr = useMemo(
    () =>
      AddressData
        ? AddressData.map((data, index) => {
            return { ...data, isChecked: index === 0 };
          })
        : [],
    [AddressData]
  );

  useEffect(() => {
    if (!nowUserLocation && userLocationArr.length > 0) {
      setNowUserLocation(userLocationArr[0]);
    }
  }, [nowUserLocation, AddressData, setNowUserLocation, userLocationArr]);

  const { carouselItemArr: locationArr, handleCheckedDataIndex } =
    useCarouselData<UserLocation>(userLocationArr);

  useEffect(() => {
    if (nowUserLocation && locationArr.length > 0) {
      const checkedLocationIdx = locationArr.findIndex((x) => x.isChecked);
      const nowLocationIdx = locationArr.findIndex(
        (x) => x.addressId === nowUserLocation.addressId
      );
      handleCheckedDataIndex(checkedLocationIdx, nowLocationIdx);
    }
  }, [nowUserLocation]);
  return { locationArr, handleCheckedDataIndex };
};
