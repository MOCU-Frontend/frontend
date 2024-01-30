import React from 'react';
import HomeHeader from '../../components/Home/atoms/Header/HomeHeader';
import styles from './My.module.css';
import { ReactComponent as ProfileGradationIcon } from '../../assets/icon/profileGradationBadgeMode.svg';
import { ReactComponent as CouponGradationIcon } from '../../assets/icon/couponGradation.svg';
import { ReactComponent as MyStoreGradationIcon } from '../../assets/icon/myStoreGradation.svg';
import { ReactComponent as GiftGradationIcon } from '../../assets/icon/giftGradation.svg';
import MyTopSection from '../../components/My/atoms/TopSection/MyTopSection';
import HomeBottomNavigation from '../../components/Home/atoms/BottomNavigation/HomeBottomNavigation';
import MyQuickMenu from '../../components/My/atoms/QuickMenu/MyQuickMenu';
import MyLocationContent from '../../components/My/atoms/Content/LocationContent/MyLocationContent';
import MyMainNormalHeaderWrapper from '../../components/My/atoms/Wrapper/Main/NormalHeader/MyMainNormalHeaderWrapper';
import MyMainContentSubText from '../../components/My/atoms/Text/MainContentSub/MyMainContentSubText';
import MyReviewContent from '../../components/My/atoms/Content/Review/MyReviewContent';
import MyMissionContent from '../../components/My/atoms/Content/Mission/MyMissionContent';
import MyRewardStampsContent from '../../components/My/atoms/Content/RewardStamps/MyRewardStampsContent';
import { Outlet, useNavigate } from 'react-router-dom';
type RewardData = {
  date: string;
  storeName: string;
  menu: string;
  menuNum: number;
};
const rewardDataArr: RewardData[] = [
  {
    date: '23.11.16',
    storeName: '카페 23 정릉점',
    menu: '아메리카노',
    menuNum: 1,
  },
  {
    date: '23.11.16',
    storeName: '카페 23 정릉점',
    menu: '아메리카노',
    menuNum: 1,
  },
  {
    date: '23.11.16',
    storeName: '카페 23 정릉점',
    menu: '아메리카노',
    menuNum: 1,
  },
  {
    date: '23.11.16',
    storeName: '카페 23 정릉점',
    menu: '아메리카노',
    menuNum: 1,
  },
];
const My: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <HomeHeader
        onClickAlarmBtn={() => navigate('/alarm')}
        onClickSettingBtn={() => navigate('/setting')}
      />
      <div className={styles.myTopInformBar}>
        <button
          className={styles.profileBtn}
          onClick={() => navigate('profile/edit')}
        >
          <ProfileGradationIcon width={48} height={48} />
        </button>
        <MyTopSection titleText='모쿠 님의 마이페이지' subText='@298370' />
      </div>
      <main className={styles.main}>
        <div className={styles.quickMenusWrapper}>
          <MyQuickMenu
            titleText='쿠폰'
            num={4}
            Icon={CouponGradationIcon}
            onClick={() => navigate('/coupon')}
          />
          <MyQuickMenu
            titleText='단골'
            num={2}
            Icon={MyStoreGradationIcon}
            onClick={() => {}}
          />
          <MyQuickMenu
            titleText='선물함'
            num={0}
            Icon={GiftGradationIcon}
            onClick={() => {}}
          />
        </div>
        <MyLocationContent
          locationText='서울 광진구 능동로 69'
          onClick={() => navigate('location')}
        />
        <MyMainNormalHeaderWrapper
          headerText='최근 혜택 사용 내역'
          onClick={() => {}}
          gap={12}
        >
          <MyMainContentSubText text='한 달 동안 총 5개의 혜택을 받았어요!' />
          <MyRewardStampsContent rewardDataArr={rewardDataArr} />
        </MyMainNormalHeaderWrapper>
        <MyReviewContent
          possibleReviewNum={1}
          onClick={() => navigate('review')}
        />
        <MyMissionContent
          onClick={() => navigate('/mission/map')}
          accumStampNum={8}
          wholeStampNum={10}
        />
        <div className={styles.eventBox} onClick={() => navigate('/ad')}></div>
      </main>
      <HomeBottomNavigation nowPage='my' />
      <Outlet />
    </div>
  );
};

export default My;
