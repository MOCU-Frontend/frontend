import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../components/HeaderBackBtn/HeaderBackBtn';
import MapBottomSheet from '../../../../components/Map/atoms/BottomSheet/MapBottomSheet';
import MapTargetBtn from '../../../../components/Map/atoms/TargetBtn/MapTargetBtn';
import MyNowLocationBottomSheet from '../../../../components/My/Location/Now/atoms/BottomSheet/MyNowLocationBottomSheet';
import { useAddressByCoord } from '../../../../hooks/useAddressByCoord';
import { useCenterMarker } from '../../../../hooks/useCenterMarker';
import { useLocation } from '../../../../hooks/useLocation';
import { useMap } from '../../../../hooks/useMap';
import { useMapWithGeocoder } from '../../../../hooks/useMapWithGeocoder';
import { useScript } from '../../../../hooks/useScript';
import { useUserLocationMap } from '../../../../hooks/useUserLocationMap';
import styles from './MyNowLocation.module.css';

const BOTTOM_SHEET_HEIGHT = 186.65; // TODO: 바텀시트 height 재는 방법 생각해보기

const MyNowLocation: React.FC = () => {
  const navigate = useNavigate();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const [isShowBottomSheet, setIsShowBottomSheet] = useState<boolean>(true);
  const { userLocation, error: userLocationError } = useLocation();
  const { loading: scriptLoading, error: scriptError } = useScript(
    `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`
  );
  const { loading: geoCoderScriptLoading, error: geocoderScriptError } =
    useScript(
      `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}&submodules=geocoder`
    );
  const { map } = useMapWithGeocoder(
    scriptError,
    scriptLoading,
    geocoderScriptError,
    geoCoderScriptLoading,
    mapContainerRef
  );
  const { userLocMarker } = useUserLocationMap(map, userLocation);

  const handleShowBottomSheet = () => {
    setIsShowBottomSheet((prev) => {
      if (!prev) {
        mapWrapperRef.current &&
          (mapWrapperRef.current.style.height = `${
            window.innerHeight - BOTTOM_SHEET_HEIGHT
          }px`);
        if (map) {
          map.setSize(
            new naver.maps.Size(
              window.innerWidth,
              window.innerHeight - BOTTOM_SHEET_HEIGHT
            )
          );
        }
        return true;
      } else return true;
    });
  };
  const { centerMarker, centerCoord } = useCenterMarker(
    map,
    handleShowBottomSheet
  );

  const { address: centerAddress } = useAddressByCoord(
    scriptError,
    scriptLoading,
    geocoderScriptError,
    geoCoderScriptLoading,
    centerCoord
  );

  const handleClickTargetBtn = () => {
    if (userLocation && map) {
      map.setCenter(new naver.maps.LatLng(userLocation.lat, userLocation.lng));
    } else {
      throw new Error('no userLocation or Map!!');
    }
  };

  const handleDragDownBottomSheet = () => {
    setIsShowBottomSheet(false);
    if (map) {
      mapWrapperRef.current &&
        (mapWrapperRef.current.style.height = `${window.innerHeight}px`);
      map.setSize(new naver.maps.Size(window.innerWidth, window.innerHeight));
    }
  };

  if (scriptError || geocoderScriptError) return <p>Map Error!</p>;
  if (scriptLoading || geoCoderScriptLoading)
    return <div className={styles.wrapper}>map loading..</div>;

  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn
          headerTitle='현재 위치'
          onClickBackBtn={() => navigate(-1)}
        />
      </div>

      <div className={styles.mapWrapper} ref={mapWrapperRef}>
        <div className={styles.map} ref={mapContainerRef}></div>
        <div className={styles.targetBtnWrapper}>
          <MapTargetBtn onClick={handleClickTargetBtn} />
        </div>
      </div>
      {isShowBottomSheet && (
        <MyNowLocationBottomSheet
          onDragBottom={handleDragDownBottomSheet}
          locationText='서울 화양동 7-44 단산화빌딩'
          btnStatus='지번'
          handleChangeBtnStatus={() => {}}
          handleClickSetLocationBtn={() => {}}
        />
      )}
      <div className={styles.bottomSheetBlock}></div>
    </div>
  );
};

export default MyNowLocation;
