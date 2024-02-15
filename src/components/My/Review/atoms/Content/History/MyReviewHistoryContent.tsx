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
interface Props {}

const MyReviewHistoryContent: React.FC<Props> = ({}: Props) => {
  const fetchMyReviewHistoryData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/data/my/review/history/my-review-history-data-dummy.json'
      );
      const data: MyReviewwHistoryDataResponse = response.data;
      return data.result;
    } catch (error) {
      throw new Error('MyReviewwHistory data error');
    }
  };
  const {
    data: myReviewwHistoryData,
    isLoading: isMyReviewwHistoryDataLoading,
    isError: isMyReviewwHistoryDataError,
  } = useQuery({
    queryKey: ['MyReviewwHistory'],
    queryFn: () => fetchMyReviewHistoryData(),
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
