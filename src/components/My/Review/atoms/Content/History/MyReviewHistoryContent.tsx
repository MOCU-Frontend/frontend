import React from 'react';
import CheckFilterSelect from '../../../../../CheckFilter/Select/CheckFilterSelect';
import MyReviewHistorySubText from '../../Text/HistorySub/MyReviewHistorySubText';
import MyReivewHistoryTitleText from '../../Text/HistoryTitle/MyReivewHistoryTitleText';
import styles from './MyReviewHistoryContent.module.css';
import { ReactComponent as InformIcon } from '../../../../../../assets/icon/information.svg';
import { colors } from '../../../../../../styles/colors';
import StoreReview from '../../../../../Store/atoms/Review/StoreReview';
import MyReviewHistory from '../../../History/MyReviewHistory';
import axios from 'axios';
import { MyReviewwHistoryDataResponse } from '../../../../../../store/Type/My/ReviewHistory/MyReviewHistory';
import { useQuery } from '@tanstack/react-query';
import { fetchMyReviewHistoryData } from '../../../../../../apis/my/review/history';
import useStore from '../../../../../../store/useStore';
interface Props {}

const MyReviewHistoryContent: React.FC<Props> = ({}: Props) => {
  const userId = useStore((state) => state.userId);
  const {
    data: myReviewwHistoryData,
    isLoading: isMyReviewwHistoryDataLoading,
    isError: isMyReviewwHistoryDataError,
  } = useQuery({
    queryKey: ['MyReviewwHistory'],
    queryFn: () => fetchMyReviewHistoryData(userId || ''),
    enabled: !!userId,
  });
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
        {myReviewwHistoryData &&
          myReviewwHistoryData.map((data, index) => (
            <MyReviewHistory
              key={data.storeName + index}
              nameText={data.storeName}
              rate={data.rate}
              timeText={data.createdDate}
              bodyText={data.content}
              bodyTextLengthLimit={60}
            />
          ))}
      </div>
    </div>
  );
};

export default MyReviewHistoryContent;
