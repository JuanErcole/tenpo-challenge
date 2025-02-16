import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MoviePoster} from '../MoviePoster/MoviePoster';
import {HorizontalCarouselProps} from './types';
import {FlatList} from 'react-native-gesture-handler';
import {useEffect, useRef} from 'react';

export const HorizontalCarousel = (
  HorizontalCarouselProps: HorizontalCarouselProps,
) => {
  const {movies, title, loadNextPage} = HorizontalCarouselProps;

  const isLoadingNextPage = useRef(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoadingNextPage.current) return;

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;

    const isReachEnd =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isReachEnd) return;

    isLoadingNextPage.current = true;

    loadNextPage && loadNextPage();
  };

  useEffect(() => {
    setTimeout(() => {
      isLoadingNextPage.current = false;
    }, 200);
  }, [movies]);

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
        onScroll={onScroll}
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
