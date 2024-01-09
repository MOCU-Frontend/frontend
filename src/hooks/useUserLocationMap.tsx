import { useEffect, useState } from 'react';
import locationImg from '../assets/icon/location.svg';

type Location = {
  lat: number; // 위도
  lng: number; // 경도
};

export const useUserLocationMap = (
  map: naver.maps.Map | undefined,
  userLocation: Location | undefined
) => {
  const [userLocMarker, setUserLocMarker] = useState<
    naver.maps.Marker | undefined
  >();

  useEffect(() => {
    if (userLocation && map) {
      // map.setCenter(new naver.maps.LatLng(userLocation.lat, userLocation.lng));
      if (!userLocMarker) {
        setUserLocMarker(
          new naver.maps.Marker({
            position: new naver.maps.LatLng(userLocation.lat, userLocation.lng),
            map: map,
            icon: locationImg,
          })
        );
      }
    }
  }, [userLocation, map, userLocMarker]);

  return { userLocMarker };
};
