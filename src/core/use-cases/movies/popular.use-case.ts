import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PopularMovieApiResponse} from '../../../infrastructure/interfaces/movies.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.model';
import {Options} from '../movies/types';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    console.log('page', options?.page);

    const popular = await fetcher.get<PopularMovieApiResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
      },
    });

    const movies = popular.results.map(MovieMapper.fromMovieResultToModel);

    return movies;
  } catch (error) {
    throw new Error(`Error getting popular: ${error}`);
  }
};
