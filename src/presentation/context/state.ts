import {AuthContextType} from './types';

export const initialContext: AuthContextType = {
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
};
