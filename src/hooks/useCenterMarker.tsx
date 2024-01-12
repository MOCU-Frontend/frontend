import { useEffect, useState } from 'react';
import pinMapSmileImg from '../assets/icon/pinMapSmile.svg';

export const useCenterMarker = (
  map: naver.maps.Map | undefined,
  handleShowBottomSheet: () => void
) => {
  const [centerMarker, setCenterMarker] = useState<
    naver.maps.Marker | undefined
  >();
  const [centerCoord, setCenterCoord] = useState<
    naver.maps.Coord | undefined
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
        setCenterCoord(map.getCenter());
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
          setCenterCoord(centerLocation);
          handleShowBottomSheet();
        }
      );
      return () => naver.maps.Event.removeListener(listener);
    }
  }, [map, centerMarker]);

  return { centerMarker, centerCoord };
};
