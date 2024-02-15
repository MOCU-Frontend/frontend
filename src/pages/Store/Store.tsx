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
import storeImg from '../../assets/imgs/storeExample.png';

import instance from '../../apis/instance';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import {
  StoreDetailResponse,
  StoreDetailData,
} from '../../store/Type/StoreDetail/storeDetail';

const Store: React.FC = () => {
  const navigate = useNavigate();

  const fetchStoreDetailData = async () => {
    const response = await instance.get<StoreDetailResponse>(
      'data/storeDetail/storeDetail-sortByRate.json'
    );
    console.log(response);
    return response.data.result;
  };

  const {
    data: storeDetailData,
    isLoading: isStoreDetailDataLoading,
    isError: isStoreDetailError,
  } = useQuery({
    queryKey: ['StoreDetailData'],
    queryFn: () => fetchStoreDetailData(),
  });

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
      <img src={storeImg} alt="" className={styles.imgDummyBox} />
      <div className={styles.topContentBox}>
        <div className={styles.infoWrapper}>
          <StoreInfoContent
            title={storeDetailData && storeDetailData?.storeName}
            category={storeDetailData && storeDetailData?.category}
          />
        </div>
        <div className={styles.stampWrapper}>
          <StoreStampContent
            numOfStamp={storeDetailData && storeDetailData?.numOfStamp}
            maxStamp={storeDetailData && storeDetailData?.maxStamp}
            reward={storeDetailData && storeDetailData?.reward}
          />
        </div>
        <div className={styles.accumBtnWrapper}>
          <StoreAccumBtn onClick={() => {}} />
        </div>
        <div className={styles.scoreWrapper}>
          <StoreScoreContent
            rating={storeDetailData && storeDetailData?.rating}
          />
        </div>
        <StoreReviewContent
          reviews={storeDetailData && storeDetailData?.reviews}
        />
      </div>
      {isExistReview && (
        <div className={styles.fullBtnWrapper}>
          <FullBtn
            onClick={() => navigate('/review/11')}
            label="리뷰 작성 (1일 남음)"
          />
        </div>
      )}
    </div>
  );
};

export default Store;
