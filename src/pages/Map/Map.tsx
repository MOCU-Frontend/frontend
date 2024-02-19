import React, { useRef, useState, useEffect } from 'react';
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

// 필터 관련
import {
  initialMenuItemDataArr,
  MenuItemData,
  initialSectorFilterDataArr,
} from '../../store/data/mapFilter';
import SlideTabViewFilter from '../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import BottomSheet from '../../components/BottomSheet/BottomSheet';

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

  // 필터 관련 코드

  // mapJsonType 상태 관련 코드
  const [mapJsonType, setMapJsonType] = useState(0);

  // 첫번째 필터에서 무슨 타입을 골랐는지 저장하기 위해서 만든 상태
  const [storeJsonType, setStoreJsonType] = useState(0);

  // FilterBottomSheet를 보이게 하는지 상태관리
  const [isFilterBottomSheetVisible, setIsFilterBottomSheetVisible] =
    useState(false);

  const [menuItemDataArr, setMenuItemDataArr] = useState<MenuItemData[]>(
    initialMenuItemDataArr
  );

  const handleDragFilterBottomSheet = () => {
    setIsFilterBottomSheetVisible(false);
  };

  const handleClickMenuBodyItem = (
    menuIndex: number,
    newIndex: number,
    prevIndex?: number
  ) => {
    if (!menuItemDataArr[menuIndex]) throw new Error('invalid menuIndex!!');
    if (!menuItemDataArr[menuIndex].bodyDataArr[newIndex])
      throw new Error('invalid newIndex!!');
    if (
      prevIndex !== undefined &&
      !menuItemDataArr[menuIndex].bodyDataArr[prevIndex]
    )
      throw new Error('invalid prevIndex!!');
    setMenuItemDataArr((prev) => {
      const copiedMenuItemDataArr = [...prev];
      if (prevIndex !== undefined) {
        copiedMenuItemDataArr[menuIndex].bodyDataArr[prevIndex].isChecked =
          false;
        copiedMenuItemDataArr[menuIndex].bodyDataArr[newIndex].isChecked = true;
      } else {
        copiedMenuItemDataArr[menuIndex].bodyDataArr[newIndex].isChecked =
          !copiedMenuItemDataArr[menuIndex].bodyDataArr[newIndex].isChecked;
      }

      // 업종 전체가 선택되어 있으면 MapJsonType이 0이다.
      if (copiedMenuItemDataArr[menuIndex].bodyDataArr[newIndex].id === 0) {
        setStoreJsonType(0);
        setMapJsonType(0);
      }

      // 카페가 선택되어 있으면 MapJsonType이 1이다.
      else if (
        copiedMenuItemDataArr[menuIndex].bodyDataArr[newIndex].id === 1
      ) {
        setStoreJsonType(1);
        setMapJsonType(1);
      }

      return copiedMenuItemDataArr;
    });
  };

  const handleClickMenuItem = (prevIndex: number, newIndex: number) => {
    setMenuItemDataArr((prev) => {
      const copiedArr = [...prev];
      copiedArr[prevIndex].isChecked = false;
      copiedArr[newIndex].isChecked = true;
      return copiedArr;
    });
  };

  // 필터를 클릭했을 때
  const handleFilterSelectClick = (newIndex: number) => {
    const prevIndex = menuItemDataArr.findIndex((x) => x.isChecked);
    if (prevIndex === -1) throw new Error('no checked menu item!!');

    handleClickMenuItem(prevIndex, newIndex);
    setIsFilterBottomSheetVisible(true);
  };

  // event 필터를 클릭했을 때
  // event filter가 on이면 mapJsonType가 2, off가 되면 아까 필터에서 저장해놨던 mapJsonType으로 바뀐다.
  const handleClickEvent = () => {
    setMapJsonType((prevType) => (prevType === 2 ? storeJsonType : 2));
  };

  // useEffect를 사용하여 상태가 업데이트될 때 로그 출력
  useEffect(() => {
    console.log(mapJsonType);
  }, [mapJsonType]);

  const selectedSectorFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  );

  // FilterBottomSheet 코드 끝

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

  const { storeMarkerArr, selectedStoreData } = useStoreMapData(
    map,
    handleShowBottomSheet,
    mapJsonType
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
              text={nowUserLocation ? nowUserLocation.name : '위치 없음'}
              onClick={() => navigate('/mylocation')}
              color={colors.mainPurple}
              size={'medium'}
            />
          )}
          {isShowBottomSheet && (
            <div className={styles.filtersInHeaderWrapper}>
              <CheckFilterSelect
                isChecked={false}
                label={
                  selectedSectorFilterItem
                    ? selectedSectorFilterItem.title
                    : 'no selected item!'
                }
                border={1}
                borderColor='sub-purple-light'
                onClick={() => handleFilterSelectClick(0)}
              />
              <CheckFilter
                border={1}
                borderColor='sub-purple-light'
                label='이벤트 중'
                isChecked={mapJsonType === 2}
                onClick={handleClickEvent}
              />
            </div>
          )}
        </HeaderBackBtn>
        {!isShowBottomSheet && (
          <div className={styles.filtersWrapper}>
            <CheckFilterSelect
              isChecked={false}
              label={
                selectedSectorFilterItem
                  ? selectedSectorFilterItem.title
                  : 'no selected item!'
              }
              border={1}
              borderColor='sub-purple-light'
              onClick={() => handleFilterSelectClick(0)}
            />
            <CheckFilter
              border={1}
              borderColor='sub-purple-light'
              label='이벤트 중'
              isChecked={mapJsonType === 2}
              onClick={handleClickEvent}
            />
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
      {isShowBottomSheet && selectedStoreData && (
        <MapBottomSheet
          onDragBottom={handleDragDownBottomSheet}
          storeInform={selectedStoreData}
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

      {isFilterBottomSheetVisible && (
        <BottomSheet
          onDragBottom={handleDragFilterBottomSheet}
          onClickNotBottomSheet={handleDragFilterBottomSheet}
        >
          <SlideTabViewFilter
            // 옵션은 슬라이드탭뷰에 출력되지 않게 필터링
            menuItemDataArr={menuItemDataArr.filter(
              (item, index) => index === 0 || index === 1
            )}
            handleCheckedDataIndex={handleClickMenuItem}
            handleClickMenuBodyItem={handleClickMenuBodyItem}
            onClickCompleteBtn={handleDragFilterBottomSheet}
            // handleClickResetOptionBtn={handleClickResetOptionBtn}
          />
        </BottomSheet>
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
