import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Home/Home';
import Map from './Map/Map';
import StoreSearch from './StoreSearch/StoreSearch';
import SearchResult from './SearchResult/SearchResult';
import My from './My/My';
import MyLocation from './My/Location/MyLocation';
import Mission1 from './Mission1/Mission1';
import Mission2 from './Mission2/Mission2';
import MyNowLocation from './My/Location/Now/MyNowLocation';
import MyLocationEdit from './My/Location/Edit/MyLocationEdit';

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
      path: '/mission/1',
      element: <Mission1 />,
    },
    {
      path: '/mission/2',
      element: <Mission2 />,
    },
    {
      path: '/my',
      element: <My />,
      children: [
        {
          path: 'location',
          element: <MyLocation />,
        },
      ],
    },
    {
      path: '/my/location/now',
      element: <MyNowLocation />,
    },
    {
      path: '/my/location/:locationId',
      element: <MyLocationEdit />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
