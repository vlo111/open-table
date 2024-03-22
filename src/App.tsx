import './index.css';
import { antTheme } from 'helpers/ant-theme';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';

import { router } from './router';
import { AuthProvider } from './context/auth/auth-provider.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => (
  <ConfigProvider theme={antTheme}>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </ConfigProvider>
);
