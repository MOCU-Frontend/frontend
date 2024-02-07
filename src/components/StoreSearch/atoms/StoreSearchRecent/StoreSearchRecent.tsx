import React from 'react';
import styles from './StoreSearchRecent.module.css';

import { StoreSeachData } from '../../../../store/data/storeSearch';
import StoreSearchCard from '../StoreSearchCard/StoreSearchCard';
import { useNavigate } from 'react-router-dom';

interface Props {
  storeSeachDataArr: StoreSeachData[];
}

const StoreSearchRecent: React.FC<Props> = ({ storeSeachDataArr }: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.contentRecent}>
      <div className={styles.searchTitle}>최근 방문한 가게</div>
      <div className={styles.storeSearchCardWrapper}>
        {storeSeachDataArr.map((data, index) => (
          <StoreSearchCard
            key={index}
            couponMain={false}
            eventOn={false}
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

export default StoreSearchRecent;
