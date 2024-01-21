import React from 'react';
import CheckFilterSelect from '../../../../CheckFilter/Select/CheckFilterSelect';
import StoreReview from '../../Review/StoreReview';
import StoreInfoTitleText from '../../Text/InfoTitle/StoreInfoTitleText';
import styles from './StoreReviewContent.module.css';

interface Props {}
const reviewDataArr = [
  {
    name: '윤**',
    time: '9시간 전',
    body: '가게도 깨끗하고 직원분들도 다 친절하세요!!',
  },
  {
    name: '모*',
    time: '12시간 전',
    body: '가게도 깨끗하고 직원분들도 다 친절하세요!!',
  },
  {
    name: '워***** ',
    time: '13시간 전',
    body: '크림도 많이 들어있고 너무 맛있어요~!! 특히 블루베리 크림 베이글 추천합니다.! 다 좋은데 너무 추웠어요 그리',
  },
  {
    name: '워***** ',
    time: '14시간 전',
    body: '크림도 많이 들어있고 너무 맛있어요~!! 특히 블루베리 크림 베이글 추천합니다.!',
  },
];
const StoreReviewContent: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.titleWrapper}>
        <StoreInfoTitleText text='리뷰 165개' />
      </div>
      <div className={styles.filterWrapper}>
        <CheckFilterSelect
          label='최신순'
          onClick={() => {}}
          isChecked={false}
        />
      </div>
      <div className={styles.reviewsWrapper}>
        {reviewDataArr.map((data, index) => (
          <StoreReview
            key={data.name + index}
            nameText={data.name}
            timeText={data.time}
            bodyText={data.body}
            bodyTextLengthLimit={60}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreReviewContent;
