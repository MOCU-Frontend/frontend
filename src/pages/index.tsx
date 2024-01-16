import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Home/Home';
import Map from './Map/Map';
import StoreSearch from './StoreSearch/StoreSearch';
import SearchResult from './SearchResult/SearchResult';
import My from './My/My';
import MyLocation from './My/Location/MyLocation';
import MyNowLocation from './My/Location/Now/MyNowLocation';
import MyLocationEdit from './My/Location/Edit/MyLocationEdit';
import MyLocationEnrollment from './My/Location/Enrollment/MyLocationEnrollment';
import Present from './Present/Present';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
    {
      path: '/home',
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
      path: '/present',
      element: <Present />,
    },
    {
      path: '/present/:searchWord',
      element: <Present />,
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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
