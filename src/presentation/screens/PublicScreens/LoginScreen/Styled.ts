import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'red',
  },
  title: {
    fontSize: 20,
    marginBottom: 24,
    color: 'white',
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    color: 'white',
  },
  buttonDisabled: {
    backgroundColor: '#858585',
  },
  buttonEnabled: {
    backgroundColor: 'red',
  },
  buttonPressed: {
    backgroundColor: 'red',
    opacity: 0.5,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  texts: {
    color: 'white',
  },
})