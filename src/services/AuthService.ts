import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
  async login(email: string, password: string): Promise<string | null> {
    try {
      // Make API call to authenticate user
      // Return JWT token if login successful
      const response = await fetch('https://example.com/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'},
      });

      if (response.ok) {
        const {token} = await response.json();
        await AsyncStorage.setItem('token', token); // Store token in AsyncStorage
        return token;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Login failed:', error);
      return null;
    }
  }

  async getToken(): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem('token'); // Retrieve token from AsyncStorage
      return token ? token : null;
    } catch (error) {
      console.error('Failed to retrieve token:', error);
      return null;
    }
  }

  async removeToken(): Promise<void> {
    try {
      await AsyncStorage.removeItem('token'); // Remove token from AsyncStorage
    } catch (error) {
      console.error('Failed to remove token:', error);
    }
  }
}

export default new AuthService();
