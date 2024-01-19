import React, { useState } from 'react';
import styles from './SearchResult.module.css';
import { useNavigate } from 'react-router-dom';

import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../../components/SearchBar/SearchBar';
import CheckFilterSelect from '../../components/CheckFilter/Select/CheckFilterSelect';
import StoreInfo from '../../components/SearchResult/atoms/StoreInfo/StoreInfo';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import { ReactComponent as ResetImage } from '../../assets/icon/reset.svg';
import {
  searchResultData,
  initialMenuItemDataArr,
  MenuItemData,
} from '../../store/data/searchResult';
import SlideTabViewFilterOrOption from '../../components/SlideMenu/SlideTabView/FilterOrOption/SlideTabViewFilterOrOption';
import CheckFilter from '../../components/CheckFilter/CheckFilter';

const SearchResult = () => {
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

  const selectedArrangeFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  );
  const selectedSectorFilterItem = menuItemDataArr[1].bodyDataArr.find(
    (x) => x.isChecked
  );

  const handleClickResetOptionBtn = (menuIndex: number) => {
    if (!menuItemDataArr[menuIndex]) throw new Error('invalid menuIndex!!');
    if (menuItemDataArr[menuIndex].bodyType === 'filter')
      throw new Error('can reset only in option type!!');
    setMenuItemDataArr((prevArr) => {
      const copiedArr = [...prevArr];
      copiedArr[menuIndex].bodyDataArr.forEach((item) => {
        item.isChecked = false;
      });
      return copiedArr;
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn
          headerPaddingSize='search'
          onClickBackBtn={() => navigate(-1)}
        >
          <SearchBar
            placeholder='찾고 싶은 가게를 검색해 보세요'
            onClickSearchBtn={(value) => navigate(`/storesearch/${value}`)}
          />
        </HeaderBackBtn>
      </div>

      <div className={styles.filtersWrapper}>
        <CheckFilterSelect
          isChecked={false}
          label={
            selectedArrangeFilterItem
              ? selectedArrangeFilterItem.title
              : 'no selected item!'
          }
          border={1}
          borderColor='sub-purple-light'
          onClick={() => handleFilterSelectClick(0)}
        />
        <CheckFilterSelect
          isChecked={false}
          label={
            selectedSectorFilterItem
              ? selectedSectorFilterItem.title
              : 'no selected item!'
          }
          border={1}
          borderColor='sub-purple-light'
          onClick={() => handleFilterSelectClick(1)}
        />

        {menuItemDataArr[2].bodyDataArr.map(
          (data, index) =>
            data.isChecked && (
              <CheckFilter
                key={data.title + index}
                isChecked={false}
                label={data.title}
                border={1}
                borderColor='sub-purple-light'
                onClick={() => handleFilterSelectClick(2)}
              />
            )
        )}
      </div>

      <div className={styles.wrapContent}>
        {searchResultData.map((data, index) => (
          <StoreInfo
            key={data.title + index}
            title={data.title}
            couponCount={data.couponCount}
            achieve={data.achieve}
            distance={data.distance}
            onClickCouponeBtn={() => {}}
            onClickStoreDetailBtn={() => navigate(`/store/${data.title}`)}
          />
        ))}
      </div>

      {isBottomSheetVisible && (
        <BottomSheet
          onDragBottom={handleDragBottom}
          onClickNotBottomSheet={handleDragBottom}
        >
          <SlideTabViewFilterOrOption
            menuItemDataArr={menuItemDataArr}
            handleCheckedDataIndex={handleClickMenuItem}
            handleClickMenuBodyItem={handleClickMenuBodyItem}
            handleClickResetOptionBtn={handleClickResetOptionBtn}
          />
        </BottomSheet>
      )}
    </div>
  );
};

export default SearchResult;
