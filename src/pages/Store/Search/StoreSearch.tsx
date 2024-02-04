// StoreSearch.tsx
import React, { useState } from 'react';
import styles from './StoreSearch.module.css';

import StoreSearchHeader from '../../../components/StoreSearch/atoms/StoreSearchHeader/StoreSearchHeader';
import StoreSearchKeyword from '../../../components/StoreSearch/atoms/StoreSearchKeyword/StoreSearchKeyword';
import StoreSearchRecent from '../../../components/StoreSearch/atoms/StoreSearchRecent/StoreSearchRecent';
import StoreSearchImminentCoupon from '../../../components/StoreSearch/atoms/StoreSearchImminentCoupon/StoreSearchImminentCoupon';
import StoreSearchRecommend from '../../../components/StoreSearch/atoms/StoreSearchRecommend/StoreSearchRecommend';
import { useRecentSearchWord } from '../../../hooks/useRecentSearchWord';

const StoreSearch = () => {
  const {
    searchKeywordDataArr,
    handleDeleteSeachKeyword,
    handleAddSeachKeyword,
  } = useRecentSearchWord();
  return (
    <div className={styles.wrapper}>
      <StoreSearchHeader handleAddSeachKeyword={handleAddSeachKeyword} />
      <div className={styles.contentWrapper}>
        <StoreSearchKeyword
          searchKeywordDataArr={searchKeywordDataArr}
          handleDeleteSeachKeyword={handleDeleteSeachKeyword}
        />
        <StoreSearchRecent />
        <div className={styles.searchCarousel} />
        <StoreSearchImminentCoupon />
        <StoreSearchRecommend />
      </div>
    </div>
  );
};

export default StoreSearch;
