import * as React from 'react';
import {Button, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import QrPresence from './screens/QrPresence';
import {RootStackParamList} from '../src/constants/types';
import RoomList from './screens/Ruangan';
import RoomDetail from './screens/RuanganDetail';
import BottomNavigator from './components/BottomTab';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return <BottomNavigator />;
};

export default App;
