import { TLocalStorage } from '../types/auth.ts';

export const useLocalStorage: TLocalStorage = () => {
  const setItem = (key: string, value: string): void => {
    localStorage.setItem(key, value);
  };

  const getItem = (key: string): string | null => {
    const value = localStorage.getItem(key);
    return value;
  };

  const removeItem = (key: string): void => {
    localStorage.removeItem(key);
  };

  return { setItem, getItem, removeItem };
};
