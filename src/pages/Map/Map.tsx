import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from '../../hooks/useLocation';
import { useScript } from '../../hooks/useScript';
import styles from './Map.module.css';

type Location = {
  lat: number; // 위도
  lng: number; // 경도
};

interface Props {}

const Map: React.FC<Props> = ({}: Props) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<naver.maps.Map | undefined>();
  const { userLocation, error: userLocationError } = useLocation();
  const [loading, error] = useScript(
    `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`
  );

  useEffect(() => {
    if (!error && !loading && mapContainerRef && mapContainerRef.current) {
      const center: naver.maps.LatLng = new naver.maps.LatLng(
        37.3595704,
        127.105399
      );
      setMap(
        new naver.maps.Map(mapContainerRef.current, {
          center: center,
          zoom: 16,
        })
      );
    }
  }, [error, loading]);

  if (userLocation && map) {
    map.setCenter(new naver.maps.LatLng(userLocation.lat, userLocation.lng));
  }

  if (error) return <p>Error!</p>;
  if (loading) return <div className={styles.wrapper}>map loading..</div>;
  return (
    <div className={styles.wrapper}>
      loading end!<div className={styles.map} ref={mapContainerRef}></div>
    </div>
  );
};

export default Map;
