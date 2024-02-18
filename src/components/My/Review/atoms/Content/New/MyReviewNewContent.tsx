import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { fetchMyReviewNewData } from '../../../../../../apis/my/review/new';
import { MyReviewwNewDataResponse } from '../../../../../../store/Type/My/ReviewNew/MyReviewNew';
import SlideMenuReviewNewBodyTab from '../../../../../SlideMenu/atoms/BodyTab/ReviewNew/SlideMenuReviewNewBodyTab';
import MyReviewSlideStatus from '../../SlideStatus/MyReviewSlideStatus';
import MyReviewDoneContent from '../Done/MyReviewDoneContent';
import styles from './MyReviewNewContent.module.css';

interface Props {}

const MyReviewNewContent: React.FC<Props> = ({}: Props) => {
  const {
    data: MyReviewNewData,
    isLoading: isMyReviewNewDataLoading,
    isError: isMyReviewNewDataError,
  } = useQuery({
    queryKey: ['MyReviewNew'],
    queryFn: () => fetchMyReviewNewData(5),
  });
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

  const handleCheckedDataIndex = (prevIndex: number, newIndex: number) => {
    if (!reviewArr) throw new Error('no reviewArr!!');
    if (!reviewArr[prevIndex]) throw new Error('invalid prevIndex!!');
    if (!reviewArr[newIndex]) throw new Error('invalid newIndex!!');
    if (!reviewArr) throw new Error('no prevArr!!');
    setReviewArr((prevArr) => {
      const copiedArr = [...prevArr];
      copiedArr[prevIndex].isChecked = false;
      copiedArr[newIndex].isChecked = true;
      return copiedArr;
    });
  };
  return (
    <div className={styles.myReviewNewsWrapper}>
      {reviewArr.length === 0 ? (
        <MyReviewDoneContent />
      ) : (
        <>
          <SlideMenuReviewNewBodyTab
            menuItemDataArr={reviewArr}
            handleCheckedDataIndex={handleCheckedDataIndex}
          />
          <MyReviewSlideStatus
            dataArr={reviewArr}
            handleCheckedDataIndex={handleCheckedDataIndex}
          />
        </>
      )}
    </div>
  );
};

export default MyReviewNewContent;
