import { useEffect, useState } from 'react';
import pinMapSmileImg from '../assets/icon/pinMapSmile.svg';

export const useCenterMarker = (map: naver.maps.Map | undefined) => {
  const [centerMarker, setCenterMarker] = useState<
    naver.maps.Marker | undefined
  >();

  useEffect(() => {
    if (map) {
      if (!centerMarker) {
        setCenterMarker(
          new naver.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: pinMapSmileImg,
          })
        );
      }
    }
  }, [map, centerMarker]);

  useEffect(() => {
    if (map && centerMarker) {
      const listener = naver.maps.Event.addListener(
        map,
        'center_changed',
        (centerLocation: naver.maps.Coord) => {
          centerMarker.setPosition(centerLocation);
        }
      );
      return () => naver.maps.Event.removeListener(listener);
    }
  }, [map, centerMarker]);

  return { centerMarker };
};
