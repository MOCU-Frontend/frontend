import React, { useState } from 'react';
import styles from './StoreSearchResult.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import CheckFilterSelect from '../../../../../../components/CheckFilter/Select/CheckFilterSelect';
import SearchBarHeader from '../../../../../../components/SearchBar/SearchBarHeader/SearchBarHeader';
import StoreInfo from '../../../../../../components/SearchResult/atoms/StoreInfo/StoreInfo';
import BottomSheet from '../../../../../../components/BottomSheet/BottomSheet';
import {
  searchResultData,
  initialMenuItemDataArr,
  MenuItemData,
  initialOptionDataArr,
  FilterListWithId,
} from '../../../../../../store/data/searchResult';
import SlideTabViewFilter from '../../../../../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import CheckFilter from '../../../../../../components/CheckFilter/CheckFilter';
import { useRecentSearchWord } from '../../../../../../hooks/useRecentSearchWord';

import {
  StoreSearchResultResponse,
  Result,
} from '../../../../../../store/Type/StoreSearchResult/storeSearchResult';

import { fetchStoreSearchResultData } from '../../../../../../apis/storeSearchResult/fetchStoreSearchResultData';
import useStore from '../../../../../../store/useStore';

const StoreSearchResult = () => {
  const navigate = useNavigate();
  const { searchWord } = useParams();

  const [savingOption, setSavingOption] = useState<boolean>(false);
  const [notVisitedOption, setNotVisitedOption] = useState<boolean>(false);
  const [eventOption, setEventOption] = useState<boolean>(false);
  const [couponImminentOption, setCouponImminentOption] =
    useState<boolean>(false);

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
        if (item.title === '이벤트 중') {
          setEventOption(item.isChecked);
        } else if (item.title === '적립 진행 중만') {
          setSavingOption(item.isChecked);
        } else if (item.title === '쿠폰 사용 임박') {
          setCouponImminentOption(item.isChecked);
        } else if (item.title === '안 가본 곳만') {
          setNotVisitedOption(item.isChecked);
        }
      }
      return copiedArr;
    });
  };

  // 정렬
  const selectedArrangeFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  );

  // 업종
  const selectedSectorFilterItem = menuItemDataArr[1].bodyDataArr.find(
    (x) => x.isChecked
  );

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

  const userId = useStore((state) => state.userId);
  const nowUserLocation = useStore((state) => state.nowUserLocation);

  const {
    data: storeSearchResultData,
    isLoading: isStoreSearchResultDataLoading,
    isError: isStoreSearchResultError,
  } = useQuery({
    queryKey: [
      'StoreSearchResultData',
      searchWord,
      selectedArrangeFilterItem,
      savingOption,
      notVisitedOption,
      couponImminentOption,
      eventOption,
      selectedSectorFilterItem,
    ],
    queryFn: () =>
      fetchStoreSearchResultData(
        userId || '',
        nowUserLocation?.latitude || 37.5404257,
        nowUserLocation?.longitude || 127.07209,
        searchWord,
        selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '거리순',
        savingOption,
        notVisitedOption,
        couponImminentOption,
        eventOption,
        0,
        selectedSectorFilterItem ? selectedSectorFilterItem.title : '전체'
      ),
    enabled: !!userId && !!nowUserLocation,
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <SearchBarHeader
          placeholder='찾고 싶은 가게를 검색해 보세요'
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

      <div className={styles.wrapContent}>
        {storeSearchResultData &&
          Array.isArray(storeSearchResultData) &&
          storeSearchResultData.map((result: Result, index: number) => (
            <StoreInfo
              key={index}
              title={result.name}
              couponCount={result.numOfStamp}
              achieve={result.reward}
              distance={Math.round(result.distance)}
              rating={result.rating}
              onClickCouponeBtn={() => {}}
              onClickStoreDetailBtn={() => navigate(`/store/${result.name}`)}
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

export { StoreSearchResult as Component };
