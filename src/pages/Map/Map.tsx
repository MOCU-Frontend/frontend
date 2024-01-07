import React, { useEffect, useRef } from 'react';
import { useScript } from '../../hooks/useScript';
import styles from './Map.module.css';

interface Props {}

const Map: React.FC<Props> = ({}: Props) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loading, error] = useScript(
    `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`
  );

  useEffect(() => {
    if (!error && !loading && mapContainerRef && mapContainerRef.current) {
      const center: naver.maps.LatLng = new naver.maps.LatLng(
        37.3595704,
        127.105399
      );
      let map: naver.maps.Map;
      map = new naver.maps.Map(mapContainerRef.current, {
        center: center,
        zoom: 16,
      });
    }
  }, [error, loading]);

  if (error) return <p>Error!</p>;
  if (loading) return <div className={styles.wrapper}>map loading..</div>;

  return (
    <div className={styles.wrapper}>
      loading end!<div className={styles.map} ref={mapContainerRef}></div>
    </div>
  );
};

export default Map;
