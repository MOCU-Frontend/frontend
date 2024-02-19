import React, { useState } from 'react';
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
import SlideMenuAdBodyTab from '../../components/SlideMenu/atoms/BodyTab/Ad/SlideMenuAdBodyTab';
import HomeAdSlideStatus from '../../components/Home/atoms/SlideStatus/Ad/HomeAdSlideStatus';
import useStore from '../../store/useStore';
import { fetchMyPageData } from '../../apis/my/fetchMyPageData';
import {
  MyPageResponse,
  RecentCouponUsage,
} from '../../store/Type/My/myPageResponse';
import { useQuery } from '@tanstack/react-query';

const My: React.FC = () => {
  // fetchMyPageData
  const userId = useStore((state) => state.userId);
  const {
    data: MyPageData,
    isLoading: isMyPageDataLoading,
    isError: isMyPageDataError,
  } = useQuery({
    queryKey: ['MyPage'],

    // userId 임시
    queryFn: () => fetchMyPageData(userId || ''),
    enabled: !!userId,
  });

  const navigate = useNavigate();

  const [adItemArr, setAdItemArr] = useState([
    { adId: 1, isChecked: true },
    { adId: 2, isChecked: false },
    { adId: 3, isChecked: false },
    { adId: 4, isChecked: false },
  ]);
  const handleCheckedDataIndex = (prevIndex: number, newIndex: number) => {
    if (!adItemArr) throw new Error('no reviewArr!!');
    if (!adItemArr[prevIndex]) throw new Error('invalid prevIndex!!');
    if (!adItemArr[newIndex]) throw new Error('invalid newIndex!!');
    setAdItemArr((prevArr) => {
      if (!prevArr) throw new Error('no prevArr!!');
      const copiedArr = [...prevArr];
      copiedArr[prevIndex].isChecked = false;
      copiedArr[newIndex].isChecked = true;
      return copiedArr;
    });
  };
  console.log(MyPageData && MyPageData.result.missionStampCount);

  const nowUserLocation = useStore((state) => state.nowUserLocation);
  return (
    <div className={styles.wholeWrapper}>
      <HomeHeader
        onClickAlarmBtn={() => navigate('/alarm')}
        onClickSettingBtn={() => navigate('/setting')}
        alarmNum={0}
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
          {MyPageData !== undefined && (
            <>
              <MyQuickMenu
                titleText='쿠폰'
                num={MyPageData.result.usableCoupon}
                Icon={CouponGradationIcon}
                onClick={() => navigate('/coupon')}
              />
              <MyQuickMenu
                titleText='단골'
                num={MyPageData.result.availableFavoriteCount}
                Icon={MyStoreGradationIcon}
                onClick={() => navigate('/store/dangol')}
              />
              <MyQuickMenu
                titleText='선물함'
                num={0}
                Icon={GiftGradationIcon}
                onClick={() => navigate('/gift/box')}
              />
            </>
          )}
        </div>
        <MyLocationContent
          locationText={nowUserLocation ? nowUserLocation.address : '위치 없음'}
          onClick={() => navigate('location')}
        />
        <MyMainNormalHeaderWrapper
          headerText='최근 혜택 사용 내역'
          onClick={() => navigate('/reward/history')}
          gap={12}
        >
          {MyPageData && (
            <>
              <MyMainContentSubText
                text={`한 달 동안 총 ${MyPageData.result.recentCouponUsage.length}개의 혜택을 받았어요!`}
              />

              <MyRewardStampsContent
                rewardDataArr={MyPageData.result.recentCouponUsage}
              />
            </>
          )}
        </MyMainNormalHeaderWrapper>
        {MyPageData && (
          <MyReviewContent
            possibleReviewNum={MyPageData.result.availableReviewCount}
            onClick={() => navigate('review')}
          />
        )}
        {MyPageData && (
          <MyMissionContent
            onClick={() => navigate('/mission/map')}
            accumStampNum={MyPageData.result.missionStampCount}
            wholeStampNum={30}
          />
        )}

        <div className={styles.bodyTabWrapper}>
          <SlideMenuAdBodyTab
            menuItemDataArr={adItemArr}
            handleCheckedDataIndex={handleCheckedDataIndex}
          />
          <div className={styles.statusWrapper}>
            <HomeAdSlideStatus
              handleCheckedDataIndex={handleCheckedDataIndex}
              dataArr={adItemArr}
            />
          </div>
        </div>
      </main>
      <HomeBottomNavigation nowPage='my' />
      <Outlet />
    </div>
  );
};

export default My;
