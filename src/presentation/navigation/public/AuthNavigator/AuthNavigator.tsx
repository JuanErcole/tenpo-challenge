import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LoginScreen } from '../../../screens';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: '#121212'},
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
