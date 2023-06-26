import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

interface Ruangan {
  id: string;
  image: ImageSourcePropType;
  name: string;
  description: string;
  capacity: number;
}

interface RuanganCardProps {
  Ruangan: Ruangan;
  onPress: (Ruangan: Ruangan) => void;
}

const RuanganCard: React.FC<RuanganCardProps> = ({Ruangan, onPress}) => {
  const {image, name, description, capacity} = Ruangan;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(Ruangan)}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.capacity}>Capacity: {capacity}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  capacity: {
    fontSize: 14,
    color: '#888',
  },
});

export default RuanganCard;
