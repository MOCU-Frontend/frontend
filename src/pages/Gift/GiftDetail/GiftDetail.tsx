import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './GiftDetail.module.css';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import { colors } from '../../../styles/colors';

import { ReactComponent as ShareIcon } from '../../../assets/icon/share.svg';
import { ReactComponent as RightArrowIcon } from '../../../assets/icon/arrowRightSmall.svg';
import { ReactComponent as HourGlassIcon } from '../../../assets/icon/hourGlassSmall.svg';
import { ReactComponent as MapIcon } from '../../../assets/icon/map.svg';
import { ReactComponent as PinMapIcon } from '../../../assets/icon/mapMarkerSmall.svg';
import StarGageBar from '../../../components/StarGageBar/StarGageBar';

const GiftDetail = () => {
  const navigate = useNavigate();
  const { cafeTitle, foodTitle, foodPrice } = useParams();
  return (
    <div className={styles.giftWrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn
          backBtnColor={colors.white}
          onClickBackBtn={() => navigate(-1)}
          headerTitle="선물하기"
          headerTitleColor={colors.white}
        >
          <div className={styles.shareBtnWrapper}>
            <button className={styles.shareBtn}>
              <ShareIcon width={24} height={24} fill={colors.white} />
            </button>
          </div>
        </HeaderBackBtn>
      </div>

      {/* 일단 이미지 대신 회색화면이 들어감 */}
      <div className={styles.imgWrapper} />

      <div className={styles.giftTitleWrapper}>
        <div className={styles.cafeTitleWrapper}>{cafeTitle}</div>
        <div className={styles.foodTitleWrapper}>{foodTitle}</div>
        <div className={styles.foodPriceWrapper}>
          {foodPrice
            ? `${Number(foodPrice).toLocaleString('ko-KR')}원`
            : '가격 표시 오류'}
        </div>
        <div className={styles.reviewInfoWrapper}>
          <StarGageBar width={54} height={10} score={3.8} />
          <div className={styles.reviewButtonWrapper}>
            <div className={styles.reviewButtonText}>150건의 선물후기</div>
            <RightArrowIcon width={16} height={16} />
          </div>
        </div>

        <div className={styles.giftInfoWrapper}>
          <div className={styles.giftInfoTitle}>상품정보</div>
          <div className={styles.expDateWrapper}>
            <HourGlassIcon width={24} height={24} fill={colors.greyDark00} />
            <div className={styles.giftInfoText}>유효기간 480일</div>
          </div>
          <div className={styles.availableStoreWrapper}>
            <div className={styles.availableStoreElement}>
              <PinMapIcon width={24} height={24} fill={colors.greyDark00} />
              <div className={styles.giftInfoText}>이용매장 4곳</div>
            </div>

            <div className={styles.availableStoreElement}>
              <MapIcon
                width={24}
                height={24}
                fill="none"
                stroke={colors.greyDark00}
              />
              <div className={styles.giftInfoText}>지도로 찾기</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftDetail;
