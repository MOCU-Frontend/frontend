import React from 'react';
import CheckFilterSelect from '../../../../../CheckFilter/Select/CheckFilterSelect';
import MyReviewHistorySubText from '../../Text/HistorySub/MyReviewHistorySubText';
import MyReivewHistoryTitleText from '../../Text/HistoryTitle/MyReivewHistoryTitleText';
import styles from './MyReviewHistoryContent.module.css';
import { ReactComponent as InformIcon } from '../../../../../../assets/icon/information.svg';
import { colors } from '../../../../../../styles/colors';
import StoreReview from '../../../../../Store/atoms/Review/StoreReview';
import MyReviewHistory from '../../../History/MyReviewHistory';
interface Props {}
const reviewDataArr = [
  {
    storeName: '크림베이글 건대점',
    time: '9시간 전',
    body: '크림도 많이 들어있고 너무 맛있어요~!! 특히 블루베리 크림 베이글 추천합니다.! 다 좋은데 너무 추웠어요 그리고',
  },
  {
    storeName: '카페 안즈',
    time: '12시간 전',
    body: '집 앞에 새로 생긴 카페인거 같아서 가봤는데 분위기도 좋고 커피도 맛있어요.',
  },
  {
    storeName: '개미집',
    time: '13시간 전',
    body: '일주일에 한번은 먹는거 같아요. 이번에는 쿠폰 다 모아서 사리 서비스로 받았네요. 항상 친절하세요! 그리고',
  },
  {
    storeName: '한술식당 길음점 ',
    time: '14시간 전',
    body: '별점이 높아서 방문해봤어요! 기대했던대로 맛있고 직원분들도 너무 친절했어요.',
  },
  {
    storeName: '한술식당 길음점 ',
    time: '14시간 전',
    body: '별점이 높아서 방문해봤어요! 기대했던대로 맛있고 직원분들도 너무 친절했어요.',
  },
  {
    storeName: '한술식당 길음점 ',
    time: '14시간 전',
    body: '별점이 높아서 방문해봤어요! 기대했던대로 맛있고 직원분들도 너무 친절했어요.',
  },
];
const MyReviewHistoryContent: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.titleWrapper}>
        <MyReivewHistoryTitleText text={`내가 쓴 리뷰${14}개`} />
        <div className={styles.informWrapper}>
          <InformIcon width={14} height={14} fill={colors.greyDark00} />
          <MyReviewHistorySubText text='리뷰 수정 안내' />
        </div>
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
          <MyReviewHistory
            key={data.storeName + index}
            nameText={data.storeName}
            timeText={data.time}
            bodyText={data.body}
            bodyTextLengthLimit={60}
          />
        ))}
      </div>
    </div>
  );
};

export default MyReviewHistoryContent;
