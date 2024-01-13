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
  initialArrangementFilterDataArr,
  initialSectorFilterDataArr,
  initialOptionDataArr,
  searchResultData,
} from '../../store/data/searchResult';
import SlideTabViewFilterOrOption from '../../components/SlideMenu/SlideTabView/FilterOrOption/SlideTabViewFilterOrOption';

type FilterList = {
  title: string;
  isChecked: boolean;
};

type MenuItemData = {
  title: string;
  isChecked: boolean;
  bodyType: 'filter' | 'option';
  bodyDataArr: FilterList[];
};

const SearchResult = () => {
  const navigate = useNavigate();

  // BottomSheet를 보이게 하는지 상태관리
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  // 초기화 버튼 클릭했을 때
  // const handleResetClick = () => {
  //   setOptionDataArr((prevArr) =>
  //     prevArr.map((data) => {
  //       data.isChecked = false;
  //       return data;
  //     })
  //   );
  // };

  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };

  const [menuItemDataArr, setMenuItemDataArr] = useState<MenuItemData[]>([
    {
      title: '정렬',
      isChecked: true,
      bodyType: 'filter',
      bodyDataArr: initialArrangementFilterDataArr,
    },
    {
      title: '업종',
      isChecked: false,
      bodyType: 'filter',
      bodyDataArr: initialSectorFilterDataArr,
    },
    {
      title: '옵션',
      isChecked: false,
      bodyType: 'option',
      bodyDataArr: initialOptionDataArr,
    },
  ]);

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
          size='small'
          border={1}
          borderColor='sub-purple-light'
          borderRadius='large'
          onClick={() => handleFilterSelectClick(0)}
        />
        <CheckFilterSelect
          isChecked={false}
          label={
            selectedSectorFilterItem
              ? selectedSectorFilterItem.title
              : 'no selected item!'
          }
          size='small'
          border={1}
          borderColor='sub-purple-light'
          borderRadius='large'
          onClick={() => handleFilterSelectClick(1)}
        />

        {menuItemDataArr[2].bodyDataArr.map(
          (data, index) =>
            data.isChecked && (
              <CheckFilterSelect
                key={data.title + index}
                isChecked={false}
                label={data.title}
                size='small'
                border={1}
                borderColor='sub-purple-light'
                borderRadius='large'
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
            onClickStoreDetailBtn={() => {}}
          />
        ))}
      </div>

      {isBottomSheetVisible && (
        <BottomSheet onDragBottom={handleDragBottom}>
          {/* <div className={styles.emptySpace} onClick={handleDragBottom} /> */}
          <SlideTabViewFilterOrOption
            menuItemDataArr={menuItemDataArr}
            handleCheckedDataIndex={handleClickMenuItem}
            handleClickMenuBodyItem={handleClickMenuBodyItem}
          />
          {/* {selectedMenu === '옵션' && (
            <button className={styles.wrapReset} onClick={handleResetClick}>
              <ResetImage />
              <div className={styles.resetText}>전체 초기화</div>
            </button>
          )} */}
        </BottomSheet>
      )}
    </div>
  );
};

export default SearchResult;
