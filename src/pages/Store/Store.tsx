import React, { useState } from 'react';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './Store.module.css';
import { ReactComponent as ShareIcon } from '../../assets/icon/share.svg';
import { colors } from '../../styles/colors';
import StoreInfoContent from '../../components/Store/atoms/Contents/Info/StoreInfoContent';
import StoreStampContent from '../../components/Store/atoms/Contents/Stamp/StoreStampContent';
import StoreAccumBtn from '../../components/Store/atoms/Button/Accum/StoreAccumBtn';
import StoreScoreContent from '../../components/Store/atoms/Contents/Score/StoreScoreContent';
import StoreReviewContent from '../../components/Store/atoms/Contents/Review/StoreReviewContent';
import { useNavigate } from 'react-router-dom';
import FullBtn from '../../components/Button/FullBtn/FullBtn';

const Store: React.FC = () => {
  const navigate = useNavigate();
  const [isExistReview, setIsExistReview] = useState(true);
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn
          backBtnColor={colors.white}
          onClickBackBtn={() => navigate(-1)}
        >
          <div className={styles.shareBtnWrapper}>
            <button className={styles.shareBtn}>
              <ShareIcon width={24} height={24} fill={colors.white} />
            </button>
          </div>
        </HeaderBackBtn>
      </div>
      <div className={styles.imgDummyBox}></div>
      <div className={styles.topContentBox}>
        <div className={styles.infoWrapper}>
          <StoreInfoContent title='크림베이글 건대점' category='베이커리' />
        </div>
        <div className={styles.stampWrapper}>
          <StoreStampContent />
        </div>
        <div className={styles.accumBtnWrapper}>
          <StoreAccumBtn onClick={() => {}} />
        </div>
        <div className={styles.scoreWrapper}>
          <StoreScoreContent />
        </div>
        <StoreReviewContent />
      </div>
      {isExistReview && (
        <div className={styles.fullBtnWrapper}>
          <FullBtn
            onClick={() => navigate('/review/11')}
            label='리뷰 작성 (1일 남음)'
          />
        </div>
      )}
    </div>
  );
};

export default Store;
