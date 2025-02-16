import {Text, View} from 'react-native';
import {PosterCarouselProps} from './types';
import {ScrollView} from 'react-native-gesture-handler';
import { MoviePoster } from '../MoviePoster/MoviePoster';

export const PosterCarousel = (PosterCarouselProps: PosterCarouselProps) => {
  const {movies, height = 440} = PosterCarouselProps;

  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
