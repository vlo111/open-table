import { MenuProps } from 'antd';

export const PATHS = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  ERROR_SERVER: '/error/server',
  ERROR_NOT_FOUND: '/error/not-found',
};

export const COLORS = {
  MAIN_MAROON: '#B02E59',
  DARK_GRAY: '#101C23',
  GRAY: '#545B5B',
  GRAY_300: '#989D9D',
  GRAY_200: '#9AA9B3',
  GRAY_100: '#EBF0F3',
  BG: '#F5F7F8',
};

export const AUTH_KEYS = {
  USER: 'user',
  TOKEN: 'token',
  REFRESH_TOKEN: 'r_token',
};

export const leftMenuItems: MenuProps['items'] = [
  {
    label: 'Types',
    key: PATHS.ROOT,
  },
  {
    label: 'Service',
    key: PATHS.ROOT,
  },
  {
    label: 'Food Category',
    key: PATHS.ROOT,
  },
];
