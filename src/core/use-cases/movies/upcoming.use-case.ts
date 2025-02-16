import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {UpcomingMovieApiResponse} from '../../../infrastructure/interfaces/movies.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.model';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<UpcomingMovieApiResponse>('/upcoming');

    const movies = upcoming.results.map(MovieMapper.fromMovieResultToModel);

    return movies;
  } catch (error) {
    throw new Error(`Error getting upcoming: ${error}`);
  }
};
