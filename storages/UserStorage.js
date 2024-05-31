import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@userData";

const UserStorage = {
  readUserData: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Error reading user data from AsyncStorage:', e);
      return null;
    }
  },

  writeUserData: async (userData) => {
    try {
      const jsonValue = JSON.stringify(userData);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.error('Error writing user data to AsyncStorage:', e);
    }
  }
};

export default UserStorage;
