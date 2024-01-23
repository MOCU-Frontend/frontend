import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Coupon.module.css';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import { ReactComponent as NowImage } from '../../assets/icon/now.svg';
import { colors } from '../../styles/colors';
import StoreInfoInStamp from '../../components/Stamp/atoms/StoreInfoInStamp/StoreInfoInStamp';

const Coupon = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <HeaderBackBtn
        headerTitle="쿠폰 적립/사용"
        onClickBackBtn={() => navigate(-1)}
      />
      <div className={styles.couponTextWrapper}>
        <div className={styles.couponTitleWrapper}>
          <div className={styles.couponTitle}>쿠폰을 적립, 사용할 수 있는</div>
          <div className={styles.couponTitle}>근처 가게를 선택해주세요.</div>
        </div>
        <div className={styles.couponLocation}>
          현위치: 서울특별시 광진구 아차산로 93
        </div>

        <button className={styles.couponLocationResetBtn}>
          <NowImage width={24} height={24} fill={colors.subPurpleLight} />
          <div className={styles.couponLocationResetText}>현재 위치 재설정</div>
        </button>
      </div>

      <div className={styles.couponStoreInfoWrapper}>
        <StoreInfoInStamp
          title="카페롱"
          couponCount={8}
          achieve="바닐라 마카롱"
          distance={100}
          onClickCouponBtn={() => {}}
          onClickStoreDetailBtn={() => {}}
        />
        <StoreInfoInStamp
          title="드로잉레시피"
          couponCount={10}
          achieve="오븐 스파게티"
          distance={100}
          onClickCouponBtn={() => {}}
          onClickStoreDetailBtn={() => {}}
        />
        <StoreInfoInStamp
          title="크림베이글 건대점"
          couponCount={9}
          achieve="아이스 아메리카노 한 잔"
          distance={100}
          onClickCouponBtn={() => {}}
          onClickStoreDetailBtn={() => {}}
        />
      </div>
    </div>
  );
};

export default Coupon;
