import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import Map from './Map/Map';
import StoreSearch from './Store/Search/StoreSearch';
import StoreSearchResult from './Store/Search/Result/StoreSearchResult';
import Stamp from './Stamp/Stamp';
import My from './My/My';
import MyLocation from './My/Location/MyLocation';
import MyLocationPage from './MyLocation/MyLocation';
import MyNowLocation from './My/Location/Now/MyNowLocation';
import MyLocationEdit from './My/Location/Edit/MyLocationEdit';
import MyLocationEnrollment from './My/Location/Enrollment/MyLocationEnrollment';
import Store from './Store/Store';
import MissionToday from './Mission/Today/MissionToday';
import MissionMap from './Mission/Map/MissionMap';
import Review from './Review/Review';
import Coupon from './Coupon/Coupon';
import MyReview from './My/Review/MyReview';
import OwnerHome from './Owner/Home/OwnerHome';
import OwnerInform from './Owner/Inform/OwnerInform';
import OwnerRequest from './Owner/Request/OwnerRequest';
import OwnerCoupon from './Owner/Coupon/OwnerCoupon';
import OwnerInformEdit from './Owner/Inform/Edit/OwnerInformEdit';
import OwnerInformRegister from './Owner/Inform/Register/OwnerInformRegister';
import OwnerInformNoticeRegister from './Owner/Inform/Notice/Register/OwnerInformNoticeRegister';
import Gift from './Gift/Gift';
import Advertisement from './Advertisement/Advertisement';
import Alarm from './Alarm/Alarm';
import Setting from './Setting/Setting';
import MyProfileEdit from './My/Profile/Edit/MyProfileEdit';
import GiftBox from './Gift/Box/GiftBox';
import StoreDangol from './Store/Dangol/StoreDangol';
import RewardHistory from './Reward/History/RewardHistory';
import LocationSetting from './LocationSetting/LocationSetting';
import LocationSettingNow from './LocationSetting/now/LocationSettingNow';
import LocationSettingSearch from './LocationSetting/search/LocationSettingSearch';

const Router = () => {
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
        { path: 'dangol', element: <StoreDangol /> },
      ],
    },
    {
      path: '/stamp',
      element: <Stamp />,
    },
    {
      path: '/review/:storeId',
      element: <Review />,
    },
    {
      path: '/gift',
      children: [
        { index: true, path: '', element: <Gift /> },
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
