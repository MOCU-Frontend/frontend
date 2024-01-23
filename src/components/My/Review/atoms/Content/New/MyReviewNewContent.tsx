import React from 'react';
import MyReviewNew from '../../New/MyReviewNew';
import styles from './MyReviewNewContent.module.css';

interface Props {}

const MyReviewNewContent: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.myReviewNewsWrapper}>
      <div className={styles.myReviewNewWrapper}>
        <MyReviewNew
          dateText='11. 16. 목'
          storeCategory='베이커리'
          storeTitle='크림베이글 건대점'
          accumText='9/10'
          nextGift='블루베리 크림 베이글'
          remainingDayNum={4}
        />
      </div>
    </div>
  );
};

export default MyReviewNewContent;
