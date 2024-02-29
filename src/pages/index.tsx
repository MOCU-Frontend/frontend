import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryProps } from 'react-error-boundary';
import Loading from '../components/Loading/Loading';
import ErrorAlert from '../components/ErrorAlert/ErrorAlert';

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
  const UserLogin = React.lazy(() => import('./Login/user/Login'));
  const OwnerLogin = React.lazy(() => import('./Login/owner/Login'));
  const UserLoginOauth = React.lazy(
    () => import('./Login/user/Oauth/LoginOauth')
  );
  const OwnerLoginOauth = React.lazy(
    () => import('./Login/owner/Oauth/LoginOauth')
  );
  const Logout = React.lazy(() => import('./Logout/Logout'));

  const router = createBrowserRouter([
    {
      index: true,
      path: '/',
      element: (
        <ErrorBoundary FallbackComponent={ErrorAlert}>
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: '/map',
      element: (
        <ErrorBoundary FallbackComponent={ErrorAlert}>
          <Suspense fallback={<Loading />}>
            <Map />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: '/ad',
      children: [
        {
          path: ':adId',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <Advertisement />
              </Suspense>
            </ErrorBoundary>
          ),
        },
      ],
    },
    {
      path: '/alarm',
      element: (
        <ErrorBoundary FallbackComponent={ErrorAlert}>
          <Suspense fallback={<Loading />}>
            <Alarm />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: '/setting',
      element: (
        <ErrorBoundary FallbackComponent={ErrorAlert}>
          <Suspense fallback={<Loading />}>
            <Setting />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: '/reward',
      children: [
        {
          path: 'history',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <RewardHistory />
              </Suspense>
            </ErrorBoundary>
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
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <Store />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: 'search',
          children: [
            {
              index: true,
              path: '',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <StoreSearch />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: ':searchWord',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <StoreSearchResult />
                  </Suspense>
                </ErrorBoundary>
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
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <StoreDangol />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: 'add',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <StoreDangolAdd />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
          ],
        },
      ],
    },
    {
      path: '/stamp',
      element: (
        <ErrorBoundary FallbackComponent={ErrorAlert}>
          <Suspense fallback={<Loading />}>
            <Stamp />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: '/logout',
      element: (
        <ErrorBoundary FallbackComponent={ErrorAlert}>
          <Suspense fallback={<Loading />}>
            <Logout />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: '/login',
      children: [
        {
          path: 'user',
          children: [
            {
              path: '',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <UserLogin />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: 'oauth',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <UserLoginOauth />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
          ],
        },
        {
          path: 'owner',
          children: [
            {
              path: '',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <OwnerLogin />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: 'oauth',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <OwnerLoginOauth />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
          ],
        },
      ],
    },
    {
      path: '/review/:storeId',
      element: (
        <ErrorBoundary FallbackComponent={ErrorAlert}>
          <Suspense fallback={<Loading />}>
            <Review />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: '/gift',
      children: [
        {
          index: true,
          path: '',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <Gift />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: ':cafeTitle/:foodTitle/:foodPrice',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <GiftDetail />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: 'box',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <GiftBox />
              </Suspense>
            </ErrorBoundary>
          ),
        },
      ],
    },
    {
      path: '/coupon',
      element: (
        <ErrorBoundary FallbackComponent={ErrorAlert}>
          <Suspense fallback={<Loading />}>
            <Coupon />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: '/mission',
      children: [
        {
          index: true,
          path: 'today',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <MissionToday />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: 'map',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <MissionMap />
              </Suspense>
            </ErrorBoundary>
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
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <My />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: 'profile',
          children: [
            {
              path: 'edit',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <MyProfileEdit />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
          ],
        },
        {
          path: 'review',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <MyReview />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: 'location',
          children: [
            {
              index: true,
              path: '',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <MyLocation />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: 'now',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <MyNowLocation />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: ':locationId',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <MyLocationEdit />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: 'enrollment',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <MyLocationEnrollment />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
          ],
        },
      ],
    },

    {
      path: '/mylocation',
      element: (
        <ErrorBoundary FallbackComponent={ErrorAlert}>
          <Suspense fallback={<Loading />}>
            <MyLocationPage />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: '/locationsetting',
      children: [
        {
          path: '',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <LocationSetting />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: 'now',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <LocationSettingNow />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: 'search',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <LocationSettingSearch />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: 'name',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <LocationSettingName />
              </Suspense>
            </ErrorBoundary>
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
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <OwnerHome />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: 'inform',
          children: [
            {
              index: true,
              path: '',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <OwnerInform />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: 'edit',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <OwnerInformEdit />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: 'register',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <OwnerInformRegister />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: 'notice/register',
              element: (
                <ErrorBoundary FallbackComponent={ErrorAlert}>
                  <Suspense fallback={<Loading />}>
                    <OwnerInformNoticeRegister />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
          ],
        },
        {
          path: 'request',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <OwnerRequest />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: 'coupon',
          element: (
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <Suspense fallback={<Loading />}>
                <OwnerCoupon />
              </Suspense>
            </ErrorBoundary>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
