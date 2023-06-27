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

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RoomList">
        <Stack.Screen name="RoomList" component={RoomList} />
        <Stack.Screen name="RoomDetail" component={RoomDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
