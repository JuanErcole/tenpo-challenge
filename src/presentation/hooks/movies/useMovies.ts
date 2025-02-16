import {useEffect, useState} from 'react';
import {Movie} from '../../../core/models/movie.model';
import * as UseCases from '../../../core/use-cases';
import {movieFetcher} from '../../../config/adapters/movie.adapter';

let defaultPageTopRated = 1;
let defaultPagePopular = 1;

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const topRatedNextPage = async () => {
    defaultPageTopRated++;
    const movies = await UseCases.moviesTopRatedUseCase(movieFetcher, {
      page: defaultPageTopRated,
    });
    setTopRated([...topRated, ...movies]);
  };

  const popularNextPage = async () => {
    defaultPagePopular++;
    const movies = await UseCases.moviesPopularUseCase(movieFetcher, {
      page: defaultPagePopular,
    });
    setPopular([...popular, ...movies]);
  };

  const initLoad = async () => {
    try {
      setIsLoading(true);

      const [nowPlayingMovies, popularMovies, topRatedMovies] =
        await Promise.all([
          UseCases.moviesNowPlayingUseCase(movieFetcher),
          UseCases.moviesPopularUseCase(movieFetcher),
          UseCases.moviesTopRatedUseCase(movieFetcher),
        ]);

      setNowPlaying(nowPlayingMovies);
      setPopular(popularMovies);
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

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    topRatedNextPage,
    popularNextPage,
  };
};
