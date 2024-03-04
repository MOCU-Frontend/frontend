import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import MyReviewHistoryContent from '../../../../../components/My/Review/atoms/Content/History/MyReviewHistoryContent';
import MyReviewNewContent from '../../../../../components/My/Review/atoms/Content/New/MyReviewNewContent';
import SlideMenuTab from '../../../../../components/SlideMenu/atoms/MenuTab/SlideMenuTab';
import { useCarouselData } from '../../../../../hooks/useCarouselData';
import styles from './MyReview.module.css';
const dataArr = [
  { title: '내 리뷰 쓰기', isChecked: true },
  { title: '작성 내역', isChecked: false },
];
const MyReview: React.FC = () => {
  const navigate = useNavigate();

  const { carouselItemArr, handleCheckedDataIndex } = useCarouselData(dataArr);
  const checkedMenuData = carouselItemArr.find((x) => x.isChecked);
  if (!checkedMenuData) throw new Error('no checked menu Data!');
  return (
    <>
      <HeaderBackBtn
        onClickBackBtn={() => navigate(-1)}
        headerTitle='내 리뷰'
      />
      <div className={styles.slideMenuTabWrapper}>
        <SlideMenuTab
          menuDataArr={carouselItemArr}
          handleCheckedDataIndex={handleCheckedDataIndex}
        />
      </div>

      {checkedMenuData.title === '내 리뷰 쓰기' && <MyReviewNewContent />}
      {checkedMenuData.title === '작성 내역' && <MyReviewHistoryContent />}
    </>
  );
};

export { MyReview as Component };
