import { Movie } from "../../../core/models/movie.model";

export interface PosterCarouselProps {
  movies: Movie[];
  title?: string;
  height?: number;
}