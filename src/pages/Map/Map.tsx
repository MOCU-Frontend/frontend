import React, { useEffect, useRef, useState } from 'react';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import MapHeaderSelect from '../../components/Map/atoms/Select/HeaderSelect/MapHeaderSelect';
import MapTargetBtn from '../../components/Map/atoms/TargetBtn/MapTargetBtn';
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

  const handleClickTargetBtn = () => {
    if (userLocation && map) {
      map.setCenter(new naver.maps.LatLng(userLocation.lat, userLocation.lng));
    } else {
      throw new Error('no userLocation or Map!!');
    }
  };

  useEffect(() => {
    if (!error && !loading && mapContainerRef && mapContainerRef.current) {
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
  }, [error, loading]);

  if (userLocation && map) {
    map.setCenter(new naver.maps.LatLng(userLocation.lat, userLocation.lng));
  }

  if (error) return <p>Error!</p>;
  if (loading) return <div className={styles.wrapper}>map loading..</div>;
  return (
    <div className={styles.wrapper}>
      <HeaderBackBtn
        headerPaddingSize='checkFilter'
        onClickBackBtn={() => {}}
        backBtnGap={11.5}
      >
        <MapHeaderSelect text='학교' />
      </HeaderBackBtn>
      <div className={styles.mapWrapper}>
        <div className={styles.map} ref={mapContainerRef}></div>
        <div className={styles.targetBtnWrapper}>
          <MapTargetBtn onClick={handleClickTargetBtn} />
        </div>
      </div>
    </div>
  );
};

export default Map;
