import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import MyReviewNew from '../../../components/My/Review/atoms/New/MyReviewNew';
import SlideMenuTab from '../../../components/SlideMenu/atoms/MenuTab/SlideMenuTab';
import styles from './MyReview.module.css';

const MyReview: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderBackBtn
        onClickBackBtn={() => navigate(-1)}
        headerTitle='내 리뷰'
      />
      <SlideMenuTab
        menuDataArr={[
          { title: '내 리뷰 쓰기', isChecked: true },
          { title: '작성 내역', isChecked: false },
        ]}
        handleCheckedDataIndex={(prevIndex: number, newIndex: number) => {}}
      />
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
    </>
  );
};

export default MyReview;
