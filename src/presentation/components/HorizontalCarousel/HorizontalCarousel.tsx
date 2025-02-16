import {StyleSheet, Text, View} from 'react-native';
import {MoviePoster} from '../MoviePoster/MoviePoster';
import {HorizontalCarouselProps} from './types';
import {FlatList} from 'react-native-gesture-handler';

export const HorizontalCarousel = (
  HorizontalCarouselProps: HorizontalCarouselProps,
) => {
  const {movies, title} = HorizontalCarouselProps;

  return (
    <View style={{height: title ? 260 : 220}}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 15,
    marginBottom: 5,
  },
});
