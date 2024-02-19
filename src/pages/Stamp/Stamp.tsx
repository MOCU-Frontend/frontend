import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Stamp.module.css';
import StoreInfoInStamp from '../../components/Stamp/atoms/StoreInfoInStamp/StoreInfoInStamp';
import MapCouponModal from '../../components/Map/atoms/Modal/Coupon/MapCouponModal';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import SlideTabViewFilter from '../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import StampHeaderFilter from '../../components/Stamp/atoms/StampHeaderFilter/StampHeaderFilter';

import { useQuery } from '@tanstack/react-query';

import { initialMenuItemDataArr, MenuItemData } from '../../store/data/stamp';
import {
  FilterListWithId,
  initialOptionDataArr,
  initialStampMenuItemDataArr,
} from '../../store/data/searchResult';
import { fetchStampData } from '../../apis/stamp/stamp';
import useStore from '../../store/useStore';

type ModalLevel = 'confirm' | 'waiting' | 'done';
type CouponModalLevel = 'confirm' | 'waiting' | 'done' | 'regularCustomer';

const Stamp = () => {
  const navigate = useNavigate();
  const userId = useStore((state) => state.userId);
  // useQuery에서 사용
  const {
    data: StampData,
    isLoading: isStoreStampDataLoading,
    isError: isStoreStampError,
  } = useQuery({
    queryKey: ['StampData'],
    queryFn: () =>
      fetchStampData(
        userId || '',
        selectedSectorFilterItem ? selectedSectorFilterItem.title : '전체',
        selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '거리순',
        false,
        false,
        false,
        false
      ),
    enabled: !!userId,
  });

  const [isCouponModalVisible, setIsCouponModalVisible] = useState(false);
  const [couponModalLevel, setCouponModalLevel] =
    useState<CouponModalLevel | null>(null);

  const handleClickCouponBtn = () => {
    setCouponModalLevel('confirm');
    setIsCouponModalVisible(true);
  };

  const handleCloseCouponModal = () => {
    setIsCouponModalVisible(false);
    setCouponModalLevel(null); // Reset modal level when the modal is closed
  };

  const handleRegularCustomer = () => {
    console.log('Setting as a regular customer...');
  };

  // BottomSheet를 보이게 하는지 상태관리
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };

  const [menuItemDataArr, setMenuItemDataArr] = useState<MenuItemData[]>(
    initialStampMenuItemDataArr
  );

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
    setIsBottomSheetVisible(true);
  };

  const [optionDataArr, setOptionDataArr] =
    useState<FilterListWithId[]>(initialOptionDataArr);
  // 옵션 필터를 클릭했을 때
  const handleOptionClick = (id: number) => {
    setOptionDataArr((prev) => {
      const copiedArr = [...prev];
      const item = optionDataArr.find((x) => x.id === id);
      if (item) {
        item.isChecked = !item.isChecked;
      }
      return copiedArr;
    });
  };

  const selectedArrangeFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;
  const selectedSectorFilterItem = menuItemDataArr[1].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;

  let checkedOptionDataArr: FilterListWithId[] = [];
  let uncheckedOptionDataArr: FilterListWithId[] = [];
  optionDataArr.forEach((data) =>
    data.isChecked
      ? (checkedOptionDataArr = [...checkedOptionDataArr, data])
      : (uncheckedOptionDataArr = [...uncheckedOptionDataArr, data])
  );
  const sortedOptionDataArr = [
    ...checkedOptionDataArr,
    ...uncheckedOptionDataArr,
  ];

  return (
    <div className={styles.wrapper}>
      <StampHeaderFilter
        onBackBtnClick={() => navigate(-1)}
        title='적립 현황'
        selectedArrangeFilterItem={selectedArrangeFilterItem}
        selectedSectorFilterItem={selectedSectorFilterItem}
        filterItems={sortedOptionDataArr}
        handleFilterSelectClick={handleFilterSelectClick}
        handleOptionClick={handleOptionClick}
      />

      <div className={styles.contentWrapper}>
        {StampData &&
          StampData.map((data, index: number) => (
            <StoreInfoInStamp
              key={data.name + index}
              title={data.name}
              couponCount={data.numOfStamp}
              achieve={data.reward}
              distance={500}
              // TODO: 거리계산
              onClickCouponBtn={handleClickCouponBtn}
              onClickStoreDetailBtn={() => {}}
              onClickMapBtn={() => navigate('/map')}
            />
          ))}
      </div>

      {isBottomSheetVisible && (
        <BottomSheet
          onDragBottom={handleDragBottom}
          onClickNotBottomSheet={handleDragBottom}
          children={
            <SlideTabViewFilter
              // 옵션은 슬라이드탭뷰에 출력되지 않게 필터링
              menuItemDataArr={menuItemDataArr}
              handleCheckedDataIndex={handleClickMenuItem}
              handleClickMenuBodyItem={handleClickMenuBodyItem}
              // handleClickResetOptionBtn={handleClickResetOptionBtn}
              onClickCompleteBtn={handleDragBottom}
            />
          }
        ></BottomSheet>
      )}

      {isCouponModalVisible && (
        <MapCouponModal
          couponModalLevel={couponModalLevel}
          setCouponModalLevel={setCouponModalLevel}
          onCancelModal={handleCloseCouponModal}
          isRegularCustomer={false}
          handleRegularCustomer={handleRegularCustomer}
        />
      )}
    </div>
  );
};

export default Stamp;
