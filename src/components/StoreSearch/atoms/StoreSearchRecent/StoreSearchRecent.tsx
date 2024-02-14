import React from 'react';
import styles from './StoreSearchRecent.module.css';

import { StoreInfo } from '../../../../store/Type/StoreSearch/storeSearch';
import StoreSearchCard from '../StoreSearchCard/StoreSearchCard';

interface Props {
  recentlyVisitedStoreInfoList: StoreInfo[] | undefined;
}

const StoreSearchRecent: React.FC<Props> = ({
  recentlyVisitedStoreInfoList,
}) => {
  return (
    <div className={styles.contentRecent}>
      <div className={styles.searchTitle}>최근 방문한 가게</div>
      <div className={styles.storeSearchCardWrapper}>
        {recentlyVisitedStoreInfoList?.map((data, index) => (
          <StoreSearchCard
            key={index}
            couponMain={false}
            eventOn={data.hasEvent}
            title={data.storeName}
            couponCount={data.numOfCouponAvailable}
            distance={data.distance}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreSearchRecent;
