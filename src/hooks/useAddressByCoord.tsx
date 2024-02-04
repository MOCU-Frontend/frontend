import { useEffect, useState } from 'react';
import { NaverMapTypeEdited } from '../store/Type/NaverMap/NaverMap';

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
  const [buildingName, setBuildingName] = useState<string | undefined>();
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
        { coords: coord, orders: 'addr,roadaddr' },
        (status, response) => {
          if (status !== naver.maps.Service.Status.OK) {
            return alert('Something wrong!');
          }
          setAddress(response.v2.address);
          const resultsEdited: NaverMapTypeEdited.ResultItem[] = response.v2
            .results as any;
          const roadAddr = resultsEdited.find((x) => x.name === 'roadaddr');
          if (roadAddr) {
            setBuildingName(roadAddr.land.addition0.value);
          } else {
            setBuildingName(undefined);
          }
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

  return { address, buildingName };
};
