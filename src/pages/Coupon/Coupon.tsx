import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Coupon.module.css';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import { ReactComponent as NowImage } from '../../assets/icon/now.svg';
import { colors } from '../../styles/colors';
import StoreInfoInStamp from '../../components/Stamp/atoms/StoreInfoInStamp/StoreInfoInStamp';
import CouponBottomSheet from '../../components/Coupon/atoms/BottomSheet/CouponBottomSheet';
import MapStampModal from '../../components/Map/atoms/Modal/StampModal/MapStampModal';
import MapCouponModal from '../../components/Map/atoms/Modal/Coupon/MapCouponModal';

type ModalLevel = 'confirm' | 'waiting' | 'done';
type CouponModalLevel = 'confirm' | 'waiting' | 'done' | 'regularCustomer';

type StoreData = {
  title: string;
  category: string;
  loc: { lat: number; lng: number };
  couponNum: number;
  isFire: boolean;
  isChecked: boolean;
  isGift: boolean;
};

const storeMapData: StoreData[] = [
  {
    title: '크림베이글 건대점1',
    category: '베이커리1',
    loc: { lat: 37.3595704, lng: 127.105399 },
    couponNum: 1,
    isFire: false,
    isChecked: false,
    isGift: false,
  },
  {
    title: '크림베이글 건대점2',
    category: '베이커리2',
    loc: { lat: 37.3696708, lng: 127.105405 },
    couponNum: 0,
    isFire: true,
    isChecked: false,
    isGift: false,
  },
  {
    title: '크림베이글 건대점3',
    category: '베이커리3',
    loc: { lat: 37.3696718, lng: 127.136404 },
    couponNum: 5,
    isFire: false,
    isChecked: false,
    isGift: true,
  },
];

const Coupon = () => {
  const navigate = useNavigate();
  const [isShowBottomSheet, setIsShowBottomSheet] = useState<boolean>(false);
  const [stampModalLevel, setStampModalLevel] = useState<ModalLevel | null>(
    null
  );
  const [couponModalLevel, setCouponModalLevel] =
    useState<CouponModalLevel | null>(null);
  const [isRegularCustomer, setIsRegularCustomer] = useState(false);

  const handleShowBottomSheet = () => {
    setIsShowBottomSheet(true);
  };

  const [selectedStoreInform, setSelectedStoreInform] = useState<
    StoreData | undefined
  >();

  const handleDragDownBottomSheet = () => {
    setIsShowBottomSheet(false);
  };

  return (
    <div className={styles.wrapper}>
      <HeaderBackBtn
        headerTitle='쿠폰 적립/사용'
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

        <button
          className={styles.couponLocationResetBtn}
          onClick={() => navigate('/my/location')}
        >
          <NowImage width={24} height={24} fill={colors.subPurpleLight} />
          <div className={styles.couponLocationResetText}>현재 위치 재설정</div>
        </button>
      </div>

      <div className={styles.couponStoreInfoWrapper}>
        <StoreInfoInStamp
          title='카페롱'
          couponCount={8}
          achieve='바닐라 마카롱'
          distance={100}
          onClickCouponBtn={() => {
            setCouponModalLevel('confirm');
          }}
          onClickStoreDetailBtn={() => {
            setSelectedStoreInform(storeMapData[0]);
            setIsShowBottomSheet(true);
          }}
        />
        <StoreInfoInStamp
          title='드로잉레시피'
          couponCount={10}
          achieve='오븐 스파게티'
          distance={100}
          onClickCouponBtn={() => {
            setCouponModalLevel('confirm');
          }}
          onClickStoreDetailBtn={() => {
            setSelectedStoreInform(storeMapData[1]);
            setIsShowBottomSheet(true);
          }}
        />
        <StoreInfoInStamp
          title='크림베이글 건대점'
          couponCount={9}
          achieve='아이스 아메리카노 한 잔'
          distance={100}
          onClickCouponBtn={() => {
            setCouponModalLevel('confirm');
          }}
          onClickStoreDetailBtn={() => {
            setSelectedStoreInform(storeMapData[2]);
            setIsShowBottomSheet(true);
          }}
        />
      </div>
      {isShowBottomSheet && selectedStoreInform && (
        <CouponBottomSheet
          onDragBottom={handleDragDownBottomSheet}
          storeInform={selectedStoreInform}
          onClickStampBtn={() => {
            setStampModalLevel('confirm');
            setSelectedStoreInform(undefined);
            setIsShowBottomSheet(false);
          }}
          onClickCouponBtn={() => {
            setCouponModalLevel('confirm');
            setSelectedStoreInform(undefined);
            setIsShowBottomSheet(false);
          }}
        />
      )}
      <MapStampModal
        stampModalLevel={stampModalLevel}
        setStampModalLevel={setStampModalLevel}
        onCancelModal={() => {}}
        onClickDoneModalRightBtn={() => navigate(`/review/${12}`)}
      />
      <MapCouponModal
        couponModalLevel={couponModalLevel}
        setCouponModalLevel={setCouponModalLevel}
        onCancelModal={() => {}}
        isRegularCustomer={isRegularCustomer}
        handleRegularCustomer={() => setIsRegularCustomer(true)}
      />
    </div>
  );
};

export default Coupon;
