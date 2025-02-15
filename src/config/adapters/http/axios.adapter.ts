import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

interface Options {
  baseURL: string;
  params?: Record<string, any>;
}


export class AxiosAdapter implements HttpAdapter {

  private axiosInstance: AxiosInstance;
  
  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseURL,
      params: options.params
    });
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
