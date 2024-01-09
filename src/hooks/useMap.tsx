import { useEffect, useState } from 'react';

export const useMap = (
  scriptError: ErrorEvent | undefined,
  scriptLoading: boolean,
  mapContainerRef: React.RefObject<HTMLDivElement>
) => {
  const [map, setMap] = useState<naver.maps.Map | undefined>();

  useEffect(() => {
    if (
      !scriptError &&
      !scriptLoading &&
      mapContainerRef &&
      mapContainerRef.current
    ) {
      const defaultCenter: naver.maps.LatLng = new naver.maps.LatLng(
        37.3595704,
        127.105399
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
