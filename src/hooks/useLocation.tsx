import { useEffect, useState } from 'react';

type Location = {
  lat: number; // 위도
  lng: number; // 경도
};

export const useLocation = () => {
  const [userLocation, setUserLocation] = useState<Location | undefined>();
  const [error, setError] = useState<GeolocationPositionError | undefined>();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (posError: GeolocationPositionError) => {
        setError(posError);
      }
    );
  }, []);
  return { userLocation, error };
};
