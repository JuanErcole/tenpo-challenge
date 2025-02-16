import {View, Text} from 'react-native';
import {useAuth, useMovies} from '../../../hooks';
import {ScrollView} from 'react-native-gesture-handler';
import { PosterCarousel, HorizontalCarousel } from '../../../components';


export const HomeScreen = () => {
  const {isLoading, nowPlaying, topRated, upcoming} = useMovies();
  const auth = useAuth();

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <View style={{marginTop: 20}}>
        <PosterCarousel movies={nowPlaying} />
        <HorizontalCarousel title="Mejores calificadas" movies={topRated} />
        <HorizontalCarousel title="Proximamente" movies={upcoming} />
      </View>
    </ScrollView>
  );
};
