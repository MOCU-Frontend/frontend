import React from 'react';
import CheckFilterSelect from '../../../../CheckFilter/Select/CheckFilterSelect';
import StoreReview from '../../Review/StoreReview';
import StoreInfoTitleText from '../../Text/InfoTitle/StoreInfoTitleText';
import styles from './StoreReviewContent.module.css';

import { Review } from '../../../../../store/Type/StoreDetail/storeDetail';

interface Props {
  reviews: Review[] | undefined;
  handleReportReview: (reviewId: number, onSuccess: () => void) => void;
}

const StoreReviewContent: React.FC<Props> = ({
  reviews,
  handleReportReview,
}: Props) => {
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
        {reviews &&
          reviews.map((data, index) => (
            <StoreReview
              id={data.reviewId}
              key={data.name + index}
              nameText={data.name}
              timeText={data.modifiedDate}
              bodyText={data.content}
              rate={data.rate}
              bodyTextLengthLimit={60}
              handleReportReview={handleReportReview}
            />
          ))}
      </div>
    </div>
  );
};

export default StoreReviewContent;
