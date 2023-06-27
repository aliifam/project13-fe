import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../constants/types';

interface RoomDetailProps {
  navigation: StackNavigationProp<RootStackParamList, 'RoomDetail'>;
  route: RouteProp<RootStackParamList, 'RoomDetail'>;
}

const RoomDetail: React.FC<RoomDetailProps> = ({route}) => {
  const {room} = route.params;

  return (
    <View>
      <Text>Room Detail</Text>
      <Text>Name: {room.name}</Text>
      <Text>Description: {room.description}</Text>
      <Text>Capacity: {room.capacity}</Text>
    </View>
  );
};

export default RoomDetail;
