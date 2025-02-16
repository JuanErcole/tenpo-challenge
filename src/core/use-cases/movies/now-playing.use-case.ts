import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowMovieApiResponse} from '../../../infrastructure/interfaces/movies.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.model';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowMovieApiResponse>('/now_playing');

    const movies = nowPlaying.results.map(MovieMapper.fromMovieResultToModel);

    return movies;
  } catch (error) {
    throw new Error(`Error getting now playing: ${error}`);
  }
};
