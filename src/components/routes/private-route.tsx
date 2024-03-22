import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from 'helpers/constants';
import { useAuth } from 'hooks/use-auth';
import { MainLayout } from 'components/layouts/main-layout';

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
