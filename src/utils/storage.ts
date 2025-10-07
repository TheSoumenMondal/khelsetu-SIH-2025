import * as SecureStore from 'expo-secure-store';

const USER_KEY = 'khelsetu_user';

export interface UserData {
  name: string;
  bio: string;
  age: string;
  address: string;
  email?: string;
  phone?: string;
}

export const saveUser = async (userData: UserData): Promise<void> => {
  try {
    await SecureStore.setItemAsync(USER_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

export const getUser = async (): Promise<UserData | null> => {
  try {
    const userData = await SecureStore.getItemAsync(USER_KEY);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};

export const removeUser = async (): Promise<void> => {
  try {
    await SecureStore.deleteItemAsync(USER_KEY);
  } catch (error) {
    console.error('Error removing user data:', error);
  }
};
