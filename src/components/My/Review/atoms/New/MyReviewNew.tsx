import React from 'react';
import Button from '../../../../Button/Button';
import MyReviewNewInfoSubText from '../Text/NewInfoSub/MyReviewNewInfoSubText';
import MyReviewNewInfoTitleText from '../Text/NewInfoTitle/MyReviewNewInfoTitleText';
import MyReviewNewSubText from '../Text/NewSub/MyReviewNewSubText';
import MyReviewNewSubBoldText from '../Text/NewSubBold/MyReviewNewSubBoldText';
import styles from './MyReviewNew.module.css';

interface Props {
  dateText: string;
  storeTitle: string;
  storeCategory: string;
  accumText: string;
  nextGift: string;
  remainingDayNum: number;
}

const MyReviewNew: React.FC<Props> = ({
  dateText,
  storeCategory,
  storeTitle,
  accumText,
  nextGift,
  remainingDayNum,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.dummyImgWrapper}>
        <div className={styles.dummyImg}></div>
      </div>
      <MyReviewNewSubText text={dateText} />
      <div className={styles.infoWrapper}>
        <MyReviewNewInfoTitleText text={storeTitle} />
        <MyReviewNewInfoSubText text={storeCategory} />
      </div>
      <div className={styles.accumWrapper}>
        <MyReviewNewSubText text='현재 적립: ' />
        <MyReviewNewSubBoldText text={accumText} />
      </div>
      <MyReviewNewSubText text={`다음 보상: ${nextGift}`} />
      <div className={styles.btnWrapper}>
        <Button
          size='full'
          label={`리뷰 작성 (${remainingDayNum}일 남음)`}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default MyReviewNew;
