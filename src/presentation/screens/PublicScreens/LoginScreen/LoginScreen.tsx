import React, {useState, useContext} from 'react';
import {View, TextInput, Button, Text, Pressable} from 'react-native';
import {styles} from './Styled';
import {useAuth} from '../../../hooks';

const EMPTY_STRING = '';

export const LoginScreen = () => {
  const [email, setEmail] = useState(EMPTY_STRING);
  const [password, setPassword] = useState(EMPTY_STRING);
  const auth = useAuth();

  const disabled = !email || !password;

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>NETFLIX</Text>
      <Text style={styles.title}>
        Inicia sesion para empezar a disfrutar de Netflix
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        placeholderTextColor={'white'}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        placeholderTextColor={'white'}
        value={password}
      />
      <Pressable
        disabled={disabled}
        style={({pressed}) => [
          styles.button,
          disabled ? styles.buttonDisabled : styles.buttonEnabled,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => auth.login(email, password)}>
        <Text style={styles.texts}>Iniciar sesion</Text>
      </Pressable>
    </View>
  );
};
