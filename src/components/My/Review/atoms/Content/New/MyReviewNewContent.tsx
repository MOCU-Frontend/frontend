import React, { useState } from 'react';
import SlideMenuReviewNewBodyTab from '../../../../../SlideMenu/atoms/BodyTab/ReviewNew/SlideMenuReviewNewBodyTab';
import MyReviewSlideStatus from '../../SlideStatus/MyReviewSlideStatus';
import MyReviewDoneContent from '../Done/MyReviewDoneContent';
import styles from './MyReviewNewContent.module.css';

interface Props {}

type MenuItemData = {
  dateText: string;
  storeCategory: string;
  storeTitle: string;
  accumText: string;
  nextGift: string;
  remainingDayNum: number;
  isChecked: boolean;
};

const menuItemDataArr: MenuItemData[] = [
  {
    dateText: '11. 16. 목',
    storeCategory: '베이커리',
    storeTitle: '크림베이글 건대점',
    accumText: '9/10',
    nextGift: '블루베리 크림 베이글',
    remainingDayNum: 4,
    isChecked: true,
  },
  {
    dateText: '11. 13. 월',
    storeCategory: '카페',
    storeTitle: '비에이치 테이블',
    accumText: '2/10',
    nextGift: '오늘의 수프',
    remainingDayNum: 1,
    isChecked: false,
  },
  {
    dateText: '11. 14. 화',
    storeCategory: '식당',
    storeTitle: '파머스포케 건대점',
    accumText: '1/10',
    nextGift: '캔음료 1개',
    remainingDayNum: 2,
    isChecked: false,
  },
];

const MyReviewNewContent: React.FC<Props> = ({}: Props) => {
  const [reviewArr, setReviewArr] = useState<MenuItemData[] | undefined>(
    menuItemDataArr
  );
  const handleCheckedDataIndex = (prevIndex: number, newIndex: number) => {
    if (!reviewArr) throw new Error('no reviewArr!!');
    if (!reviewArr[prevIndex]) throw new Error('invalid prevIndex!!');
    if (!reviewArr[newIndex]) throw new Error('invalid newIndex!!');
    setReviewArr((prevArr) => {
      if (!prevArr) throw new Error('no prevArr!!');
      const copiedArr = [...prevArr];
      copiedArr[prevIndex].isChecked = false;
      copiedArr[newIndex].isChecked = true;
      return copiedArr;
    });
  };
  return (
    <div className={styles.myReviewNewsWrapper}>
      {!reviewArr ? (
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
