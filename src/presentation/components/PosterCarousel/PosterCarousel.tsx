import {Text, View} from 'react-native';
import {PosterCarouselProps} from './types';
import {ScrollView} from 'react-native-gesture-handler';
import {MoviePoster} from '../MoviePoster/MoviePoster';

export const PosterCarousel = (PosterCarouselProps: PosterCarouselProps) => {
  const {movies, title, height = 440} = PosterCarouselProps;

  return (
    <View style={{height}}>
      {title && (
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            paddingLeft: 15,
            marginBottom: 5,
          }}>
          {title}
        </Text>
      )}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
