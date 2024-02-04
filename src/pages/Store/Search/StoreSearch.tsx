// StoreSearch.tsx
import React, { useState } from 'react';
import styles from './StoreSearch.module.css';

import StoreSearchHeader from '../../../components/StoreSearch/atoms/StoreSearchHeader/StoreSearchHeader';
import StoreSearchKeyword from '../../../components/StoreSearch/atoms/StoreSearchKeyword/StoreSearchKeyword';
import StoreSearchRecent from '../../../components/StoreSearch/atoms/StoreSearchRecent/StoreSearchRecent';
import StoreSearchImminentCoupon from '../../../components/StoreSearch/atoms/StoreSearchImminentCoupon/StoreSearchImminentCoupon';
import StoreSearchRecommend from '../../../components/StoreSearch/atoms/StoreSearchRecommend/StoreSearchRecommend';
import { storeRecentSearchData } from '../../../store/data/storeSearch';

const StoreSearch = () => {
  const [searchKeywordDataArr, setSearchKeywordDataArr] = useState(
    storeRecentSearchData
  );
  const handleDeleteSeachKeyword = (index: number) => {
    if (!searchKeywordDataArr[index])
      throw new Error('invalid index seachKeyword!');
    setSearchKeywordDataArr((arr) => {
      const arrCopied = [...arr];
      arrCopied.splice(index, 1);
      return arrCopied;
    });
  };
  return (
    <div className={styles.wrapper}>
      <StoreSearchHeader />
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
