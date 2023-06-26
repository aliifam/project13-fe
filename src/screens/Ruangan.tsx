import React from 'react';
import {View, FlatList, ImageSourcePropType} from 'react-native';
import RuanganCard from '../components/RuanganCard';

interface Ruangan {
  id: string;
  image: ImageSourcePropType;
  name: string;
  description: string;
  capacity: number;
}

interface RuanganListPageProps {
  navigation: any; // Replace 'any' with the appropriate type for your navigation prop
}

const RuanganListPage: React.FC<RuanganListPageProps> = ({navigation}) => {
  const Ruangans: Ruangan[] = [
    {
      id: '1',
      image: require('./Ruangan1.jpg'),
      name: 'Cozy Apartment',
      description: 'A beautiful and cozy apartment in the heart of the city.',
      capacity: 2,
    },
    {
      id: '2',
      image: require('./Ruangan2.jpg'),
      name: 'Luxury Villa',
      description:
        'Experience luxury living in this stunning beachfront villa.',
      capacity: 4,
    },
    // Add more Ruangans here
  ];

  const handleCardPress = (Ruangan: Ruangan) => {
    navigation.navigate('RuanganDetailBooking', {Ruangan});
  };

  return (
    <View>
      <FlatList
        data={Ruangans}
        keyExtractor={Ruangan => Ruangan.id}
        renderItem={({item}) => (
          <RuanganCard Ruangan={item} onPress={handleCardPress} />
        )}
      />
    </View>
  );
};

export default RuanganListPage;
