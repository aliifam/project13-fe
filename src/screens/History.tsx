import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

const History = () => {
  enum Status {
    Booked = 'Booked',
    CheckedIn = 'Checked In',
    CheckedOut = 'Checked Out',
  }
  const renderCard = ({item}) => {
    return (
      <View style={styles.card}>
        <Image source={{uri: item.image}} style={styles.cardImage} />
        <View style={styles.cardDetails}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardPrice}>{item.price}</Text>
          <Text style={styles.cardDate}>{item.date}</Text>
        </View>
      </View>
    );
  };

  const data = [
    {
      id: '1',
      title: 'Luxury Villa',
      price: '$200/night',
      date: 'June 12, 2023',
      image: 'https://example.com/images/villa.jpg',
    },
    {
      id: '2',
      title: 'Beach House',
      price: '$150/night',
      date: 'May 28, 2023',
      image: 'https://example.com/images/beach-house.jpg',
    },
    // Add more data items as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Booking History</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderCard}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardList: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardDetails: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardPrice: {
    fontSize: 16,
    color: '#888',
  },
  cardDate: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
  },
});

export default History;
