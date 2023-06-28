import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

const Profile = () => {
  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://avatars.githubusercontent.com/u/63054324'}}
        style={styles.profilePicture}
      />
      <Text style={styles.username}>John Doe</Text>
      <Text style={styles.location}>San Francisco, CA</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
        euismod orci. Mauris a feugiat nulla. Phasellus commodo metus ac enim
        consequat, quis tincidunt diam interdum.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" onPress={() => {}} style={styles.button} />
        <Button title="Logout" onPress={handleLogout} style={styles.button} />
      </View>
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
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10, // Add margin top to the button container
  },
  button: {
    width: '100%',
    marginBottom: 10,
  },
});

export default Profile;
