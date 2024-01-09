import { useEffect, useState } from 'react';
import pinMapNormalImg from '../assets/icon/pinMapNormal.svg';
import pinMapGiftImg from '../assets/icon/pinMapGift.svg';
import pinMapFireImg from '../assets/icon/pinMapFire.svg';
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
  useEffect(() => {
    if (map) {
      storeMapData.forEach((storeData, index) => {
        const imgUrl = storeData.isFire
          ? pinMapFireImg
          : storeData.isGift
            ? pinMapGiftImg
            : pinMapNormalImg;
        const newMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(storeData.loc.lat, storeData.loc.lng),
          map: map,
          icon: imgUrl,
        });
        setStoreMarkerArr((prev) => [...prev, newMarker]);
        naver.maps.Event.addListener(newMarker, 'click', function (e) {
          console.log(storeData.title);
          setSelectedStoreInform(storeMapData[index]);
          handleClickMarker();
        });
      });
    }
  }, [map]);

  return { storeMarkerArr, selectedStoreInform };
};
