
interface Dates {
  maximum: string;
  minimum: string;
}

interface Movie {
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

export interface NowMovieApiResponse {
  dates: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export enum ORIGINAL_LANGUAGE {
  ES = 'es',
  EN = 'en',
}
