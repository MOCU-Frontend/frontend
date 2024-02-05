import { useState } from 'react';
import { UserLocation, userLocationArr } from '../store/data/nowUserLocation';

export const useUserLocation = (nowUserLocation: UserLocation) => {
  const checkedLocationIdx = userLocationArr.findIndex((x) => x.isChecked);
  const nowLocationIdx = userLocationArr.findIndex(
    (x) => x.id === nowUserLocation.id
  );
  if (checkedLocationIdx === -1) throw new Error('invalid userLocaionArr');
  if (nowLocationIdx === -1) throw new Error('invalid nowUserLocation');
  const copiedArr = [...userLocationArr];
  copiedArr[checkedLocationIdx].isChecked = false;
  copiedArr[nowLocationIdx].isChecked = true;
  const [locationArr, setLocationArr] = useState<UserLocation[]>(copiedArr);

  return { locationArr, setLocationArr };
};
