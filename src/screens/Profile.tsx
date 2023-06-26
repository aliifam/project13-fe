import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

const Profile = () => {
  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./profile-picture.jpg')}
        style={styles.profilePicture}
      />
      <Text style={styles.username}>John Doe</Text>
      <Text style={styles.location}>San Francisco, CA</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
        euismod orci. Mauris a feugiat nulla. Phasellus commodo metus ac enim
        consequat, quis tincidunt diam interdum.
      </Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Profile;
