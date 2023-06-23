import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import QrPresence from './screens/QrPresence';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Login />
    </View>
  );
};

export default App;
