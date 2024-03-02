import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyLocationEditSeeMapBtn from '../../../../components/My/Location/Edit/atoms/Buttons/SeeMap/MyLocationEditSeeMapBtn';
import MyNowLocationBottomSheet from '../../../../components/My/Location/Now/atoms/BottomSheet/MyNowLocationBottomSheet';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import BodyTitleText from '../../../../components/Text/BodyTitleText/BodyTitleText';
import { useAddressByLocation } from '../../../../hooks/useAddressByLocation';
import { useLocation } from '../../../../hooks/useLocation';
import { useMapWithGeocoder } from '../../../../hooks/useMapWithGeocoder';
import { useScript } from '../../../../hooks/useScript';
import { useSetUserLocation } from '../../../../hooks/useSetUserLocation';
import { colors } from '../../../../styles/colors';
import styles from './LocationSetting.module.css';

const LocationSetting = () => {
  const navigate = useNavigate();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const { userLocation } = useLocation();
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
  useSetUserLocation(map, userLocation);

  const { address: centerAddress } = useAddressByLocation(
    scriptError,
    scriptLoading,
    geocoderScriptError,
    geoCoderScriptLoading,
    userLocation
  );

  const [addressFormat, setAddressFormat] = useState<'지번' | '도로명'>('지번');
  if (scriptError) return <p>Map Error!</p>;
  if (scriptLoading) return <div className={styles.wrapper}>map loading..</div>;

  return (
    <>
      <div className={styles.titleTextWrapper}>
        <BodyTitleText
          text='모쿠 님이 자주 사용할 위치를 한 곳 설정해주세요!'
          color={colors.black}
        />
      </div>
      <div
        className={styles.searchBarWrapper}
        onClick={() => navigate('search')}
      >
        <SearchBar
          placeholder='지번, 도로명, 건물명으로 검색'
          onClickSearchBtn={() => {}}
        />
      </div>
      <div className={styles.mapWrapper} onClick={() => navigate('now')}>
        <div className={styles.mapSmall} ref={mapContainerRef}></div>
      </div>
      <div className={styles.seeMapBtnWrapper}>
        <MyLocationEditSeeMapBtn onClick={() => navigate('now')} />
      </div>
      <MyNowLocationBottomSheet
        onDragBottom={() => navigate(-1)}
        locationText={
          centerAddress
            ? addressFormat === '지번'
              ? centerAddress.jibunAddress
              : centerAddress.roadAddress
            : 'no address..'
        }
        btnStatus='지번'
        handleChangeBtnStatus={() =>
          setAddressFormat((prev) => (prev === '지번' ? '도로명' : '지번'))
        }
        handleClickSetLocationBtn={() => navigate('name')}
      />
    </>
  );
};

export { LocationSetting as Component };
