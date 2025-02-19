import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useAuth, useMovies} from '../../../hooks';
import {ScrollView} from 'react-native-gesture-handler';
import {PosterCarousel, HorizontalCarousel} from '../../../components';
import {FullScreenLoader} from '../../../components/FullScreenLoader/FullScreenLoader';

export const HomeScreen = () => {
  const {isLoading, nowPlaying, topRated, popular, popularNextPage, topRatedNextPage} =
    useMovies();
  const auth = useAuth();

  if (isLoading) {
    return <FullScreenLoader />;
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
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>NETFLIX</Text>
          <Pressable style={styles.Buttonlogout} onPress={() => auth.logout()}>
            <Text style={styles.ButtonlogoutText}>Salir</Text>
          </Pressable>
        </View>
        <PosterCarousel movies={nowPlaying} title="20 nuevos estrenos" />

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

const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    color: 'red',
  },
  Buttonlogout: {
    padding: 5,
    borderRadius: 5,
  },
  ButtonlogoutText: {
    fontSize: 16,
    color: 'red',
  },
});
