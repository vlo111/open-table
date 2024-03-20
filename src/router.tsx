import { Outlet, createBrowserRouter } from "react-router-dom";
import { ErrorNotFound } from "pages/errors/error-not-found.tsx";
import { ErrorServer } from "pages/errors/server-error.tsx";
import { PATHS } from "helpers/constants.ts";
import { PublicRoutes } from "./components/routes/public-routes.tsx";
import { PrivateRoute } from "./components/routes/private-route.tsx";

export const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: "*",
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
        element: <div>Sign In</div>,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [],
  },
]);
