import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {LoginScreen, HomeScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const {isAuthenticated} = useContext(AuthContext)!;

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: '#121212'},
        headerShown: false,
      }}>
      {isAuthenticated ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};
