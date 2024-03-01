import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert/ErrorAlert';
import Loading from '../components/Loading/Loading';

const Router = () => {
  const router = createBrowserRouter([
    {
      index: true,
      path: '/',
      lazy: () => import('./Home/Home'),
    },
    { path: 'test', lazy: () => import('./Test/Test') },
    {
      path: '/map',
      lazy: () => import('./Map/Map'),
    },
    {
      path: '/ad',
      children: [
        {
          path: ':adId',
          lazy: () => import('./Advertisement/Advertisement'),
        },
      ],
    },
    {
      path: '/alarm',
      lazy: () => import('./Alarm/Alarm'),
    },
    {
      path: '/setting',
      lazy: () => import('./Setting/Setting'),
    },
    {
      path: '/reward',
      children: [
        {
          path: 'history',
          lazy: () => import('./Reward/History/RewardHistory'),
        },
      ],
    },
    {
      path: '/store',
      children: [
        {
          path: ':storeId',
          lazy: () => import('./Store/Store'),
        },
        {
          path: 'search',
          children: [
            {
              index: true,
              path: '',
              lazy: () => import('./Store/Search/StoreSearch'),
            },
            {
              path: ':searchWord',
              lazy: () => import('./Store/Search/Result/StoreSearchResult'),
            },
          ],
        },
        {
          path: 'dangol',
          children: [
            {
              path: '',
              lazy: () => import('./Store/Dangol/StoreDangol'),
            },
            {
              path: 'add',
              lazy: () =>
                import('./Store/Dangol/Add/StoreDangolAdd/StoreDangolAdd'),
            },
          ],
        },
      ],
    },
    {
      path: '/stamp',
      lazy: () => import('./Stamp/Stamp'),
    },
    {
      path: '/logout',
      lazy: () => import('./Logout/Logout'),
    },
    {
      path: '/login',
      children: [
        {
          path: 'user',
          children: [
            {
              path: '',
              lazy: () => import('./Login/user/Login'),
            },
            {
              path: 'oauth',
              lazy: () => import('./Login/user/Oauth/LoginOauth'),
            },
          ],
        },
        {
          path: 'owner',
          children: [
            {
              path: '',
              lazy: () => import('./Login/owner/Login'),
            },
            {
              path: 'oauth',
              lazy: () => import('./Login/owner/Oauth/LoginOauth'),
            },
          ],
        },
      ],
    },
    {
      path: '/review/:storeId',
      lazy: () => import('./Review/Review'),
    },
    {
      path: '/gift',
      children: [
        {
          index: true,
          path: '',
          lazy: () => import('./Gift/Gift'),
        },
        {
          path: ':cafeTitle/:foodTitle/:foodPrice',
          lazy: () => import('./Gift/GiftDetail/GiftDetail'),
        },
        {
          path: 'box',
          lazy: () => import('./Gift/Box/GiftBox'),
        },
      ],
    },
    {
      path: '/coupon',
      lazy: () => import('./Coupon/Coupon'),
    },
    {
      path: '/mission',
      children: [
        {
          index: true,
          path: 'today',
          lazy: () => import('./Mission/Today/MissionToday'),
        },
        {
          path: 'map',
          lazy: () => import('./Mission/Map/MissionMap'),
        },
      ],
    },
    {
      path: '/my',
      children: [
        {
          index: true,
          path: '',
          lazy: () => import('./My/My'),
        },
        {
          path: 'profile',
          children: [
            {
              path: 'edit',
              lazy: () => import('./My/Profile/Edit/MyProfileEdit'),
            },
          ],
        },
        {
          path: 'review',
          lazy: () => import('./My/Review/MyReview'),
        },
        {
          path: 'location',
          children: [
            {
              index: true,
              path: '',
              lazy: () => import('./My/Location/MyLocation'),
            },
            {
              path: 'now',
              lazy: () => import('./My/Location/Now/MyNowLocation'),
            },
            {
              path: ':locationId',
              lazy: () => import('./My/Location/Edit/MyLocationEdit'),
            },
            {
              path: 'enrollment',
              lazy: () =>
                import('./My/Location/Enrollment/MyLocationEnrollment'),
            },
          ],
        },
      ],
    },

    {
      path: '/mylocation',
      lazy: () => import('./MyLocation/MyLocation'),
    },
    {
      path: '/locationsetting',
      children: [
        {
          path: '',
          lazy: () => import('./LocationSetting/LocationSetting'),
        },
        {
          path: 'now',
          lazy: () => import('./LocationSetting/now/LocationSettingNow'),
        },
        {
          path: 'search',
          lazy: () => import('./LocationSetting/search/LocationSettingSearch'),
        },
        {
          path: 'name',
          lazy: () => import('./LocationSetting/Name/LocationSettingName'),
        },
      ],
    },
    {
      path: '/owner',
      children: [
        {
          index: true,
          path: '',
          lazy: () => import('./Owner/Home/OwnerHome'),
        },
        {
          path: 'inform',
          children: [
            {
              index: true,
              path: '',
              lazy: () => import('./Owner/Inform/OwnerInform'),
            },
            {
              path: 'edit',
              lazy: () => import('./Owner/Inform/Edit/OwnerInformEdit'),
            },
            {
              path: 'register',
              lazy: () => import('./Owner/Inform/Register/OwnerInformRegister'),
            },
            {
              path: 'notice/register',
              lazy: () =>
                import(
                  './Owner/Inform/Notice/Register/OwnerInformNoticeRegister'
                ),
            },
          ],
        },
        {
          path: 'request',
          lazy: () => import('./Owner/Request/OwnerRequest'),
        },
        {
          path: 'coupon',
          lazy: () => import('./Owner/Coupon/OwnerCoupon'),
        },
      ],
    },
  ]);

  return (
    <ErrorBoundary FallbackComponent={ErrorAlert}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Router;
