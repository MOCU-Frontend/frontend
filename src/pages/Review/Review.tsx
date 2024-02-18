import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import ReviewBtnContent from '../../components/Review/atoms/Contents/Btn/ReviewBtnContent';
import ReviewInformContent from '../../components/Review/atoms/Contents/Inform/ReviewInformContent';
import ReviewInputContent from '../../components/Review/atoms/Contents/Input/ReviewInputContent';
import ReviewNoticeContent from '../../components/Review/atoms/Contents/Notice/ReviewNoticeContent';
import ReviewScoreContent from '../../components/Review/atoms/Contents/Score/ReviewScoreContent';
import {
  ReviewPatchRequestData,
  ReviewPatchResponse,
  ReviewPostRequestData,
  ReviewPostResponse,
  ReviewReportRequestData,
} from '../../store/Type/Review/review';
import styles from './Review.module.css';

const Review: React.FC = () => {
  const navigate = useNavigate();
  const [reviewText, setReviewText] = useState('');
  const reviewPostMutation = useMutation({
    mutationFn: (newData: ReviewPostRequestData) => {
      return axios.post('/review', newData);
    },
    onSuccess: (res) => {
      const data: ReviewPostResponse = res.data;
      console.log(data);
    },
  });

  const reviewPatchMutation = useMutation({
    mutationFn: (newData: ReviewPatchRequestData) => {
      return axios.post('/review/correct-my-review', newData);
    },
    onSuccess: (res) => {
      const data: ReviewPatchResponse = res.data;
      console.log(data);
    },
  });

  return (
    <>
      <HeaderBackBtn
        headerTitle='리뷰 작성'
        onClickBackBtn={() => navigate(-1)}
      />
      <div className={styles.informWrapper}>
        <ReviewInformContent storeName='크림베이글 건대점' />
      </div>
      <div className={styles.scoreWrapper}>
        <ReviewScoreContent />
      </div>
      <div className={styles.inputWrapper}>
        <ReviewInputContent text={reviewText} setText={setReviewText} />
      </div>
      <div className={styles.noticeWrapper}>
        <ReviewNoticeContent />
      </div>
      <div className={styles.btnWrapper}>
        <ReviewBtnContent
          onClickCancelBtn={() => navigate(-1)}
          onClickConfirmBtn={() => {
            if (reviewText.length > 20) {
              reviewPostMutation.mutate({
                userId: 5,
                storeId: 5,
                rate: 4,
                content: reviewText,
              });
            }
          }}
          confirmBtnDisabled={reviewText.length < 20}
        />
      </div>
    </>
  );
};

export default Review;
