import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import ReviewBtnContent from '../../components/Review/atoms/Contents/Btn/ReviewBtnContent';
import ReviewInformContent from '../../components/Review/atoms/Contents/Inform/ReviewInformContent';
import ReviewInputContent from '../../components/Review/atoms/Contents/Input/ReviewInputContent';
import ReviewNoticeContent from '../../components/Review/atoms/Contents/Notice/ReviewNoticeContent';
import ReviewScoreContent from '../../components/Review/atoms/Contents/Score/ReviewScoreContent';
import styles from './Review.module.css';

const Review: React.FC = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
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
        <ReviewScoreContent scoreText='아주 만족해요' />
      </div>
      <div className={styles.inputWrapper}>
        <ReviewInputContent text={text} setText={setText} />
      </div>
      <div className={styles.noticeWrapper}>
        <ReviewNoticeContent />
      </div>
      <div className={styles.btnWrapper}>
        <ReviewBtnContent
          onClickCancelBtn={() => {}}
          onClickConfirmBtn={() => {}}
          confirmBtnDisabled={text.length < 20}
        />
      </div>
    </>
  );
};

export default Review;
