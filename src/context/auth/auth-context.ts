import { createContext } from 'react';
import { AuthContextType } from 'types/auth';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => null,
  addUser: () => {
    return;
  },
  login: () => {
    return;
  },
  logout: () => {
    return;
  },
});
