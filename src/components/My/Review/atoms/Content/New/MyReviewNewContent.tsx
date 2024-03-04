import React, { useEffect, useState } from 'react';
import { useMyReviewNewQuery } from '../../../../../../apis/my/review/New/useMyReviewNewQuery';
import { useCarouselData } from '../../../../../../hooks/useCarouselData';
import useStore from '../../../../../../store/useStore';
import SlideMenuReviewNewBodyTab from '../../../../../SlideMenu/atoms/BodyTab/ReviewNew/SlideMenuReviewNewBodyTab';
import MyReviewSlideStatus from '../../SlideStatus/MyReviewSlideStatus';
import MyReviewDoneContent from '../Done/MyReviewDoneContent';
import styles from './MyReviewNewContent.module.css';

const MyReviewNewContent = () => {
  const userId = useStore((state) => state.userId);

  const {
    myReviewNewQuery: { data: MyReviewNewData },
  } = useMyReviewNewQuery(userId);

  const [reviewArr, setReviewArr] = useState(
    MyReviewNewData
      ? MyReviewNewData.map((data, index) => {
          return { ...data, isChecked: index === 0 };
        })
      : []
  );

  useEffect(() => {
    setReviewArr(
      MyReviewNewData
        ? MyReviewNewData.map((data, index) => {
            return { ...data, isChecked: index === 0 };
          })
        : []
    );
  }, [MyReviewNewData]);

  const { carouselItemArr, handleCheckedDataIndex } =
    useCarouselData(reviewArr);

  return (
    <div className={styles.myReviewNewsWrapper}>
      {carouselItemArr.length === 0 ? (
        <MyReviewDoneContent />
      ) : (
        <>
          <SlideMenuReviewNewBodyTab
            menuItemDataArr={carouselItemArr}
            handleCheckedDataIndex={handleCheckedDataIndex}
          />
          <MyReviewSlideStatus
            dataArr={carouselItemArr}
            handleCheckedDataIndex={handleCheckedDataIndex}
          />
        </>
      )}
    </div>
  );
};

export default MyReviewNewContent;
