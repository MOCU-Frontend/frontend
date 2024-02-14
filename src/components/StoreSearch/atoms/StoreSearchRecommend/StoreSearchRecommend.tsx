import React from 'react';
import styles from './StoreSearchRecommend.module.css';
import StoreSearchCard from '../StoreSearchCard/StoreSearchCard';

import { StoreRecommendInfo } from '../../../../store/Type/StoreSearch/storeSearch';

interface Props {
  recommendStoreInfoList: StoreRecommendInfo[] | undefined;
}

const StoreSearchRecommend: React.FC<Props> = ({ recommendStoreInfoList }) => {
  return (
    <div className={styles.contentRecent}>
      <div className={styles.searchTitle}>모쿠님을 위한 맞춤 가게 추천 </div>
      <div className={styles.storeSearchCardWrapper}>
        {recommendStoreInfoList?.map((data, index) => (
          <StoreSearchCard
            key={index}
            couponMain={false}
            eventOn={data.hasEvent}
            title={data.storeName}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreSearchRecommend;
