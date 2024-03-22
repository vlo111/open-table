import React from 'react';
import { Outlet } from 'react-router-dom';

import { AuthLayout } from 'components/layouts/auth-layout';

import { ScrollToTop } from './scroll-to-top';

export const PublicRoutesAuth: React.FC = () => {
  return (
    <ScrollToTop>
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    </ScrollToTop>
  );
};
