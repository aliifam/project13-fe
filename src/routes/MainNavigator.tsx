import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabNavigator} from '../components';
import Home from '../screens/Home';
import QrPresence from '../screens/QrPresence';
import Ruangan from '../screens/Ruangan';
import Profile from '../screens/Profile';
import History from '../screens/History';
import RoomList from '../screens/Ruangan';
import RoomDetail from '../screens/RuanganDetail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Ruangan" component={Ruangan} />
      <Tab.Screen name="QrPresence" component={QrPresence} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={BottomNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen name="RoomList" component={RoomList} />
      <Stack.Screen name="RoomDetail" component={RoomDetail} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
