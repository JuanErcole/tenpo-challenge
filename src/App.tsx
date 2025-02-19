import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './presentation/context/AuthContext';
import {AppNavigator} from './presentation/navigation/AppNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GestureHandlerRootView>
        <AuthProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </AuthProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;
