import { useContext } from "react";

import { AuthContext } from "../context/auth/auth-context.ts";
import { AuthContextType } from "../types/auth.ts";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  return context;
};
