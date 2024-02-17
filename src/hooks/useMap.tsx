import { useEffect, useState } from 'react';

export const useMap = (
  scriptError: ErrorEvent | undefined,
  scriptLoading: boolean,
  mapContainerRef: React.RefObject<HTMLDivElement>
) => {
  const [map, setMap] = useState<naver.maps.Map | undefined>();

  useEffect(() => {
    if (!scriptError && !scriptLoading && mapContainerRef.current) {
      const defaultCenter: naver.maps.LatLng = new naver.maps.LatLng(
        37.540634,
        127.070144
      );
      setMap(
        new naver.maps.Map(mapContainerRef.current, {
          center: defaultCenter,
          zoom: 16,
        })
      );
    }
  }, [scriptError, scriptLoading, mapContainerRef]);

  return { map };
};
