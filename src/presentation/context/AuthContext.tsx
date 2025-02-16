import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect} from 'react';
import { initialContext } from './state';
import { AuthContextType } from './types';

export const AuthContext = createContext<AuthContextType>(initialContext);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) setIsAuthenticated(true);
    };
    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    if (!email || !password) return;

    const fakeToken = 'fake-jwt-token';
    await AsyncStorage.setItem('token', fakeToken);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  const values = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
