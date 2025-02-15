import {useEffect, useState} from 'react';
import {Movie} from '../../../core/models/movie.model';
import * as UseCases from '../../../core/use-cases'; 
import { movieFetcher } from '../../../config/adapters/movie.adapter';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initLoad = async () => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieFetcher)
  }

  useEffect(() => {
    initLoad();
  }, [])
  

  return {}
};
