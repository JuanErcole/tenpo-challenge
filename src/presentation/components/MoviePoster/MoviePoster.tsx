import {View, Text, Image} from 'react-native';
import {MoviePosterProps} from './types';
import {styles} from './Styled';

export const MoviePoster = (MoviePosterProps: MoviePosterProps) => {
  const {movie, height = 400, width = 300} = MoviePosterProps;

  return (
    <View style={{...styles.imageContainer, height, width}}>
      <Image style={styles.image} source={{uri: movie.poster}} />
    </View>
  );
};
