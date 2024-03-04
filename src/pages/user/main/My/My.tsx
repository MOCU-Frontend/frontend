import React, { useState } from 'react';
import HomeHeader from '../../../../components/Home/atoms/Header/HomeHeader';
import styles from './My.module.css';
import { ReactComponent as ProfileGradationIcon } from '../../../../assets/icon/profileGradationBadgeMode.svg';
import { ReactComponent as CouponGradationIcon } from '../../../../assets/icon/couponGradation.svg';
import { ReactComponent as MyStoreGradationIcon } from '../../../../assets/icon/myStoreGradation.svg';
import { ReactComponent as GiftGradationIcon } from '../../../../assets/icon/giftGradation.svg';
import MyTopSection from '../../../../components/My/atoms/TopSection/MyTopSection';
import HomeBottomNavigation from '../../../../components/Home/atoms/BottomNavigation/HomeBottomNavigation';
import MyQuickMenu from '../../../../components/My/atoms/QuickMenu/MyQuickMenu';
import MyLocationContent from '../../../../components/My/atoms/Content/LocationContent/MyLocationContent';
import MyMainNormalHeaderWrapper from '../../../../components/My/atoms/Wrapper/Main/NormalHeader/MyMainNormalHeaderWrapper';
import MyMainContentSubText from '../../../../components/My/atoms/Text/MainContentSub/MyMainContentSubText';
import MyReviewContent from '../../../../components/My/atoms/Content/Review/MyReviewContent';
import MyMissionContent from '../../../../components/My/atoms/Content/Mission/MyMissionContent';
import MyRewardStampsContent from '../../../../components/My/atoms/Content/RewardStamps/MyRewardStampsContent';
import { Outlet, useNavigate } from 'react-router-dom';
import SlideMenuAdBodyTab from '../../../../components/SlideMenu/atoms/BodyTab/Ad/SlideMenuAdBodyTab';
import HomeAdSlideStatus from '../../../../components/Home/atoms/SlideStatus/Ad/HomeAdSlideStatus';
import useStore from '../../../../store/useStore';
import { fetchMyPageData } from '../../../../apis/my/fetchMyPageData';
import { useQuery } from '@tanstack/react-query';
import { useCarouselData } from '../../../../hooks/useCarouselData';
import {
  AdItemData,
  adItemDataArr,
} from '../../../../store/data/advertisement';
import { useMyQuery } from '../../../../apis/my/useMyQuery';

const My: React.FC = () => {
  const userId = useStore((state) => state.userId);
  const {
    myDataQuery: { data: MyPageData },
  } = useMyQuery(userId);

  const navigate = useNavigate();

  const { carouselItemArr: adItemArr, handleCheckedDataIndex } =
    useCarouselData<AdItemData>(adItemDataArr);

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
          <>
            <MyQuickMenu
              titleText='쿠폰'
              num={MyPageData ? MyPageData.result.usableCoupon : 0}
              Icon={CouponGradationIcon}
              onClick={() => navigate('/coupon')}
            />
            <MyQuickMenu
              titleText='단골'
              num={MyPageData ? MyPageData.result.availableFavoriteCount : 0}
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
        </div>
        <MyLocationContent
          locationText={nowUserLocation ? nowUserLocation.address : '위치 없음'}
          onClick={() => navigate('location')}
        />
        <MyMainNormalHeaderWrapper
          headerText='최근 혜택 사용 내역 '
          onClick={() => navigate('/reward/history')}
          gap={12}
        >
          <>
            <MyMainContentSubText
              text={`한 달 동안 총 ${
                MyPageData ? MyPageData.result.recentCouponUsage.length : 0
              }개의 혜택을 받았어요!`}
            />

            <MyRewardStampsContent
              rewardDataArr={
                MyPageData ? MyPageData.result.recentCouponUsage : []
              }
            />
          </>
        </MyMainNormalHeaderWrapper>

        <MyReviewContent
          possibleReviewNum={
            MyPageData ? MyPageData.result.availableReviewCount : 0
          }
          onClick={() => navigate('review')}
        />

        <MyMissionContent
          onClick={() => navigate('/mission/map')}
          accumStampNum={MyPageData ? MyPageData.result.missionStampCount : 0}
          wholeStampNum={30}
        />

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

export { My as Component };
