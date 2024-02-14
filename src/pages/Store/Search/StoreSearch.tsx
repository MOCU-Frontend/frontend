// StoreSearch.tsx
import React, { useState } from 'react';
import styles from './StoreSearch.module.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  storeSearchResponse,
  storeSearchData,
} from '../../../store/Type/StoreSearch/storeSearch';

import StoreSearchHeader from '../../../components/StoreSearch/atoms/StoreSearchHeader/StoreSearchHeader';
import StoreSearchKeyword from '../../../components/StoreSearch/atoms/StoreSearchKeyword/StoreSearchKeyword';
import StoreSearchRecent from '../../../components/StoreSearch/atoms/StoreSearchRecent/StoreSearchRecent';
import StoreSearchImminentCoupon from '../../../components/StoreSearch/atoms/StoreSearchImminentCoupon/StoreSearchImminentCoupon';
import StoreSearchRecommend from '../../../components/StoreSearch/atoms/StoreSearchRecommend/StoreSearchRecommend';
import { useRecentSearchWord } from '../../../hooks/useRecentSearchWord';
import HomeAdSlideStatus from '../../../components/Home/atoms/SlideStatus/Ad/HomeAdSlideStatus';
import SlideMenuEventBodyTab from '../../../components/SlideMenu/atoms/BodyTab/Event/SlideMenuEventBodyTab';

const StoreSearch = () => {
  const fetchStoreSearchData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/data/storeSearch/storeSearchData-exist.json'
      );
      const data: storeSearchResponse = response.data;
      return data.result;
    } catch (error) {
      throw new Error('storeSearch data error');
    }
  };

  const {
    data: storeSearchData,
    isLoading: isStoreSearchDataLoading,
    isError: isStoreSearchDataError,
  } = useQuery({
    queryKey: ['storeSearchData'],
    queryFn: () => fetchStoreSearchData(),
  });

  const {
    searchKeywordDataArr,
    handleDeleteSearchKeyword,
    handleAddSearchKeyword,
  } = useRecentSearchWord();

  const [eventItemArr, setEventItemArr] = useState([
    { id: 1, isChecked: true },
    { id: 2, isChecked: false },
    { id: 3, isChecked: false },
    { id: 4, isChecked: false },
  ]);
  const handleCheckedDataIndex = (prevIndex: number, newIndex: number) => {
    if (!eventItemArr) throw new Error('no reviewArr!!');
    if (!eventItemArr[prevIndex]) throw new Error('invalid prevIndex!!');
    if (!eventItemArr[newIndex]) throw new Error('invalid newIndex!!');
    setEventItemArr((prevArr) => {
      if (!prevArr) throw new Error('no prevArr!!');
      const copiedArr = [...prevArr];
      copiedArr[prevIndex].isChecked = false;
      copiedArr[newIndex].isChecked = true;
      return copiedArr;
    });
  };
  return (
    <div className={styles.wrapper}>
      <StoreSearchHeader handleAddSeachKeyword={handleAddSearchKeyword} />
      <div className={styles.contentWrapper}>
        <StoreSearchKeyword
          searchKeywordDataArr={searchKeywordDataArr}
          handleDeleteSeachKeyword={handleDeleteSearchKeyword}
        />
        <StoreSearchRecent
          recentlyVisitedStoreInfoList={
            storeSearchData?.recentlyVisitedStoreInfoList
          }
        />
        {/* <div className={styles.searchCarousel} /> */}
        <div className={styles.bodyTabWrapper}>
          <SlideMenuEventBodyTab
            menuItemDataArr={eventItemArr}
            handleCheckedDataIndex={handleCheckedDataIndex}
          />
          <div className={styles.statusWrapper}>
            <HomeAdSlideStatus
              handleCheckedDataIndex={handleCheckedDataIndex}
              dataArr={eventItemArr}
            />
          </div>
        </div>
        <StoreSearchImminentCoupon
          dueDateStoreInfoList={storeSearchData?.dueDateStoreInfoList}
        />
        <StoreSearchRecommend
          recommendStoreInfoList={storeSearchData?.recommendStoreInfoList}
        />
      </div>
    </div>
  );
};

export default StoreSearch;
