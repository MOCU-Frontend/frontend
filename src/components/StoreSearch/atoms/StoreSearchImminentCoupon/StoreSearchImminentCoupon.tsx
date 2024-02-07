import React from 'react';
import styles from './StoreSearchImminentCoupon.module.css';
import StoreSearchCard from '../StoreSearchCard/StoreSearchCard';
import { storeSearchData } from '../../../../store/data/storeSearch';
import { useNavigate } from 'react-router-dom';
const StoreSearchImminentCoupon = () => {
  // 쿠폰 사용이 임박한 식당들 순으로 나열한 데이터
  const sortedData = storeSearchData
    .filter((data) => data.couponCount >= 7)
    .sort((a, b) => b.couponCount - a.couponCount);

  const navigate = useNavigate();
  return (
    <div className={styles.contentRecent}>
      <div className={styles.searchTitle}>쿠폰 사용 임박!</div>
      <div className={styles.storeSearchCardWrapper}>
        {sortedData.map((data, index) => (
          <StoreSearchCard
            key={index}
            couponMain={true}
            title={data.title}
            couponCount={data.couponCount}
            distance={data.distance}
            onClick={() => navigate(`/store/${data.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreSearchImminentCoupon;
