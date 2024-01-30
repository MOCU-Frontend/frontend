import { useEffect, useState } from 'react';
type Location = {
  lat: number; // 위도
  lng: number; // 경도
};
export const useAddressByLocation = (
  scriptError: ErrorEvent | undefined,
  scriptLoading: boolean,
  geocoderScriptError: ErrorEvent | undefined,
  geoCoderScriptLoading: boolean,
  userLocation: Location | undefined
) => {
  const [address, setAddress] = useState<
    naver.maps.Service.ReverseGeocodeAddress | undefined
  >();
  useEffect(() => {
    if (
      !scriptError &&
      !scriptLoading &&
      userLocation &&
      !geocoderScriptError &&
      !geoCoderScriptLoading &&
      naver.maps.Service
    ) {
      naver.maps.Service.reverseGeocode(
        {
          coords: new naver.maps.LatLng(userLocation.lat, userLocation.lng),
          orders: 'addr,roadaddr',
        },
        (status, response) => {
          if (status !== naver.maps.Service.Status.OK) {
            return alert('Something wrong!');
          }
          setAddress(response.v2.address);
        }
      );
    }
  }, [
    scriptError,
    scriptLoading,
    userLocation,
    geocoderScriptError,
    geoCoderScriptLoading,
  ]);

  return { address };
};
