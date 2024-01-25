import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeMenuFullBtn from '../../../components/Home/atoms/Button/MenuFullBtn/HomeMenuFullBtn';
import { ReactComponent as ProfileIcon } from '../../../assets/icon/profileGradation.svg';
import { ReactComponent as StoreIcon } from '../../../assets/icon/store.svg';
import { ReactComponent as CustomerIcon } from '../../../assets/icon/customer.svg';
import { ReactComponent as StampIcon } from '../../../assets/icon/stampLine.svg';
import styles from './OwnerHome.module.css';
import HomeHeader from '../../../components/Home/atoms/Header/HomeHeader';
import OwnerHomeHelloContent from '../../../components/Owner/Home/atoms/Contents/Hello/OwnerHomeHelloContent';

const OwnerHome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <HomeHeader onClickAlarmBtn={() => {}} onClickSettingBtn={() => {}} />
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
    </div>
  );
};

export default OwnerHome;
