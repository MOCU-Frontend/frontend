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
import { useMutation } from '@tanstack/react-query';
import { userStampRequestData } from '../../store/Type/Stamp/stampRequest';
import instance from '../../apis/instance';
import { userCouponRequestData } from '../../store/Type/My/Coupon/couponRequest';

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

  // mapApiGet 상태 관련 코드
  const [mapApiGet, setMapApiGet] = useState<boolean>(false);

  // event가 켜져있는지 안켜져 있는지
  const [eventOption, setEventOption] = useState<boolean>(false);

  // 쿠폰 사용 임박인지 아닌지
  const [dueDateOption, setDueDateOption] = useState<boolean>(false);

  // 카테고리 옵션
  const [categoryOption, setCategoryOption] = useState<string>('업종 전체');

  // 가본 곳만 옵션
  const [isVisitedOption, setIsVisitedOption] = useState<boolean>(false);

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

      // 업종 전체가 선택되어 있으면 mapApiGet이 0이다.
      if (copiedMenuItemDataArr[menuIndex].bodyDataArr[newIndex].id === 0) {
        setMapApiGet((prevMapApiGet) => !prevMapApiGet);
        setCategoryOption('업종 전체');
      }

      // 카페가 선택되어 있을 때
      else if (
        copiedMenuItemDataArr[menuIndex].bodyDataArr[newIndex].id === 1
      ) {
        setMapApiGet((prevMapApiGet) => !prevMapApiGet);
        setCategoryOption('카페');
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
  const handleClickEvent = () => {
    setMapApiGet((prevMapApiGet) => !prevMapApiGet);
    setEventOption((prevEventOption) => !prevEventOption);
  };

  const handleClickDueDate = () => {
    setMapApiGet((prevMapApiGet) => !prevMapApiGet);
    setDueDateOption((prevEventOption) => !prevEventOption);
  };

  const handleClickIsVisited = () => {
    setMapApiGet((prevMapApiGet) => !prevMapApiGet);
    setIsVisitedOption((prevEventOption) => !prevEventOption);
  };

  // useEffect를 사용하여 상태가 업데이트될 때 로그 출력
  useEffect(() => {
    console.log(mapApiGet);
  }, [mapApiGet]);

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

  const navigate = useNavigate();

  const handleClickTargetBtn = () => {
    if (userLocation && map) {
      map.setCenter(new naver.maps.LatLng(userLocation.lat, userLocation.lng));
    } else {
      throw new Error('no userLocation or Map!!');
    }
  };

  const [mapCenterLat, setMapCenterLat] = useState<number>(0);
  const [mapCenterLng, setMapCenterLng] = useState<number>(0);

  const handleClickSearchBtn = () => {
    if (map) {
      // 지도의 중앙 위도와 경도 가져오기
      setMapApiGet((prevMapApiGet) => !prevMapApiGet);
      let mapCenter = map.getCenter() as naver.maps.LatLng;
      console.log(mapCenter.lat());
      console.log(mapCenter.lng());
      setMapCenterLat(mapCenter.lat);
      setMapCenterLng(mapCenter.lng);
    }
  };

  const { storeMarkerArr, selectedStoreData } = useStoreMapData(
    map,
    handleShowBottomSheet,
    mapApiGet,
    eventOption,
    dueDateOption,
    categoryOption,
    isVisitedOption,
    mapCenterLat,
    mapCenterLng
  );

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
  const userId = useStore((state) => state.userId);

  const userStampMutation = useMutation({
    mutationFn: (newData: userStampRequestData) => {
      return instance.patch('/stamp/request', newData);
    },
    onSuccess: () => {
      console.log('userStampMutation success!');
    },
  });

  const handleRequestStamp = (onSuccess: () => void) => {
    userStampMutation.mutate(
      { userId: userId ? parseInt(userId) : 1, storeId: 1 },
      { onSuccess }
    );
  };

  const userCouponMutation = useMutation({
    mutationFn: (newData: userCouponRequestData) => {
      return instance.patch('/coupon/request', newData);
    },
    onSuccess: () => {
      console.log('userCouponMutation success!');
    },
  });

  const handleRequestCoupon = (onSuccess: () => void) => {
    userCouponMutation.mutate(
      { userId: userId ? parseInt(userId) : 1, storeId: 1 },
      { onSuccess }
    );
  };

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
                isChecked={eventOption}
                onClick={handleClickEvent}
              />
              <CheckFilter
                border={1}
                borderColor='sub-purple-light'
                label='쿠폰 사용 임박'
                isChecked={dueDateOption}
                onClick={handleClickDueDate}
              />
              <CheckFilter
                border={1}
                borderColor='sub-purple-light'
                label='가본 곳만'
                isChecked={isVisitedOption}
                onClick={handleClickDueDate}
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
              isChecked={eventOption}
              onClick={handleClickEvent}
            />
            <CheckFilter
              border={1}
              borderColor='sub-purple-light'
              label='쿠폰 사용 임박'
              isChecked={dueDateOption}
              onClick={handleClickDueDate}
            />
            <CheckFilter
              border={1}
              borderColor='sub-purple-light'
              label='가본 곳만'
              isChecked={isVisitedOption}
              onClick={handleClickIsVisited}
            />
          </div>
        )}
        {isShowSearchBtn && (
          <div className={styles.mapSearchBtnWrapper}>
            <MapSearchBtn onClick={handleClickSearchBtn} />
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
        handleRequestStamp={handleRequestStamp}
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
        handleRequestCoupon={handleRequestCoupon}
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

export { Map as Component };
