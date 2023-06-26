import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface Ruangan {
  id: string;
  images: string[];
  name: string;
  description: string;
  capacity: number;
}

interface RuanganDetailBookingPageProps {
  route: {
    params: {
      Ruangan: Ruangan;
    };
  };
}

const RuanganDetailBookingPage: React.FC<RuanganDetailBookingPageProps> = ({
  route,
}) => {
  const {Ruangan} = route.params;

  const handleBookedPress = () => {
    // Handle booked button press
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Ruangan.images.map((image, index) => (
            <Image
              key={index}
              source={{uri: image}}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
        <Text style={styles.name}>{Ruangan.name}</Text>
        <Text style={styles.description}>{Ruangan.description}</Text>
        <Text style={styles.capacity}>Capacity: {Ruangan.capacity}</Text>
        <TouchableOpacity
          style={styles.bookedButton}
          onPress={handleBookedPress}>
          <Text style={styles.bookedButtonText}>Booked</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  capacity: {
    fontSize: 16,
    marginBottom: 20,
  },
  bookedButton: {
    backgroundColor: '#ff5a5f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RuanganDetailBookingPage;
