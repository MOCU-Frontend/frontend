import { useEffect, useState } from 'react';

export const useAddressByCoord = (
  scriptError: ErrorEvent | undefined,
  scriptLoading: boolean,
  geocoderScriptError: ErrorEvent | undefined,
  geoCoderScriptLoading: boolean,
  coord: naver.maps.Coord | undefined
) => {
  const [address, setAddress] = useState<
    naver.maps.Service.ReverseGeocodeAddress | undefined
  >();
  useEffect(() => {
    if (
      !scriptError &&
      !scriptLoading &&
      coord &&
      !geocoderScriptError &&
      !geoCoderScriptLoading &&
      naver.maps.Service
    ) {
      naver.maps.Service.reverseGeocode(
        { coords: coord },
        (status, response) => {
          if (status !== naver.maps.Service.Status.OK) {
            return alert('Something wrong!');
          }

          console.log(response.v2);
        }
      );
    }
  }, [
    scriptError,
    scriptLoading,
    coord,
    geocoderScriptError,
    geoCoderScriptLoading,
  ]);

  return { address };
};