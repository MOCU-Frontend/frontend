import { useEffect } from 'react';

type Location = {
  lat: number; // 위도
  lng: number; // 경도
};

export const useSetUserLocation = (
  map: naver.maps.Map | undefined,
  userLocation: Location | undefined
) => {
  useEffect(() => {
    if (userLocation && map) {
      map.setCenter(new naver.maps.LatLng(userLocation.lat, userLocation.lng));
    }
  }, [userLocation, map]);

  return {};
};
