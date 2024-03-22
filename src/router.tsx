import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ErrorNotFound } from 'pages/errors/error-not-found.tsx';
import { ErrorServer } from 'pages/errors/server-error.tsx';
import { PATHS } from 'helpers/constants.ts';
import { PublicRoutesAuth } from 'components/routes/public-route-auth.tsx';
import { SignIn } from 'pages/auth/SignIn.tsx';
import { SignUp } from 'pages/auth/SignUp.tsx';

import { PrivateRoute } from './components/routes/private-route.tsx';
import { PublicRoutes } from './components/routes/public-routes.tsx';

export const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: '*',
        element: <ErrorNotFound />,
      },
      {
        path: PATHS.ERROR_NOT_FOUND,
        element: <ErrorNotFound />,
      },
      {
        path: PATHS.ERROR_SERVER,
        element: <ErrorServer />,
      },
    ],
  },
  {
    element: <PublicRoutes />,
    children: [
      {
        path: PATHS.ROOT,
        element: <div> Home </div>,
      },
    ],
  },
  {
    element: <PublicRoutesAuth />,
    children: [
      {
        path: PATHS.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: PATHS.SIGN_UP,
        element: <SignUp />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [],
  },
]);
