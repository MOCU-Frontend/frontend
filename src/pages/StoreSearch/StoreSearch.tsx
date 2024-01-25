// StoreSearch.tsx
import React from 'react';
import styles from './StoreSearch.module.css';

import StoreSearchHeader from '../../components/StoreSearch/atoms/StoreSearchHeader/StoreSearchHeader';
import StoreSearchKeyword from '../../components/StoreSearch/atoms/StoreSearchKeyword/StoreSearchKeyword';
import StoreSearchRecent from '../../components/StoreSearch/atoms/StoreSearchRecent/StoreSearchRecent';
import StoreSearchImminentCoupon from '../../components/StoreSearch/atoms/StoreSearchImminentCoupon/StoreSearchImminentCoupon';
import StoreSearchRecommend from '../../components/StoreSearch/atoms/StoreSearchRecommend/StoreSearchRecommend';

const StoreSearch = () => {
  return (
    <div className={styles.wrapper}>
      <StoreSearchHeader />
      <div className={styles.contentWrapper}>
        <StoreSearchKeyword />
        <StoreSearchRecent />
        <div className={styles.searchCarousel} />
        <StoreSearchImminentCoupon />
        <StoreSearchRecommend />
      </div>
    </div>
  );
};

export default StoreSearch;
