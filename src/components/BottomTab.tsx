import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTab = () => {
  const menu = [
    {
      name: 'Home',
      icon: 'home',
    },
    {
      name: 'Search',
      icon: 'search',
    },
    {
      name: 'QR Scanner',
      icon: 'qrcode',
    },
    {
      name: 'History',
      icon: 'history',
    },
    {
      name: 'Profile',
      icon: 'user',
    },
  ];

  return (
    <View>
      <Text>BottomTab</Text>
    </View>
  );
};

export default BottomTab;
