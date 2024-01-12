import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Home/Home';
import Map from './Map/Map';
import StoreSearch from './StoreSearch/StoreSearch';
import My from './My/My';
import MyLocation from './My/Location/MyLocation';
import MyNowLocation from './My/Location/Now/MyNowLocation';

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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
