import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Room} from '../constants/types';

interface RoomCardProps {
  room: Room;
  onPress: (room: Room) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({room, onPress}) => {
  const {image, name, description, capacity} = room;

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => onPress(room)}>
      <Image source={{uri: image}} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <Text style={styles.cardCapacity}>Capacity: {capacity}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardDetails: {
    padding: 16,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  cardCapacity: {
    fontSize: 14,
    color: '#888',
  },
});

export default RoomCard;
