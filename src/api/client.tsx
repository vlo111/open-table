/* eslint-disable no-console */
import axios, { InternalAxiosRequestConfig } from 'axios';
import { AUTH_KEYS, PATHS } from 'helpers/constants';

interface RefreshTokenResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(AUTH_KEYS.TOKEN) || '';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Add a response interceptor
client.interceptors.response.use(
  async function (response) {
    return await Promise.resolve(response);
  },
  async function (error: {
    response: { status: number; data: { message?: string; errors?: string } };
    config: InternalAxiosRequestConfig;
  }) {
    // 403 refresh token
    if (error?.response?.status === 403) {
      const access_token = localStorage.getItem(AUTH_KEYS.REFRESH_TOKEN);
      const originalRequest = error.config;

      try {
        const req = await axios.post<RefreshTokenResponse>(import.meta.env.VITE_BASE_URL + 'api/auth/access-token', {
          token: access_token,
        });

        localStorage.setItem(AUTH_KEYS.TOKEN, req?.data?.data?.accessToken);
        localStorage.setItem(AUTH_KEYS.REFRESH_TOKEN, req?.data?.data?.refreshToken);

        originalRequest.headers.Authorization = `Bearer ${req?.data?.data?.accessToken}`;
        return axios(originalRequest);
      } catch (postError) {
        console.error('Error fetching access token:', postError);
      }
    }
    // 401 status code log out
    if (error?.response?.status === 401) {
      localStorage.removeItem(AUTH_KEYS.USER);
      localStorage.removeItem(AUTH_KEYS.TOKEN);
      localStorage.removeItem(AUTH_KEYS.REFRESH_TOKEN);
      window.location.href = PATHS.SIGN_IN;
      await axios.post(import.meta.env.VITE_BASE_URL + 'api/auth/logout');
    }

    return Promise.reject(error?.response?.data?.message || error?.response?.data?.errors);
  },
);

export { client };
