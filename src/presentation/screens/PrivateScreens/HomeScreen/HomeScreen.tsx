import React, {useEffect, useState, useContext} from 'react';
import {View, FlatList, Text, Button} from 'react-native';
import {useAuth, useMovies} from '../../../hooks';

const data = [
  {id: 1, title: 'Pelicula 1'},
  {id: 2, title: 'Pelicula 2'},
  {id: 3, title: 'Pelicula 3'},
  {id: 4, title: 'Pelicula 4'},
  {id: 5, title: 'Pelicula 5'},
  {id: 6, title: 'Pelicula 6'},
  {id: 7, title: 'Pelicula 7'},
  {id: 8, title: 'Pelicula 8'},
  {id: 9, title: 'Pelicula 9'},
  {id: 10, title: 'Pelicula 10'},
];

export const HomeScreen = () => {
  const {} = useMovies();
  const auth = useAuth();

  return (
    <View>
      <Button title="Logout" onPress={auth.logout} />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  );
};
