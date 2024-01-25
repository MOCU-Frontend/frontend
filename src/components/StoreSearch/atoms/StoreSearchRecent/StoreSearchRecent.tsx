import React from 'react';
import styles from './StoreSearchRecent.module.css';

import { storeSearchData } from '../../../../store/data/storeSearch';
import StoreSearchCard from '../StoreSearchCard/StoreSearchCard';

const StoreSearchRecent = () => {
  return (
    <div className={styles.contentRecent}>
      <div className={styles.searchTitle}>최근 방문한 가게</div>
      <div className={styles.storeSearchCardWrapper}>
        {storeSearchData.map((data, index) => (
          <StoreSearchCard
            key={index}
            couponMain={false}
            eventOn={false}
            title={data.title}
            couponCount={data.couponCount}
            distance={data.distance}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreSearchRecent;
