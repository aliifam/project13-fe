import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';

interface RuanganCardProps {
  title: string;
  description: string;
  kuota: number;
  image: ImageSourcePropType;
}

const RuanganCard = ({title, description, kuota, image}: RuanganCardProps) => {
  return (
    <View style={styles.RuanganCard}>
      <Image source={image} style={styles.roomImage} />
      <View style={styles.roomDetails}>
        <Text style={styles.roomTitle}>{title}</Text>
        <Text style={styles.roomDescription}>{description}</Text>
        <Text style={styles.roomQuota}>Kuota: {kuota}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RuanganCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  roomImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  roomDetails: {
    flex: 1,
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  roomDescription: {
    fontSize: 15,
    color: '#888',
  },
  roomQuota: {
    fontSize: 15,
    color: '#888',
  },
});

export default RuanganCard;
