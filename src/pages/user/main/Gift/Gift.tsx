import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Gift.module.css';
import BottomSheet from '../../../../components/BottomSheet/BottomSheet';
import SlideTabViewFilter from '../../../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';

import { giftData } from '../../../../store/data/gift';

import GiftHeaderFilter from '../../../../components/Gift/atoms/GiftHeaderFilter/GiftHeaderFilter';
import GiftCard from '../../../../components/Gift/atoms/Card/GiftCard';

import {
  initialMenuItemDataArr,
  MenuItemData,
} from '../../../../store/data/gift';
import { useFilterMenu } from '../../../../hooks/useFilterMenu';

const Gift = () => {
  const navigate = useNavigate();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };
  const { menuItemDataArr, handleClickMenuBodyItem, handleClickMenuItem } =
    useFilterMenu(initialMenuItemDataArr);
  const handleFilterSelectClick = (newIndex: number) => {
    const prevIndex = menuItemDataArr.findIndex((x) => x.isChecked);
    if (prevIndex === -1) throw new Error('no checked menu item!!');
    handleClickMenuItem(prevIndex, newIndex);
    setIsBottomSheetVisible(true);
  };
  const handleCompleteClick = () => {
    setIsBottomSheetVisible(false);
  };
  const selectedDistanceFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;
  const selectedCategoryFilterItem = menuItemDataArr[1].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;
  const selectedPriceFilterItem = menuItemDataArr[2].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;

  return (
    <div className={styles.wrapper}>
      <div>
        <GiftHeaderFilter
          onBackBtnClick={() => navigate('/')}
          onSearchBtnClick={(value: string) => navigate(`/gift/${value}`)}
          selectedDistanceFilterItem={selectedDistanceFilterItem}
          selectedCategoryFilterItem={selectedCategoryFilterItem}
          selectedPriceFilterItem={selectedPriceFilterItem}
          handleFilterSelectClick={handleFilterSelectClick}
        />
      </div>

      <div className={styles.gridContainer}>
        {giftData.map((data, index) => (
          <GiftCard
            key={index}
            cafeTitle={data.cafeTitle}
            foodTitle={data.foodTitle}
            foodPrice={data.foodPrice.toLocaleString('ko-KR')}
            onCardBtnClick={() =>
              navigate(
                `/gift/${data.cafeTitle}/${data.foodTitle}/${data.foodPrice}`
              )
            }
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
              onClickCompleteBtn={handleCompleteClick}
            />
          }
        ></BottomSheet>
      )}
    </div>
  );
};

export { Gift as Component };
