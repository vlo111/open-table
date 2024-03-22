import { useContext } from 'react';
import { AuthContext } from 'context/auth/auth-context';
import { AuthContextType } from 'types/auth';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  return context;
};
