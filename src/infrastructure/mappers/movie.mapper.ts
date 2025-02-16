import { Movie } from "../../core/models/movie.model";
import { Results } from "../interfaces/movies.responses";

export class MovieMapper {

  static fromMovieResultToModel(result: Results): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: result.release_date,
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
    };
  }

}