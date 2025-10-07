import { useRouter } from 'expo-router';
import React from 'react';
import { removeUser } from '../../src/utils/storage';
import ProfileScreen from '../screens/ProfileScreen';

export default function Profile() {
  const router = useRouter();

  const handleLogout = async () => {
    await removeUser();
    router.replace('/onboarding' as any);
  };

  return <ProfileScreen onLogout={handleLogout} />;
}
