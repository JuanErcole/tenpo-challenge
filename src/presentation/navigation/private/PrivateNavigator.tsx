import React from 'react';
import HomeNavigator from './HomeNavigator/HomeNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function PrivateNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeNavigator} />
    </Stack.Navigator>
  );
}
