import React from 'react';
import {FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList, Room} from '../constants/types';
import RoomCard from '../components/RuanganCard';

interface RoomListProps {
  navigation: StackNavigationProp<RootStackParamList, 'RoomList'>;
  route: RouteProp<RootStackParamList, 'RoomList'>;
}

const RoomList: React.FC<RoomListProps> = ({navigation}) => {
  const rooms: Room[] = [
    {
      id: '1',
      image:
        'https://cdn-cms.pgimgs.com/areainsider/2022/12/Alt-Text-1.-Coworking-Space-Jakarta-Selatan-CoHive-.png',
      name: 'Cozy Apartment',
      description: 'A beautiful and cozy apartment in the heart of the city.',
      capacity: 2,
    },
    {
      id: '2',
      image:
        'https://cdn-cms.pgimgs.com/areainsider/2022/12/Alt-Text-4.-Coworking-Space-Jakarta-Pusat-WeWork-738x457.png',
      name: 'Luxury Villa',
      description:
        'Experience luxury living in this stunning beachfront villa.',
      capacity: 4,
    },

    {
      id: '3',
      image:
        'https://cdn-cms.pgimgs.com/areainsider/2022/12/Alt-Text-5.-Coworking-Space-Jakarta-Barat-Werkspace.png',
      name: 'Beautiful Bungalow',
      description: 'A beautiful bungalow with a private infinity pool.',
      capacity: 3,
    },
  ];

  const handlePressCard = (room: Room) => {
    navigation.navigate('RoomDetail', {room});
  };

  const renderRoomCard = ({item}: {item: Room}) => {
    return <RoomCard room={item} onPress={handlePressCard} />;
  };

  return (
    <FlatList
      data={rooms}
      keyExtractor={room => room.id}
      renderItem={renderRoomCard}
    />
  );
};

export default RoomList;
