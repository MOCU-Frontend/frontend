import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Gift.module.css';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import SlideTabViewFilter from '../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';

import SearchBarHeader from '../../components/SearchBar/SearchBarHeader/SearchBarHeader';
import CheckFilterSelect from '../../components/CheckFilter/Select/CheckFilterSelect';
import { giftData } from '../../store/data/gift';

import GiftHeaderFilter from '../../components/Gift/atoms/GiftHeaderFilter/GiftHeaderFilter';
import GiftCard from '../../components/Gift/atoms/Card/GiftCard';

import { initialMenuItemDataArr, MenuItemData } from '../../store/data/gift';

const Gift = () => {
  const navigate = useNavigate();

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

  // 완료 버튼을 클릭했을 때
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
