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
      lazy: () => import('./user/main/Home/Home'),
    },
    {
      path: '/map',
      lazy: () => import('./user/main/Map/Map'),
    },
    {
      path: '/ad',
      children: [
        {
          path: ':adId',
          lazy: () => import('./user/etc/Advertisement/Advertisement'),
        },
      ],
    },
    {
      path: '/alarm',
      lazy: () => import('./user/etc/Alarm/Alarm'),
    },
    {
      path: '/setting',
      lazy: () => import('./user/etc/Setting/Setting'),
    },
    {
      path: '/reward',
      children: [
        {
          path: 'history',
          lazy: () => import('./user/etc/Reward/History/RewardHistory'),
        },
      ],
    },
    {
      path: '/store',
      children: [
        {
          path: ':storeId',
          lazy: () => import('./user/main/Store/Store'),
        },
        {
          path: 'search',
          children: [
            {
              index: true,
              path: '',
              lazy: () => import('./user/main/Store/Search/StoreSearch'),
            },
            {
              path: ':searchWord',
              lazy: () =>
                import('./user/main/Store/Search/Result/StoreSearchResult'),
            },
          ],
        },
        {
          path: 'dangol',
          children: [
            {
              path: '',
              lazy: () => import('./user/main/Store/Dangol/StoreDangol'),
            },
            {
              path: 'add',
              lazy: () =>
                import(
                  './user/main/Store/Dangol/Add/StoreDangolAdd/StoreDangolAdd'
                ),
            },
          ],
        },
      ],
    },
    {
      path: '/stamp',
      lazy: () => import('./user/main/Stamp/Stamp'),
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
      lazy: () => import('./user/etc/Review/Review'),
    },
    {
      path: '/gift',
      children: [
        {
          index: true,
          path: '',
          lazy: () => import('./user/main/Gift/Gift'),
        },
        {
          path: ':cafeTitle/:foodTitle/:foodPrice',
          lazy: () => import('./user/main/Gift/GiftDetail/GiftDetail'),
        },
        {
          path: 'box',
          lazy: () => import('./user/main/Gift/Box/GiftBox'),
        },
      ],
    },
    {
      path: '/coupon',
      lazy: () => import('./user/main/Coupon/Coupon'),
    },
    {
      path: '/mission',
      children: [
        {
          index: true,
          path: 'today',
          lazy: () => import('./user/main/Mission/Today/MissionToday'),
        },
        {
          path: 'map',
          lazy: () => import('./user/main/Mission/Map/MissionMap'),
        },
      ],
    },
    {
      path: '/my',
      children: [
        {
          index: true,
          path: '',
          lazy: () => import('./user/main/My/My'),
        },
        {
          path: 'profile',
          children: [
            {
              path: 'edit',
              lazy: () => import('./user/main/My/Profile/Edit/MyProfileEdit'),
            },
          ],
        },
        {
          path: 'review',
          lazy: () => import('./user/main/My/Review/MyReview'),
        },
        {
          path: 'location',
          children: [
            {
              index: true,
              path: '',
              lazy: () => import('./user/main/My/Location/MyLocation'),
            },
            {
              path: 'now',
              lazy: () => import('./user/main/My/Location/Now/MyNowLocation'),
            },
            {
              path: ':locationId',
              lazy: () => import('./user/main/My/Location/Edit/MyLocationEdit'),
            },
            {
              path: 'enrollment',
              lazy: () =>
                import(
                  './user/main/My/Location/Enrollment/MyLocationEnrollment'
                ),
            },
          ],
        },
      ],
    },

    {
      path: '/mylocation',
      lazy: () => import('./user/etc/MyLocation/MyLocation'),
    },
    {
      path: '/locationsetting',
      children: [
        {
          path: '',
          lazy: () => import('./user/etc/LocationSetting/LocationSetting'),
        },
        {
          path: 'now',
          lazy: () =>
            import('./user/etc/LocationSetting/Now/LocationSettingNow'),
        },
        {
          path: 'search',
          lazy: () =>
            import('./user/etc/LocationSetting/Search/LocationSettingSearch'),
        },
        {
          path: 'name',
          lazy: () =>
            import('./user/etc/LocationSetting/Name/LocationSettingName'),
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
