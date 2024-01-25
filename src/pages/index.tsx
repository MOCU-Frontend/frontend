import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Home/Home';
import Map from './Map/Map';
import StoreSearch from './StoreSearch/StoreSearch';
import SearchResult from './SearchResult/SearchResult';
import Stamp from './Stamp/Stamp';
import My from './My/My';
import MyLocation from './My/Location/MyLocation';
import MyLocationPage from './MyLocation/MyLocation';
import MyNowLocation from './My/Location/Now/MyNowLocation';
import MyLocationEdit from './My/Location/Edit/MyLocationEdit';
import MyLocationEnrollment from './My/Location/Enrollment/MyLocationEnrollment';
import Store from './Store/Store';
import Present from './Present/Present';
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

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/map',
      element: <Map />,
    },
    {
      path: '/storesearch',
      element: <StoreSearch />,
    },
    {
      path: '/storesearch/:searchWord',
      element: <SearchResult />,
    },
    {
      path: '/stamp',
      element: <Stamp />,
    },
    {
      path: '/store/:storeId',
      element: <Store />,
    },
    {
      path: '/review/:storeId',
      element: <Review />,
    },
    {
      path: '/present',
      element: <Present />,
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
