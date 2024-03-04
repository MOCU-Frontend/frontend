import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOwnerCouponQuery } from '../../../apis/owner/Coupon/useOwnerCouponQuery';
import BottomSheet from '../../../components/BottomSheet/BottomSheet';
import CheckFilter from '../../../components/CheckFilter/CheckFilter';
import CheckFilterSelect from '../../../components/CheckFilter/Select/CheckFilterSelect';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import OwnerCouponItem from '../../../components/Owner/Coupon/atoms/Item/OwnerCouponItem';
import SlideMenuTab from '../../../components/SlideMenu/atoms/MenuTab/SlideMenuTab';
import SlideTabViewFilter from '../../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import { useCarouselData } from '../../../hooks/useCarouselData';
import { useFilterMenu } from '../../../hooks/useFilterMenu';
import { useOptionMenu } from '../../../hooks/useOptionMenu';
import {
  initialOwnerCouponMenuItemDataArr,
  ownerCouponInitialOptionDataArr,
} from '../../../store/data/searchResult';
import { MenuItemData } from '../../../store/data/stamp';
import useStore from '../../../store/useStore';
import styles from './OwnerCoupon.module.css';

const menuDataArr = [
  { title: '현황리스트', isChecked: true },
  { title: '데이터차트', isChecked: false },
];

const OwnerCoupon = () => {
  const navigate = useNavigate();
  const userId = useStore((state) => state.userId);
  const { carouselItemArr: menu, handleCheckedDataIndex } =
    useCarouselData(menuDataArr);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };
  const { menuItemDataArr, handleClickMenuBodyItem, handleClickMenuItem } =
    useFilterMenu(initialOwnerCouponMenuItemDataArr);
  const { optionDataArr, sortedOptionDataArr, handleOptionClick } =
    useOptionMenu(ownerCouponInitialOptionDataArr);
  const handleFilterSelectClick = (newIndex: number) => {
    const prevIndex = menuItemDataArr.findIndex((x) => x.isChecked);
    if (prevIndex === -1) throw new Error('no checked menu item!!');
    handleClickMenuItem(prevIndex, newIndex);
    setIsBottomSheetVisible(true);
  };
  const selectedArrangeFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;
  const {
    ownerCouponQuery: { data: ownerCouponData },
  } = useOwnerCouponQuery(userId, optionDataArr, selectedArrangeFilterItem);
  return (
    <div>
      <HeaderBackBtn
        headerTitle='고객 적립 현황'
        onClickBackBtn={() => navigate(-1)}
      />
      <div className={styles.menuWrapper}>
        <SlideMenuTab
          menuDataArr={menu}
          handleCheckedDataIndex={handleCheckedDataIndex}
        />
      </div>

      <div className={styles.filtersWrapper}>
        {sortedOptionDataArr.map((data, index) => (
          <CheckFilter
            key={data.title + index}
            isChecked={data.isChecked}
            backgroundColor='grey-light-00'
            textColor='grey-dark-01'
            label={data.title}
            border={1}
            borderColor='grey-light-02'
            onClick={() => {
              handleOptionClick(data.id);
            }}
          />
        ))}

        <CheckFilterSelect
          label={selectedArrangeFilterItem?.title || '적립 높은 순'}
          backgroundColor='grey-light-00'
          textColor='grey-dark-01'
          isChecked={false}
          border={1}
          borderColor='grey-light-02'
          onClick={() => handleFilterSelectClick(0)}
        />
      </div>
      {ownerCouponData &&
        ownerCouponData.map((data, index) => (
          <OwnerCouponItem
            key={data.userName + index}
            isDangol={data.regular}
            userName={data.userName}
            accumText={`${data.numOfStamp}/${data.maxStamp}`}
            couponNum={data.useCount}
          />
        ))}
      {isBottomSheetVisible && (
        <BottomSheet
          onDragBottom={handleDragBottom}
          onClickNotBottomSheet={handleDragBottom}
          children={
            <SlideTabViewFilter
              menuItemDataArr={menuItemDataArr}
              handleCheckedDataIndex={handleClickMenuItem}
              handleClickMenuBodyItem={handleClickMenuBodyItem}
              // handleClickResetOptionBtn={handleClickResetOptionBtn}
              onClickCompleteBtn={handleDragBottom}
            />
          }
        ></BottomSheet>
      )}
    </div>
  );
};

export { OwnerCoupon as Component };
