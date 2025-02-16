import { Movie } from "../../../core/models/movie.model";

export interface HorizontalCarouselProps {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}