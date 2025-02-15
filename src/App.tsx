import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './presentation/context/AuthContext';
import {AppNavigator} from './presentation/navigation/AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;
