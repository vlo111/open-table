import { Navigate, Outlet } from "react-router-dom";

import { PATHS } from "helpers/constants";
import { useAuth } from "../../hooks/use-auth.ts";
import { MainLayout } from "../layouts/main-layout.tsx";

export const PrivateRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={PATHS.SIGN_IN} />;
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
