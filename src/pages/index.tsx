import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const Router = () => {
  // 동적 import
  const Home = React.lazy(() => import('./Home/Home'));
  const Map = React.lazy(() => import('./Map/Map'));
  const StoreSearch = React.lazy(() => import('./Store/Search/StoreSearch'));
  const StoreSearchResult = React.lazy(
    () => import('./Store/Search/Result/StoreSearchResult')
  );
  const Stamp = React.lazy(() => import('./Stamp/Stamp'));
  const My = React.lazy(() => import('./My/My'));
  const MyLocation = React.lazy(() => import('./My/Location/MyLocation'));
  const MyLocationPage = React.lazy(() => import('./MyLocation/MyLocation'));
  const MyNowLocation = React.lazy(
    () => import('./My/Location/Now/MyNowLocation')
  );
  const MyLocationEdit = React.lazy(
    () => import('./My/Location/Edit/MyLocationEdit')
  );
  const MyLocationEnrollment = React.lazy(
    () => import('./My/Location/Enrollment/MyLocationEnrollment')
  );
  const Store = React.lazy(() => import('./Store/Store'));
  const MissionToday = React.lazy(() => import('./Mission/Today/MissionToday'));
  const MissionMap = React.lazy(() => import('./Mission/Map/MissionMap'));
  const Review = React.lazy(() => import('./Review/Review'));
  const Coupon = React.lazy(() => import('./Coupon/Coupon'));
  const MyReview = React.lazy(() => import('./My/Review/MyReview'));
  const OwnerHome = React.lazy(() => import('./Owner/Home/OwnerHome'));
  const OwnerInform = React.lazy(() => import('./Owner/Inform/OwnerInform'));
  const OwnerRequest = React.lazy(() => import('./Owner/Request/OwnerRequest'));
  const OwnerCoupon = React.lazy(() => import('./Owner/Coupon/OwnerCoupon'));
  const OwnerInformEdit = React.lazy(
    () => import('./Owner/Inform/Edit/OwnerInformEdit')
  );
  const OwnerInformRegister = React.lazy(
    () => import('./Owner/Inform/Register/OwnerInformRegister')
  );
  const OwnerInformNoticeRegister = React.lazy(
    () => import('./Owner/Inform/Notice/Register/OwnerInformNoticeRegister')
  );
  const Gift = React.lazy(() => import('./Gift/Gift'));
  const GiftDetail = React.lazy(() => import('./Gift/GiftDetail/GiftDetail'));
  const Advertisement = React.lazy(
    () => import('./Advertisement/Advertisement')
  );
  const Alarm = React.lazy(() => import('./Alarm/Alarm'));
  const Setting = React.lazy(() => import('./Setting/Setting'));
  const MyProfileEdit = React.lazy(
    () => import('./My/Profile/Edit/MyProfileEdit')
  );
  const GiftBox = React.lazy(() => import('./Gift/Box/GiftBox'));
  const StoreDangol = React.lazy(() => import('./Store/Dangol/StoreDangol'));
  const RewardHistory = React.lazy(
    () => import('./Reward/History/RewardHistory')
  );
  const LocationSetting = React.lazy(
    () => import('./LocationSetting/LocationSetting')
  );
  const LocationSettingNow = React.lazy(
    () => import('./LocationSetting/now/LocationSettingNow')
  );
  const LocationSettingSearch = React.lazy(
    () => import('./LocationSetting/search/LocationSettingSearch')
  );
  const LocationSettingName = React.lazy(
    () => import('./LocationSetting/Name/LocationSettingName')
  );
  const StoreDangolAdd = React.lazy(
    () => import('./Store/Dangol/Add/StoreDangolAdd/StoreDangolAdd')
  );
  const Login = React.lazy(() => import('./Login/Login'));
  const LoginOauth = React.lazy(() => import('./Login/Oauth/LoginOauth'));
  const Logout = React.lazy(() => import('./Logout/Logout'));

  const router = createBrowserRouter([
    {
      index: true,
      path: '/',
      element: (
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: '/map',
      element: (
        <Suspense fallback={<Loading />}>
          <Map />
        </Suspense>
      ),
    },
    {
      path: '/ad',
      children: [
        {
          path: ':adId',
          element: (
            <Suspense fallback={<Loading />}>
              <Advertisement />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: '/alarm',
      element: (
        <Suspense fallback={<Loading />}>
          <Alarm />
        </Suspense>
      ),
    },
    {
      path: '/setting',
      element: (
        <Suspense fallback={<Loading />}>
          <Setting />
        </Suspense>
      ),
    },
    {
      path: '/reward',
      children: [
        {
          path: 'history',
          element: (
            <Suspense fallback={<Loading />}>
              <RewardHistory />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: '/store',
      children: [
        {
          path: ':storeId',
          element: (
            <Suspense fallback={<Loading />}>
              <Store />
            </Suspense>
          ),
        },
        {
          path: 'search',
          children: [
            {
              index: true,
              path: '',
              element: (
                <Suspense fallback={<Loading />}>
                  <StoreSearch />
                </Suspense>
              ),
            },
            {
              path: ':searchWord',
              element: (
                <Suspense fallback={<Loading />}>
                  <StoreSearchResult />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: 'dangol',
          children: [
            {
              path: '',
              element: (
                <Suspense fallback={<Loading />}>
                  <StoreDangol />
                </Suspense>
              ),
            },
            {
              path: 'add',
              element: (
                <Suspense fallback={<Loading />}>
                  <StoreDangolAdd />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: '/stamp',
      element: (
        <Suspense fallback={<Loading />}>
          <Stamp />
        </Suspense>
      ),
    },
    {
      path: '/logout',
      element: (
        <Suspense fallback={<Loading />}>
          <Logout />
        </Suspense>
      ),
    },
    {
      path: '/login',
      children: [
        {
          path: '',
          element: (
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: 'oauth',
          element: (
            <Suspense fallback={<Loading />}>
              <LoginOauth />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: '/review/:storeId',
      element: (
        <Suspense fallback={<Loading />}>
          <Review />
        </Suspense>
      ),
    },
    {
      path: '/gift',
      children: [
        {
          index: true,
          path: '',
          element: (
            <Suspense fallback={<Loading />}>
              <Gift />
            </Suspense>
          ),
        },
        {
          path: ':cafeTitle/:foodTitle/:foodPrice',
          element: (
            <Suspense fallback={<Loading />}>
              <GiftDetail />
            </Suspense>
          ),
        },
        {
          path: 'box',
          element: (
            <Suspense fallback={<Loading />}>
              <GiftBox />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: '/coupon',
      element: (
        <Suspense fallback={<Loading />}>
          <Coupon />
        </Suspense>
      ),
    },
    {
      path: '/mission',
      children: [
        {
          index: true,
          path: 'today',
          element: (
            <Suspense fallback={<Loading />}>
              <MissionToday />
            </Suspense>
          ),
        },
        {
          path: 'map',
          element: (
            <Suspense fallback={<Loading />}>
              <MissionMap />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: '/my',
      children: [
        {
          index: true,
          path: '',
          element: (
            <Suspense fallback={<Loading />}>
              <My />
            </Suspense>
          ),
        },
        {
          path: 'profile',
          children: [
            {
              path: 'edit',
              element: (
                <Suspense fallback={<Loading />}>
                  <MyProfileEdit />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: 'review',
          element: (
            <Suspense fallback={<Loading />}>
              <MyReview />
            </Suspense>
          ),
        },
        {
          path: 'location',
          children: [
            {
              index: true,
              path: '',
              element: (
                <Suspense fallback={<Loading />}>
                  <MyLocation />
                </Suspense>
              ),
            },
            {
              path: 'now',
              element: (
                <Suspense fallback={<Loading />}>
                  <MyNowLocation />
                </Suspense>
              ),
            },
            {
              path: ':locationId',
              element: (
                <Suspense fallback={<Loading />}>
                  <MyLocationEdit />
                </Suspense>
              ),
            },
            {
              path: 'enrollment',
              element: (
                <Suspense fallback={<Loading />}>
                  <MyLocationEnrollment />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },

    {
      path: '/mylocation',
      element: (
        <Suspense fallback={<Loading />}>
          <MyLocationPage />
        </Suspense>
      ),
    },
    {
      path: '/locationsetting',
      children: [
        {
          path: '',
          element: (
            <Suspense fallback={<Loading />}>
              <LocationSetting />
            </Suspense>
          ),
        },
        {
          path: 'now',
          element: (
            <Suspense fallback={<Loading />}>
              <LocationSettingNow />
            </Suspense>
          ),
        },
        {
          path: 'search',
          element: (
            <Suspense fallback={<Loading />}>
              <LocationSettingSearch />
            </Suspense>
          ),
        },
        {
          path: 'name',
          element: (
            <Suspense fallback={<Loading />}>
              <LocationSettingName />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: '/owner',
      children: [
        {
          index: true,
          path: '',
          element: (
            <Suspense fallback={<Loading />}>
              <OwnerHome />
            </Suspense>
          ),
        },
        {
          path: 'inform',
          children: [
            {
              index: true,
              path: '',
              element: (
                <Suspense fallback={<Loading />}>
                  <OwnerInform />
                </Suspense>
              ),
            },
            {
              path: 'edit',
              element: (
                <Suspense fallback={<Loading />}>
                  <OwnerInformEdit />
                </Suspense>
              ),
            },
            {
              path: 'register',
              element: (
                <Suspense fallback={<Loading />}>
                  <OwnerInformRegister />
                </Suspense>
              ),
            },
            {
              path: 'notice/register',
              element: (
                <Suspense fallback={<Loading />}>
                  <OwnerInformNoticeRegister />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: 'request',
          element: (
            <Suspense fallback={<Loading />}>
              <OwnerRequest />
            </Suspense>
          ),
        },
        {
          path: 'coupon',
          element: (
            <Suspense fallback={<Loading />}>
              <OwnerCoupon />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
