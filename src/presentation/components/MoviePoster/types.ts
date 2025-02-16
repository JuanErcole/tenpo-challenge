import {Movie} from '../../../core/models/movie.model';

export interface MoviePosterProps {
  movie: Movie;
  height?: number;
  width?: number;
}
