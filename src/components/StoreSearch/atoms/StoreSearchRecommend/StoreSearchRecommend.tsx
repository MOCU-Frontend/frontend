import React from 'react';
import styles from './StoreSearchRecommend.module.css';
import StoreSearchCard from '../StoreSearchCard/StoreSearchCard';
import { useNavigate } from 'react-router-dom';

import { StoreRecommendInfo } from '../../../../store/Type/StoreSearch/storeSearch';

interface Props {
  recommendStoreInfoList: StoreRecommendInfo[] | undefined;
}

const StoreSearchRecommend: React.FC<Props> = ({ recommendStoreInfoList }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.contentRecent}>
      <div className={styles.searchTitle}>모쿠님을 위한 맞춤 가게 추천 </div>
      <div className={styles.storeSearchCardWrapper}>
        {recommendStoreInfoList?.map((data, index) => (
          <StoreSearchCard
            key={data.storeId + index}
            couponMain={false}
            eventOn={data.hasEvent}
            title={data.storeName}
            distance={data.distance}
            onClick={() => navigate(`/store/${data.storeId}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreSearchRecommend;
