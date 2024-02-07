// StoreSearch.tsx
import React, { useState } from 'react';
import styles from './StoreSearch.module.css';

import StoreSearchHeader from '../../../components/StoreSearch/atoms/StoreSearchHeader/StoreSearchHeader';
import StoreSearchKeyword from '../../../components/StoreSearch/atoms/StoreSearchKeyword/StoreSearchKeyword';
import StoreSearchRecent from '../../../components/StoreSearch/atoms/StoreSearchRecent/StoreSearchRecent';
import StoreSearchImminentCoupon from '../../../components/StoreSearch/atoms/StoreSearchImminentCoupon/StoreSearchImminentCoupon';
import StoreSearchRecommend from '../../../components/StoreSearch/atoms/StoreSearchRecommend/StoreSearchRecommend';
import { useRecentSearchWord } from '../../../hooks/useRecentSearchWord';
import HomeAdSlideStatus from '../../../components/Home/atoms/SlideStatus/Ad/HomeAdSlideStatus';
import SlideMenuEventBodyTab from '../../../components/SlideMenu/atoms/BodyTab/Event/SlideMenuEventBodyTab';
import { storeSearchData } from '../../../store/data/storeSearch';

const StoreSearch = () => {
  const {
    searchKeywordDataArr,
    handleDeleteSeachKeyword,
    handleAddSeachKeyword,
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
      <StoreSearchHeader handleAddSeachKeyword={handleAddSeachKeyword} />
      <div className={styles.contentWrapper}>
        <StoreSearchKeyword
          searchKeywordDataArr={searchKeywordDataArr}
          handleDeleteSeachKeyword={handleDeleteSeachKeyword}
        />
        <StoreSearchRecent storeSeachDataArr={storeSearchData} />
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
        <StoreSearchRecommend />
        <StoreSearchImminentCoupon />
      </div>
    </div>
  );
};

export default StoreSearch;
