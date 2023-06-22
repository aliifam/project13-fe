import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import RoomCard from './RoomCard';
import roomData from './roomData.json';

interface RoomData {
  id: string;
  title: string;
  price: number;
  image: string;
}

const RoomList: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredRoomData, setFilteredRoomData] = useState<RoomData[]>([]);

  useEffect(() => {
    filterRooms();
  }, [searchText]);

  const filterRooms = (): void => {
    if (searchText.trim() === '') {
      setFilteredRoomData(roomData);
    } else {
      const filteredRooms = roomData.filter(room =>
        room.title.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredRoomData(filteredRooms);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search rooms"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <FlatList
        data={filteredRoomData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <RoomCard
            title={item.title}
            price={item.price}
            image={require(`./images/${item.image}`)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default RoomList;
