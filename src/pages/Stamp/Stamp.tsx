import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Stamp.module.css';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import CheckFilter from '../../components/CheckFilter/CheckFilter';
import CheckFilterSelect from '../../components/CheckFilter/Select/CheckFilterSelect';
import StoreInfoInStamp from '../../components/Stamp/atoms/StoreInfoInStamp/StoreInfoInStamp';
import MapCouponModal from '../../components/Map/atoms/Modal/Coupon/MapCouponModal';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import SlideTabViewFilterOrOption from '../../components/SlideMenu/SlideTabView/FilterOrOption/SlideTabViewFilterOrOption';

import StampHeaderFilter from '../../components/Stamp/atoms/StampHeaderFilter/StampHeaderFilter';

import {
  searchResultData,
  initialMenuItemDataArr,
  MenuItemData,
} from '../../store/data/stamp';

type ModalLevel = 'confirm' | 'waiting' | 'done';
type CouponModalLevel = 'confirm' | 'waiting' | 'done' | 'regularCustomer';

const Stamp = () => {
  const navigate = useNavigate();

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
    initialMenuItemDataArr
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

  // 옵션 필터를 클릭했을 때
  const handleOptionClick = (index: number) => {
    setMenuItemDataArr((prev) => {
      const copiedArr = [...prev];
      copiedArr[2].bodyDataArr[index].isChecked =
        !copiedArr[2].bodyDataArr[index].isChecked;
      return copiedArr;
    });
  };

  const selectedArrangeFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;
  const selectedSectorFilterItem = menuItemDataArr[1].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;

  // const handleClickResetOptionBtn = (menuIndex: number) => {
  //   if (!menuItemDataArr[menuIndex]) throw new Error('invalid menuIndex!!');
  //   if (menuItemDataArr[menuIndex].bodyType === 'filter')
  //     throw new Error('can reset only in option type!!');
  //   setMenuItemDataArr((prevArr) => {
  //     const copiedArr = [...prevArr];
  //     copiedArr[menuIndex].bodyDataArr.forEach((item) => {
  //       item.isChecked = false;
  //     });
  //     return copiedArr;
  //   });
  // };

  return (
    <div className={styles.wrapper}>
      <StampHeaderFilter
        onBackBtnClick={() => navigate(-1)}
        title='적립 현황'
        selectedArrangeFilterItem={selectedArrangeFilterItem}
        selectedSectorFilterItem={selectedSectorFilterItem}
        filterItems={menuItemDataArr[2].bodyDataArr}
        handleFilterSelectClick={handleFilterSelectClick}
        handleOptionClick={handleOptionClick}
      />

      <div className={styles.contentWrapper}>
        {searchResultData.map((data, index) => (
          <StoreInfoInStamp
            key={data.title + index}
            title={data.title}
            couponCount={data.couponCount}
            achieve={data.achieve}
            distance={data.distance}
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
            <SlideTabViewFilterOrOption
              // 옵션은 슬라이드탭뷰에 출력되지 않게 필터링
              menuItemDataArr={menuItemDataArr.filter(
                (item, index) => index === 0 || index === 1
              )}
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
