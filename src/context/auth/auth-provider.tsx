import { useCallback, useState, useMemo } from "react";

import { useLocalStorage } from "../../hooks/use-local-storage.ts";
import { IUserDetails, IUser, AuthProviderProps } from "types/auth";

import { AuthContext } from "./auth-context.ts";
import { AUTH_KEYS } from "helpers/constants";

const localStorageUser = localStorage.getItem(AUTH_KEYS.USER);

export const AuthProvider = (props: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<IUserDetails | null>(
    localStorageUser ? (JSON.parse(localStorageUser) as IUserDetails) : null,
  );
  const { setItem, removeItem } = useLocalStorage();

  const addUser = useCallback(
    (user: IUserDetails | null) => {
      setItem(AUTH_KEYS.USER, JSON.stringify(user));
      setUser(user);
    },
    [setItem],
  );

  const addToken = useCallback(
    (token?: string | null) => {
      setItem(AUTH_KEYS.TOKEN, token || "");
    },
    [setItem],
  );

  const addRefreshToken = useCallback(
    (r_token?: string | null) => {
      setItem(AUTH_KEYS.REFRESH_TOKEN, r_token || "");
    },
    [setItem],
  );

  const removeUser = useCallback(() => {
    setUser(null);
    removeItem(AUTH_KEYS.USER);
    removeItem(AUTH_KEYS.TOKEN);
    removeItem(AUTH_KEYS.REFRESH_TOKEN);
  }, [removeItem]);

  const login = useCallback(
    (user: IUser | null) => {
      addUser(user?.user || null);
      addToken(user?.accessToken);
      addRefreshToken(user?.refreshToken);
    },
    [addToken, addUser, addRefreshToken],
  );

  const logout = useCallback(() => {
    removeUser();
  }, [removeUser]);

  const providerValues = useMemo(
    () => ({ user, login, logout, addUser, setUser }),
    [addUser, login, logout, user],
  );
  return <AuthContext.Provider value={providerValues} {...props} />;
};
