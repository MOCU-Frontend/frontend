import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Home/Home';
import Map from './Map/Map';
import StoreSearch from './StoreSearch/StoreSearch';
<<<<<<< HEAD
import SearchResult from './SearchResult/SearchResult';
=======
import My from './My/My';
>>>>>>> dev

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
<<<<<<< HEAD
      path: '/storesearch/:searchWord',
      element: <SearchResult />,
=======
      path: '/my',
      element: <My />,
>>>>>>> dev
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
