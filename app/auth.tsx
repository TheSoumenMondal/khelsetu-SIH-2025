import { useRouter } from 'expo-router';
import React from 'react';
import AuthScreen from '../src/screens/AuthScreen';
import { saveUser } from '../src/utils/storage';

export default function Auth() {
  const router = useRouter();

  const handleAuthSubmit = async (userData: any) => {
    try {
      await saveUser(userData);
      router.replace('/(tabs)/events' as any);
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return <AuthScreen onSubmit={handleAuthSubmit} />;
}
