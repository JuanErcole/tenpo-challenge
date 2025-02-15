import { ORIGINAL_LANGUAGE } from "../../infrastructure/interfaces/movies";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'bc18060ad354259633bcea9e36e52114',
    language: ORIGINAL_LANGUAGE.ES
  }
})