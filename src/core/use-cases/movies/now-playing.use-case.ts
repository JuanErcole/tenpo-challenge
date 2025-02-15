import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowMovieApiResponse} from '../../../infrastructure/interfaces/movies';
import {Movie} from '../../models/movie.model';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowMovieApiResponse>('/now_playing');

    console.log({nowPlaying});

    return [];
  } catch (error) {
    throw new Error(`Error getting now playing: ${error}`);
  }
};
