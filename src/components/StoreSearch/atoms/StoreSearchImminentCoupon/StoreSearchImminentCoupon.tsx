import React from 'react';
import styles from './StoreSearchImminentCoupon.module.css';
import StoreSearchCard from '../StoreSearchCard/StoreSearchCard';
import { StoreInfo } from '../../../../store/Type/StoreSearch/storeSearch';
import { useNavigate } from 'react-router-dom';

interface Props {
  dueDateStoreInfoList: StoreInfo[] | undefined;
}

const StoreSearchImminentCoupon: React.FC<Props> = ({
  dueDateStoreInfoList,
}) => {
  const navigate = useNavigate();
  // 쿠폰 사용이 임박한 식당들 순으로 나열한 데이터
  const sortedData = dueDateStoreInfoList
    ?.filter((data: StoreInfo) => data.numOfStamp >= 1)
    .sort((a, b) => b.numOfStamp - a.numOfStamp);

  return (
    <div className={styles.contentRecent}>
      <div className={styles.searchTitle}>쿠폰 사용 임박!</div>
      <div className={styles.storeSearchCardWrapper}>
        {sortedData?.map((data, index) => (
          <StoreSearchCard
            key={index}
            couponMain={true}
            title={data.storeName}
            couponCount={data.numOfStamp}
            distance={data.distance}
            onClick={() => navigate(`/store/${data.storeName}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreSearchImminentCoupon;
