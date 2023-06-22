import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import AuthService from './services/AuthService';
import Login from './screens/Login';

const App: React.FC = () => {
  // const [loading, setLoading] = useState(true);
  // const [userToken, setUserToken] = useState('');

  // useEffect(() => {
  //   const checkToken = async () => {
  //     const token = await AuthService.getToken();
  //     setUserToken(token);
  //     setLoading(false);
  //   };
  //   checkToken();
  // }, []);

  // if (loading) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }
  return <Login />;
};

export default App;
