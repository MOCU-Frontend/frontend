import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
      element: <Home />,
    },
    {
      path: '/map',
      element: <Map />,
    },
    {
      path: '/ad',
      children: [
        {
          path: ':adId',
          element: <Advertisement />,
        },
      ],
    },
    {
      path: '/alarm',
      element: <Alarm />,
    },
    {
      path: '/setting',
      element: <Setting />,
    },
    {
      path: '/reward',
      children: [{ path: 'history', element: <RewardHistory /> }],
    },
    {
      path: '/store',
      children: [
        {
          path: ':storeId',
          element: <Store />,
        },
        {
          path: 'search',
          children: [
            {
              index: true,
              path: '',
              element: <StoreSearch />,
            },
            {
              path: ':searchWord',
              element: <StoreSearchResult />,
            },
          ],
        },
        {
          path: 'dangol',
          children: [
            { path: '', element: <StoreDangol /> },
            { path: 'add', element: <StoreDangolAdd /> },
          ],
        },
      ],
    },
    {
      path: '/stamp',
      element: <Stamp />,
    },
    {
      path: '/logout',
      element: <Logout />,
    },
    {
      path: '/login',
      children: [
        { path: '', element: <Login /> },
        { path: 'oauth', element: <LoginOauth /> },
      ],
    },
    {
      path: '/review/:storeId',
      element: <Review />,
    },
    {
      path: '/gift',
      children: [
        { index: true, path: '', element: <Gift /> },
        {
          path: ':cafeTitle/:foodTitle/:foodPrice',
          element: <GiftDetail />,
        },
        { path: 'box', element: <GiftBox /> },
      ],
    },
    {
      path: '/coupon',
      element: <Coupon />,
    },
    {
      path: '/mission',
      children: [
        {
          index: true,
          path: 'today',
          element: <MissionToday />,
        },
        {
          path: 'map',
          element: <MissionMap />,
        },
      ],
    },
    {
      path: '/my',
      children: [
        {
          index: true,
          path: '',
          element: <My />,
        },
        {
          path: 'profile',
          children: [{ path: 'edit', element: <MyProfileEdit /> }],
        },
        {
          path: 'review',
          element: <MyReview />,
        },
        {
          path: 'location',
          children: [
            {
              index: true,
              path: '',
              element: <MyLocation />,
            },
            {
              path: 'now',
              element: <MyNowLocation />,
            },
            {
              path: ':locationId',
              element: <MyLocationEdit />,
            },
            {
              path: 'enrollment',
              element: <MyLocationEnrollment />,
            },
          ],
        },
      ],
    },
    {
      path: '/mylocation',
      element: <MyLocationPage />,
    },
    {
      path: '/locationsetting',
      children: [
        { path: '', element: <LocationSetting /> },
        { path: 'now', element: <LocationSettingNow /> },
        { path: 'search', element: <LocationSettingSearch /> },
        { path: 'name', element: <LocationSettingName /> },
      ],
    },
    {
      path: '/owner',
      children: [
        {
          index: true,
          path: '',
          element: <OwnerHome />,
        },
        {
          path: 'inform',
          children: [
            { index: true, path: '', element: <OwnerInform /> },
            { path: 'edit', element: <OwnerInformEdit /> },
            { path: 'register', element: <OwnerInformRegister /> },
            { path: 'notice/register', element: <OwnerInformNoticeRegister /> },
          ],
        },
        {
          path: 'request',
          element: <OwnerRequest />,
        },
        {
          path: 'coupon',
          element: <OwnerCoupon />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
