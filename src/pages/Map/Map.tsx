import React, { useRef, useState } from 'react';
import CheckFilter from '../../components/CheckFilter/CheckFilter';
import CheckFilterSelect from '../../components/CheckFilter/Select/CheckFilterSelect';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import MapHeaderSelect from '../../components/Map/atoms/Select/HeaderSelect/MapHeaderSelect';
import MapTargetBtn from '../../components/Map/atoms/TargetBtn/MapTargetBtn';
import { useLocation } from '../../hooks/useLocation';
import { useScript } from '../../hooks/useScript';
import styles from './Map.module.css';
import MapBottomSheet from '../../components/Map/atoms/BottomSheet/MapBottomSheet';
import { useNavigate } from 'react-router-dom';
import { useMap } from '../../hooks/useMap';
import { useUserLocationMap } from '../../hooks/useUserLocationMap';
import { useStoreMapData } from '../../hooks/useStoreMapData';
import MapStampModal from '../../components/Map/atoms/Modal/StampModal/MapStampModal';
import MapCouponModal from '../../components/Map/atoms/Modal/Coupon/MapCouponModal';
import { colors } from '../../styles/colors';
import useStore from '../../store/useStore';
import MapSearchBtn from '../../components/Map/atoms/Button/Search/MapSearchBtn';

type ModalLevel = 'confirm' | 'waiting' | 'done';
type CouponModalLevel = 'confirm' | 'waiting' | 'done' | 'regularCustomer';

const BOTTOM_SHEET_HEIGHT = 371.78; // TODO: 바텀시트 height 재는 방법 생각해보기

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const [isShowBottomSheet, setIsShowBottomSheet] = useState<boolean>(false);

  const { userLocation, error: userLocationError } = useLocation();
  const { loading: scriptLoading, error: scriptError } = useScript(
    `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`
  );
  const { map } = useMap(scriptError, scriptLoading, mapContainerRef);
  const { userLocMarker } = useUserLocationMap(map, userLocation);

  const [stampModalLevel, setStampModalLevel] = useState<ModalLevel | null>(
    null
  );
  const [couponModalLevel, setCouponModalLevel] =
    useState<CouponModalLevel | null>(null);
  const [isRegularCustomer, setIsRegularCustomer] = useState(false);

  const handleShowBottomSheet = () => {
    setIsShowBottomSheet(true);
    setIsShowSearchBtn(false);
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
  };

  const { storeMarkerArr, selectedStoreInform } = useStoreMapData(
    map,
    handleShowBottomSheet
  );

  const navigate = useNavigate();

  const handleClickTargetBtn = () => {
    if (userLocation && map) {
      map.setCenter(new naver.maps.LatLng(userLocation.lat, userLocation.lng));
    } else {
      throw new Error('no userLocation or Map!!');
    }
  };

  const handleDragDownBottomSheet = () => {
    setIsShowBottomSheet(false);
    setIsShowSearchBtn(true);
    if (map) {
      mapWrapperRef.current &&
        (mapWrapperRef.current.style.height = `${window.innerHeight}px`);
      map.setSize(new naver.maps.Size(window.innerWidth, window.innerHeight));
    }
  };

  const [isShowSearchBtn, setIsShowSearchBtn] = useState(true);

  const nowUserLocation = useStore((state) => state.nowUserLocation);

  if (scriptError) return <p>Map Error!</p>;
  if (scriptLoading) return <div className={styles.wrapper}>map loading..</div>;

  return (
    <div className={styles.wrapper}>
      <div
        className={
          isShowBottomSheet ? styles.headerShortWrapper : styles.headerWrapper
        }
      >
        <HeaderBackBtn
          headerPaddingSize='checkFilter'
          onClickBackBtn={() => navigate(-1)}
          backBtnGap={isShowBottomSheet ? 24 : 11.5}
        >
          {!isShowBottomSheet && (
            <MapHeaderSelect
              text={nowUserLocation.name}
              onClick={() => navigate('/mylocation')}
              color={colors.mainPurple}
              size={'medium'}
            />
          )}
          {isShowBottomSheet && (
            <div className={styles.filtersInHeaderWrapper}>
              <CheckFilterSelect
                border={1}
                borderColor='sub-purple-light'
                label='업종 전체'
                isChecked={false}
                onClick={() => {}}
              />
              <CheckFilter
                border={1}
                borderColor='sub-purple-light'
                label='이벤트 중'
                isChecked={false}
              />
              <CheckFilter label='쿠폰 사용 임박' isChecked={true} />
              <CheckFilter label='쿠폰 사용 임박' isChecked={true} />
            </div>
          )}
        </HeaderBackBtn>
        {!isShowBottomSheet && (
          <div className={styles.filtersWrapper}>
            <CheckFilterSelect
              border={1}
              borderColor='sub-purple-light'
              label='업종 전체'
              isChecked={false}
              onClick={() => {}}
            />
            <CheckFilter
              border={1}
              borderColor='sub-purple-light'
              label='이벤트 중'
              isChecked={false}
            />
            <CheckFilter label='쿠폰 사용 임박' isChecked={true} />
            <CheckFilter label='쿠폰 사용 임박' isChecked={true} />
          </div>
        )}
        {isShowSearchBtn && (
          <div className={styles.mapSearchBtnWrapper}>
            <MapSearchBtn onClick={() => {}} />
          </div>
        )}
      </div>

      <div className={styles.mapWrapper} ref={mapWrapperRef}>
        <div className={styles.map} ref={mapContainerRef}></div>
        <div className={styles.targetBtnWrapper}>
          <MapTargetBtn onClick={handleClickTargetBtn} />
        </div>
      </div>
      {isShowBottomSheet && selectedStoreInform && (
        <MapBottomSheet
          onDragBottom={handleDragDownBottomSheet}
          storeInform={selectedStoreInform}
          onClickStampBtn={() => {
            setStampModalLevel('confirm');
            if (map) map.setSize(new naver.maps.Size(0, 0));
          }}
          onClickCouponBtn={() => {
            setCouponModalLevel('confirm');
            if (map) map.setSize(new naver.maps.Size(0, 0));
          }}
        />
      )}
      <MapStampModal
        stampModalLevel={stampModalLevel}
        setStampModalLevel={setStampModalLevel}
        onCancelModal={() => {
          if (map) {
            map.setSize(
              new naver.maps.Size(
                window.innerWidth,
                window.innerHeight - BOTTOM_SHEET_HEIGHT
              )
            );
          }
        }}
      />
      <MapCouponModal
        couponModalLevel={couponModalLevel}
        setCouponModalLevel={setCouponModalLevel}
        onCancelModal={() => {
          if (map) {
            map.setSize(
              new naver.maps.Size(
                window.innerWidth,
                window.innerHeight - BOTTOM_SHEET_HEIGHT
              )
            );
          }
        }}
        isRegularCustomer={isRegularCustomer}
        handleRegularCustomer={() => setIsRegularCustomer(true)}
      />
    </div>
  );
};

export default Map;
