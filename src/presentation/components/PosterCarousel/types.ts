import { Movie } from "../../../core/models/movie.model";

export interface PosterCarouselProps {
  movies: Movie[];
  height?: number;
}