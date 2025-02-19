import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect} from 'react';
import {initialContext} from './state';
import {AuthContextType, FAKE_TOKEN, TOKEN_NAME} from './types';

export const AuthContext = createContext<AuthContextType>(initialContext);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem(TOKEN_NAME);
      if (token) setIsAuthenticated(true);
    };
    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    if (!email || !password) return;

    const token = FAKE_TOKEN;
    await AsyncStorage.setItem(TOKEN_NAME, token);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem(TOKEN_NAME);
    setIsAuthenticated(false);
  };

  const values = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
