import {View, Text} from 'react-native';
import {useAuth, useMovies} from '../../../hooks';
import {ScrollView} from 'react-native-gesture-handler';
import {PosterCarousel, HorizontalCarousel} from '../../../components';

export const HomeScreen = () => {
  const {isLoading, nowPlaying, topRated, popular, popularNextPage, topRatedNextPage} =
    useMovies();
  const auth = useAuth();

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  const loadNextPageTopRated = () => {
    topRatedNextPage();
  };

  const loadNextPagePopular = () => {
    popularNextPage();
  };

  return (
    <ScrollView>
      <View style={{marginTop: 20}}>
        <PosterCarousel movies={nowPlaying} />

        <HorizontalCarousel
          title="Mejores calificadas"
          loadNextPage={loadNextPageTopRated}
          movies={topRated}
        />

        <HorizontalCarousel
          title="Populares"
          loadNextPage={loadNextPagePopular}
          movies={popular}
        />
      </View>
    </ScrollView>
  );
};
