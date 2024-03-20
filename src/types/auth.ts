export interface IUserDetails {
  id: string;
  name: string;
  image: string;
  email: string;
}

export interface IUser {
  user: IUserDetails;
  accessToken?: string;
  refreshToken?: string;
}

export interface AuthContextType {
  user: IUserDetails | null;
  addUser: (user: IUserDetails | null) => void;
  login: (user: IUser | null) => void;
  logout: () => void;
  setUser: React.Dispatch<React.SetStateAction<IUserDetails | null>>;
}

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type TLocalStorage = () => {
  setItem: (key: string, value: string) => void;
  getItem: (key: string) => string | null;
  removeItem: (key: string) => void;
};
