import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeMenuFullBtn from '../../../components/Home/atoms/Button/MenuFullBtn/HomeMenuFullBtn';
import { ReactComponent as ProfileIcon } from '../../../assets/icon/profileGradation.svg';
import { ReactComponent as StoreIcon } from '../../../assets/icon/store.svg';
import { ReactComponent as CustomerIcon } from '../../../assets/icon/customer.svg';
import { ReactComponent as StampIcon } from '../../../assets/icon/stampLine.svg';
import styles from './OwnerHome.module.css';
import HomeHeader from '../../../components/Home/atoms/Header/HomeHeader';
import OwnerHomeHelloContent from '../../../components/Owner/Home/atoms/Contents/Hello/OwnerHomeHelloContent';
import ModalRequest from '../../../components/Modal/ModalRequest/ModalRequest';
import ModalConfirm from '../../../components/Modal/ModalConfirm/ModalConfirm';
import ModalAccum from '../../../components/Modal/ModalAccum/ModalAccum';
declare global {
  interface Window {
    showCouponModal: () => void;
    showAccumModal: () => void;
  }
}
const OwnerHome: React.FC = () => {
  const navigate = useNavigate();
  const [isShowAccumModal, setIsShowAccumModal] = useState(false);
  const [isShowCouponModal, setIsShowCouponModal] = useState(false);
  const [isShowUseCouponModal, setIsShowUseCouponModal] = useState(false);
  const [isShowAccumCounterModal, setIsShowAccumCounterModal] = useState(false);
  const [accumCounterNum, setAccumCounterNum] = useState(1);
  window.showAccumModal = () => setIsShowAccumModal(true);
  window.showCouponModal = () => setIsShowCouponModal(true);
  return (
    <div className={styles.wholeWrapper}>
      <HomeHeader
        onClickAlarmBtn={() => {}}
        onClickSettingBtn={() => {}}
        alarmNum={4}
      />
      <div className={styles.homeTopInformBar}>
        <ProfileIcon width={48} height={48} />
        <OwnerHomeHelloContent userName='크림베이글 건대점' />
      </div>

      <main className={styles.main}>
        <HomeMenuFullBtn
          onClick={() => navigate('inform')}
          titleText='가게 정보'
          subText='소비자들에게 노출되는 가게 정보를 기입해보세요!'
          informText='현위치 : 성북구 정릉로 77'
          Icon={StoreIcon}
          IsIconStroke={false}
        />

        <HomeMenuFullBtn
          onClick={() => navigate('request')}
          titleText='고객 요청 관리'
          subText='쿠폰 적립 및 사용 요청을 직접 관리하세요!'
          informText=''
          Icon={CustomerIcon}
        />
        <HomeMenuFullBtn
          onClick={() => navigate('coupon')}
          titleText='고객 적립 현황'
          subText='단골 손님들의 적립현황과 데이터차트를 확인하세요!'
          informText=''
          Icon={StampIcon}
        />
      </main>
      {isShowAccumModal && (
        <ModalRequest
          headerTitle='고객 요청'
          bodyText='모쿠님의 적립 요청이 있습니다. 수락하시겠습니까?'
          sub1Text='일시: 2023.12.16. 17:24'
          sub2Text='장소: 서울시 광진구 아차산로 93'
          onClickNo={() => setIsShowAccumModal(false)}
          onClickX={() => setIsShowAccumModal(false)}
          onClickYes={() => {
            setIsShowAccumModal(false);
            setIsShowAccumCounterModal(true);
          }}
        />
      )}
      {isShowCouponModal && (
        <ModalRequest
          headerTitle='고객 요청'
          bodyText='모쿠님의 쿠폰 사용 요청이 있습니다. 수락하시겠습니까?'
          sub1Text='일시: 2023.12.16. 17:24'
          sub2Text='장소: 서울시 광진구 아차산로 93'
          onClickNo={() => setIsShowCouponModal(false)}
          onClickX={() => setIsShowCouponModal(false)}
          onClickYes={() => {
            setIsShowCouponModal(false);
            setIsShowUseCouponModal(true);
          }}
        />
      )}
      {isShowUseCouponModal && (
        <ModalConfirm
          headerTitle='쿠폰 사용'
          bodyText='모쿠님의 쿠폰을 사용합니다.'
          subText='보상을 준비해주세요!'
          informText='아이스 아메리카노 한 잔'
          onClickNo={() => setIsShowUseCouponModal(false)}
          onClickX={() => setIsShowUseCouponModal(false)}
          onClickYes={() => setIsShowUseCouponModal(false)}
        />
      )}
      {isShowAccumCounterModal && (
        <ModalAccum
          headerTitle='스탬프 적립'
          bodyText='모쿠님의 스탬프 적립을 진행합니다.'
          accumNum={accumCounterNum}
          handleMinusAccumNum={() =>
            setAccumCounterNum((prev) => (prev > 0 ? prev - 1 : 0))
          }
          handlePlusAccumNum={() => setAccumCounterNum((prev) => prev + 1)}
          onClickNo={() => setIsShowAccumCounterModal(false)}
          onClickX={() => setIsShowAccumCounterModal(false)}
          onClickYes={() => setIsShowAccumCounterModal(false)}
        />
      )}
    </div>
  );
};

export default OwnerHome;
