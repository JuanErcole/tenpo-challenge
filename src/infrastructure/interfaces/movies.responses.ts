export enum ORIGINAL_LANGUAGE {
  ES = 'es',
  EN = 'en',
}

interface Dates {
  maximum: string;
  minimum: string;
}

export interface Results {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: ORIGINAL_LANGUAGE;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// response of the now playing movies
export interface NowMovieApiResponse {
  dates: Dates;
  page: number;
  results: Results[];
  total_pages: number;
  total_results: number;
}

// response of the upcoming movies
export interface PopularMovieApiResponse extends NowMovieApiResponse {}

// response of the top rated movies
export interface TopRatedMovieApiResponse {
  page: number;
  results: Results[];
  total_pages: number;
  total_results: number;
}

