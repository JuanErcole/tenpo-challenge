import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PrivateNavigator from './private/PrivateNavigator';
import {AuthNavigator} from './public/AuthNavigator/AuthNavigator';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const authContext = useContext(AuthContext)!;

  if (!authContext) return null;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {authContext.isAuthenticated ? (
        <Stack.Screen name="Private" component={PrivateNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};
