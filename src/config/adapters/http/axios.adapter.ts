import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {HttpAdapter} from './http.adapter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN_NAME } from '../../../presentation/context/types';

interface Options {
  baseURL: string;
  params?: Record<string, any>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseURL,
      params: options.params,
    });

    this.axiosInstance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const token = await AsyncStorage.getItem(TOKEN_NAME);
        if (token) {
          config.headers.set('Authorization', `Bearer ${token}`);
        }
        return config;
      },
      error => Promise.reject(error),
    );
  }

  async get<T>(url: string, options?: Record<string, any>): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(url, options);
      return response.data;
    } catch (error) {
      throw new Error(`Error getting ${url}: ${error}`);
    }
  }
}
