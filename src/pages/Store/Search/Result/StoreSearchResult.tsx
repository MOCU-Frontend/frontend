import React, { useState } from 'react';
import styles from './StoreSearchResult.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import CheckFilterSelect from '../../../../components/CheckFilter/Select/CheckFilterSelect';
import SearchBarHeader from '../../../../components/SearchBar/SearchBarHeader/SearchBarHeader';
import StoreInfo from '../../../../components/SearchResult/atoms/StoreInfo/StoreInfo';
import BottomSheet from '../../../../components/BottomSheet/BottomSheet';
import {
  searchResultData,
  initialMenuItemDataArr,
  MenuItemData,
  initialOptionDataArr,
  FilterListWithId,
} from '../../../../store/data/searchResult';
import SlideTabViewFilter from '../../../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import CheckFilter from '../../../../components/CheckFilter/CheckFilter';
import { useRecentSearchWord } from '../../../../hooks/useRecentSearchWord';

import {
  StoreSearchResultResponse,
  StoreSearchResultData,
} from '../../../../store/Type/StoreSearchResult/storeSearchResult';

const StoreSearchResult = () => {
  const navigate = useNavigate();
  const { searchWord } = useParams();

  // `fetchMapStoreMarkerData`는 지도에 표시될 마커 데이터를 API에서 가져오는 함수입니다.
  const fetchStoreSearchResultData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/data/storeSearchResult/storeSearchResultData-sortByRate.json'
      );
      const data: StoreSearchResultResponse = response.data;
      return data.result;
    } catch (error) {
      throw new Error('StoreSearchResult data error');
    }
  };

  const {
    data: storeSearchResultData,
    isLoading: isStoreSearchResultDataLoading,
    isError: isStoreSearchResultError,
  } = useQuery({
    queryKey: ['StoreSearchResultData'],
    queryFn: () => fetchStoreSearchResultData(),
  });

  // BottomSheet를 보이게 하는지 상태관리
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };

  const [menuItemDataArr, setMenuItemDataArr] = useState<MenuItemData[]>(
    initialMenuItemDataArr
  );
  const [optionDataArr, setOptionDataArr] =
    useState<FilterListWithId[]>(initialOptionDataArr);

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
  );
  const selectedSectorFilterItem = menuItemDataArr[1].bodyDataArr.find(
    (x) => x.isChecked
  );

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

  const { handleAddSearchKeyword } = useRecentSearchWord();

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
      <div className={styles.headerWrapper}>
        <SearchBarHeader
          placeholder="찾고 싶은 가게를 검색해 보세요"
          onClickBackBtn={() => navigate(-1)}
          onClickSearchBtn={(value: string) => {
            if (value) {
              handleAddSearchKeyword({ title: value });
              navigate(`/store/search/${value}`);
            }
          }}
          firstValue={searchWord}
        />
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
          borderColor="sub-purple-light"
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
          borderColor="sub-purple-light"
          onClick={() => handleFilterSelectClick(1)}
        />

        {sortedOptionDataArr.map((data, index) => (
          <CheckFilter
            key={data.title + index}
            isChecked={data.isChecked}
            label={data.title}
            border={1}
            borderColor="sub-purple-light"
            onClick={() => {
              handleOptionClick(data.id);
            }}
          />
        ))}
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
          <SlideTabViewFilter
            // 옵션은 슬라이드탭뷰에 출력되지 않게 필터링
            menuItemDataArr={menuItemDataArr.filter(
              (item, index) => index === 0 || index === 1
            )}
            handleCheckedDataIndex={handleClickMenuItem}
            handleClickMenuBodyItem={handleClickMenuBodyItem}
            onClickCompleteBtn={handleDragBottom}
            // handleClickResetOptionBtn={handleClickResetOptionBtn}
          />
        </BottomSheet>
      )}
    </div>
  );
};

export default StoreSearchResult;
