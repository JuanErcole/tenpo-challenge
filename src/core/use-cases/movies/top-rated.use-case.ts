import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {TopRatedMovieApiResponse} from '../../../infrastructure/interfaces/movies.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.model';
import { Options } from './types';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<TopRatedMovieApiResponse>('/top_rated', {
      params: {
        page: options?.page ?? 1,
      }
    });

    const movies = topRated.results.map(MovieMapper.fromMovieResultToModel);

    return movies;
  } catch (error) {
    throw new Error(`Error getting top rated: ${error}`);
  }
};
