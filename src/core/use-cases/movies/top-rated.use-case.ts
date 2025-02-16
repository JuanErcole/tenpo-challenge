import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {TopRatedMovieApiResponse} from '../../../infrastructure/interfaces/movies.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.model';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<TopRatedMovieApiResponse>('/top_rated');

    const movies = topRated.results.map(MovieMapper.fromMovieResultToModel);

    return movies;
  } catch (error) {
    throw new Error(`Error getting top rated: ${error}`);
  }
};
