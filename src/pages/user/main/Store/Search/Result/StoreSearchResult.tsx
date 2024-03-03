import React, { useState } from 'react';
import styles from './StoreSearchResult.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CheckFilterSelect from '../../../../../../components/CheckFilter/Select/CheckFilterSelect';
import SearchBarHeader from '../../../../../../components/SearchBar/SearchBarHeader/SearchBarHeader';
import StoreInfo from '../../../../../../components/SearchResult/atoms/StoreInfo/StoreInfo';
import BottomSheet from '../../../../../../components/BottomSheet/BottomSheet';
import {
  initialMenuItemDataArr,
  initialOptionDataArr,
} from '../../../../../../store/data/searchResult';
import SlideTabViewFilter from '../../../../../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import CheckFilter from '../../../../../../components/CheckFilter/CheckFilter';
import { useRecentSearchWord } from '../../../../../../hooks/useRecentSearchWord';
import { Result } from '../../../../../../store/Type/StoreSearchResult/storeSearchResult';
import { fetchStoreSearchResultData } from '../../../../../../apis/storeSearchResult/fetchStoreSearchResultData';
import useStore from '../../../../../../store/useStore';
import { useFilterMenu } from '../../../../../../hooks/useFilterMenu';
import { useOptionMenu } from '../../../../../../hooks/useOptionMenu';

const StoreSearchResult = () => {
  const navigate = useNavigate();
  const { searchWord } = useParams();
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

  const { optionDataArr, sortedOptionDataArr, handleOptionClick } =
    useOptionMenu(initialOptionDataArr);

  const selectedArrangeFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  );
  const selectedSectorFilterItem = menuItemDataArr[1].bodyDataArr.find(
    (x) => x.isChecked
  );

  const { handleAddSearchKeyword } = useRecentSearchWord();

  const userId = useStore((state) => state.userId);
  const nowUserLocation = useStore((state) => state.nowUserLocation);

  const { data: storeSearchResultData } = useQuery({
    queryKey: [
      'StoreSearchResultData',
      searchWord,
      selectedArrangeFilterItem,
      optionDataArr[2].isChecked,
      optionDataArr[3].isChecked,
      optionDataArr[1].isChecked,
      optionDataArr[0].isChecked,
      selectedSectorFilterItem,
    ],
    queryFn: () =>
      fetchStoreSearchResultData(
        userId || '',
        nowUserLocation?.latitude || 37.5404257,
        nowUserLocation?.longitude || 127.07209,
        searchWord,
        selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '거리순',
        optionDataArr[2].isChecked,
        optionDataArr[3].isChecked,
        optionDataArr[1].isChecked,
        optionDataArr[0].isChecked,
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
            menuItemDataArr={menuItemDataArr.filter(
              (item, index) => index === 0 || index === 1
            )}
            handleCheckedDataIndex={handleClickMenuItem}
            handleClickMenuBodyItem={handleClickMenuBodyItem}
            onClickCompleteBtn={handleDragBottom}
          />
        </BottomSheet>
      )}
    </div>
  );
};

export { StoreSearchResult as Component };
