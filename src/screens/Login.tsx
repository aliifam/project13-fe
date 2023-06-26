import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here, e.g., API calls, authentication checks, etc.
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Icon name="pencil" size={64} color="#ff5a5f" />
        {/* Add your Airbnb logo here */}
        <Text style={styles.logo}>Project 13</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff5a5f',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  loginButton: {
    backgroundColor: '#ff5a5f',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
