import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Stamp.module.css';
import StoreInfoInStamp from '../../../../components/Stamp/atoms/StoreInfoInStamp/StoreInfoInStamp';
import MapCouponModal from '../../../../components/Map/atoms/Modal/Coupon/MapCouponModal';
import BottomSheet from '../../../../components/BottomSheet/BottomSheet';
import SlideTabViewFilter from '../../../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import StampHeaderFilter from '../../../../components/Stamp/atoms/StampHeaderFilter/StampHeaderFilter';
import { useMutation, useQuery } from '@tanstack/react-query';
import { MenuItemData } from '../../../../store/data/stamp';
import {
  initialStampMenuItemDataArr,
  stampInitialOptionDataArr,
} from '../../../../store/data/searchResult';
import { fetchStampData } from '../../../../apis/stamp/stamp';
import useStore from '../../../../store/useStore';
import { userCouponRequestData } from '../../../../store/Type/My/Coupon/couponRequest';
import instance from '../../../../apis/instance';
import { useFilterMenu } from '../../../../hooks/useFilterMenu';
import { useOptionMenu } from '../../../../hooks/useOptionMenu';

type CouponModalLevel = 'confirm' | 'waiting' | 'done' | 'regularCustomer';

const Stamp = () => {
  const navigate = useNavigate();
  const userId = useStore((state) => state.userId);

  const [isCouponModalVisible, setIsCouponModalVisible] = useState(false);
  const [couponModalLevel, setCouponModalLevel] =
    useState<CouponModalLevel | null>(null);

  const handleClickCouponBtn = () => {
    setCouponModalLevel('confirm');
    setIsCouponModalVisible(true);
  };

  const handleCloseCouponModal = () => {
    setIsCouponModalVisible(false);
    setCouponModalLevel(null);
  };

  const handleRegularCustomer = () => {
    console.log('Setting as a regular customer...');
  };

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };

  const { menuItemDataArr, handleClickMenuBodyItem, handleClickMenuItem } =
    useFilterMenu(initialStampMenuItemDataArr);

  const handleFilterSelectClick = (newIndex: number) => {
    const prevIndex = menuItemDataArr.findIndex((x) => x.isChecked);
    if (prevIndex === -1) throw new Error('no checked menu item!!');
    handleClickMenuItem(prevIndex, newIndex);
    setIsBottomSheetVisible(true);
  };

  const { optionDataArr, sortedOptionDataArr, handleOptionClick } =
    useOptionMenu(stampInitialOptionDataArr);

  const selectedArrangeFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;
  const selectedSectorFilterItem = menuItemDataArr[1].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;

  const { data: StampData } = useQuery({
    queryKey: ['StampData'],
    queryFn: () =>
      fetchStampData(
        userId || '',
        selectedSectorFilterItem ? selectedSectorFilterItem.title : '전체',
        selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '거리순',
        optionDataArr[0].isChecked,
        optionDataArr[1].isChecked,
        optionDataArr[2].isChecked,
        optionDataArr[3].isChecked
      ),
    enabled: !!userId,
  });

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
              menuItemDataArr={menuItemDataArr}
              handleCheckedDataIndex={handleClickMenuItem}
              handleClickMenuBodyItem={handleClickMenuBodyItem}
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
          handleRequestCoupon={handleRequestCoupon}
          handleRegularCustomer={handleRegularCustomer}
        />
      )}
    </div>
  );
};

export { Stamp as Component };
