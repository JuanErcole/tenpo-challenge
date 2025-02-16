import {useEffect, useState} from 'react';
import {Movie} from '../../../core/models/movie.model';
import * as UseCases from '../../../core/use-cases';
import {movieFetcher} from '../../../config/adapters/movie.adapter';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initLoad = async () => {
    try {
      setIsLoading(true);

      const [nowPlayingMovies, upcomingMovies, topRatedMovies] =
        await Promise.all([
          UseCases.moviesNowPlayingUseCase(movieFetcher),
          UseCases.moviesUpcomingUseCase(movieFetcher),
          UseCases.moviesTopRatedUseCase(movieFetcher),
        ]);

      setNowPlaying(nowPlayingMovies);
      setUpcoming(upcomingMovies);
      setTopRated(topRatedMovies);
    } catch (error) {
      console.error('Error loading movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initLoad();
  }, []);

  return {isLoading, nowPlaying, upcoming, topRated};
};
