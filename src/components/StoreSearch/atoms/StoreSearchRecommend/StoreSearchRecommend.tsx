import React from 'react';
import styles from './StoreSearchRecommend.module.css';
import StoreSearchCard from '../StoreSearchCard/StoreSearchCard';

import { storeSearchData } from '../../../../store/data/storeSearch';

const StoreSearchRecommend = () => {
  return (
    <div className={styles.contentRecent}>
      <div className={styles.searchTitle}>모쿠님을 위한 맞춤 가게 추천 </div>
      <div className={styles.storeSearchCardWrapper}>
        {storeSearchData.map((data, index) => (
          <StoreSearchCard
            key={index}
            couponMain={false}
            eventOn={data.eventOn}
            title={data.title}
            couponCount={data.couponCount}
            distance={data.distance}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreSearchRecommend;
