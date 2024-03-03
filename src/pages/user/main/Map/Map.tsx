import React, { useRef, useState } from 'react';
import CheckFilter from '../../../../components/CheckFilter/CheckFilter';
import CheckFilterSelect from '../../../../components/CheckFilter/Select/CheckFilterSelect';
import HeaderBackBtn from '../../../../components/HeaderBackBtn/HeaderBackBtn';
import MapHeaderSelect from '../../../../components/Map/atoms/Select/HeaderSelect/MapHeaderSelect';
import MapTargetBtn from '../../../../components/Map/atoms/TargetBtn/MapTargetBtn';
import { useLocation } from '../../../../hooks/useLocation';
import { useScript } from '../../../../hooks/useScript';
import styles from './Map.module.css';
import MapBottomSheet from '../../../../components/Map/atoms/BottomSheet/MapBottomSheet';
import { useNavigate } from 'react-router-dom';
import { useMap } from '../../../../hooks/useMap';
import { useUserLocationMap } from '../../../../hooks/useUserLocationMap';
import { useStoreMapData } from '../../../../hooks/useStoreMapData';
import MapStampModal from '../../../../components/Map/atoms/Modal/StampModal/MapStampModal';
import MapCouponModal from '../../../../components/Map/atoms/Modal/Coupon/MapCouponModal';
import { colors } from '../../../../styles/colors';
import useStore from '../../../../store/useStore';
import { initialMenuItemDataArr } from '../../../../store/data/mapFilter';
import SlideTabViewFilter from '../../../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import BottomSheet from '../../../../components/BottomSheet/BottomSheet';
import { useMutation } from '@tanstack/react-query';
import { userStampRequestData } from '../../../../store/Type/Stamp/stampRequest';
import instance from '../../../../apis/instance';
import { userCouponRequestData } from '../../../../store/Type/My/Coupon/couponRequest';
import { useFilterMenu } from '../../../../hooks/useFilterMenu';
import { useOptionMenu } from '../../../../hooks/useOptionMenu';
import { mapInitialOptionDataArr } from '../../../../store/data/searchResult';

type ModalLevel = 'confirm' | 'waiting' | 'done';
type CouponModalLevel = 'confirm' | 'waiting' | 'done' | 'regularCustomer';

const BOTTOM_SHEET_HEIGHT = 371.78; // TODO: 바텀시트 height 재는 방법 생각해보기

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const [isShowBottomSheet, setIsShowBottomSheet] = useState<boolean>(false);

  const { userLocation } = useLocation();
  const { loading: scriptLoading, error: scriptError } = useScript(
    `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`
  );
  const { map } = useMap(scriptError, scriptLoading, mapContainerRef);
  useUserLocationMap(map, userLocation);

  const [stampModalLevel, setStampModalLevel] = useState<ModalLevel | null>(
    null
  );
  const [couponModalLevel, setCouponModalLevel] =
    useState<CouponModalLevel | null>(null);
  const [isRegularCustomer, setIsRegularCustomer] = useState(false);

  const [isFilterBottomSheetVisible, setIsFilterBottomSheetVisible] =
    useState(false);

  const { menuItemDataArr, handleClickMenuBodyItem, handleClickMenuItem } =
    useFilterMenu(initialMenuItemDataArr);
  const handleFilterSelectClick = (newIndex: number) => {
    const prevIndex = menuItemDataArr.findIndex((x) => x.isChecked);
    if (prevIndex === -1) throw new Error('no checked menu item!!');
    handleClickMenuItem(prevIndex, newIndex);
    setIsFilterBottomSheetVisible(true);
  };

  const { optionDataArr, sortedOptionDataArr, handleOptionClick } =
    useOptionMenu(mapInitialOptionDataArr);

  const handleDragFilterBottomSheet = () => {
    setIsFilterBottomSheetVisible(false);
  };

  const selectedSectorFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  );

  const handleShowBottomSheet = () => {
    setIsShowBottomSheet(true);
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

  const { selectedStoreData } = useStoreMapData(
    map,
    handleShowBottomSheet,
    optionDataArr[0].isChecked,
    optionDataArr[1].isChecked,
    selectedSectorFilterItem ? selectedSectorFilterItem.title : '업종 전체',
    optionDataArr[2].isChecked
  );

  const handleDragDownBottomSheet = () => {
    setIsShowBottomSheet(false);
    if (map) {
      mapWrapperRef.current &&
        (mapWrapperRef.current.style.height = `${window.innerHeight}px`);
      map.setSize(new naver.maps.Size(window.innerWidth, window.innerHeight));
    }
  };

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
              {sortedOptionDataArr.map((data, index) => (
                <CheckFilter
                  key={data.title + index}
                  isChecked={data.isChecked}
                  label={data.title}
                  border={1}
                  borderColor='sub-purple-light'
                  onClick={() => {
                    handleOptionClick(data.id);
                  }}
                />
              ))}
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
            {sortedOptionDataArr.map((data, index) => (
              <CheckFilter
                key={data.title + index}
                isChecked={data.isChecked}
                label={data.title}
                border={1}
                borderColor='sub-purple-light'
                onClick={() => {
                  handleOptionClick(data.id);
                }}
              />
            ))}
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
            menuItemDataArr={menuItemDataArr.filter(
              (item, index) => index === 0 || index === 1
            )}
            handleCheckedDataIndex={handleClickMenuItem}
            handleClickMenuBodyItem={handleClickMenuBodyItem}
            onClickCompleteBtn={handleDragFilterBottomSheet}
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
