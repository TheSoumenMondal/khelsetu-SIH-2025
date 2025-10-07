import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Card } from '../../src/components/MaterialUI';
import { getUser, removeUser, UserData } from '../../src/utils/storage';

interface ProfileScreenProps {
  onLogout?: () => void;
}

export default function ProfileScreen({ onLogout }: ProfileScreenProps) {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const user = await getUser();
    setUserData(user);
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await removeUser();
            if (onLogout) onLogout();
          },
        },
      ]
    );
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-blue-600 pt-12 pb-16 px-6">
        <Text className="text-3xl font-bold text-white mb-2">Profile</Text>
        <Text className="text-blue-100">Manage your account and preferences</Text>
      </View>

      <ScrollView className="flex-1 px-4 -mt-8" showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <Card className="bg-white mb-4">
          <View className="items-center py-4">
            <View className="bg-blue-100 rounded-full p-6 mb-4">
              <MaterialIcons name="person" size={64} color="#1976D2" />
            </View>
            <Text className="text-2xl font-bold text-gray-900">{userData?.name || 'User'}</Text>
            <Text className="text-gray-600 mt-1">{userData?.email || 'No email provided'}</Text>
          </View>
        </Card>

        {/* User Details */}
        <Card className="mb-4">
          <Text className="text-lg font-bold text-gray-900 mb-4">Personal Information</Text>
          
          <InfoRow icon="person" label="Name" value={userData?.name || 'N/A'} />
          <InfoRow icon="info" label="Bio" value={userData?.bio || 'N/A'} />
          <InfoRow icon="cake" label="Age" value={userData?.age || 'N/A'} />
          <InfoRow icon="home" label="Address" value={userData?.address || 'N/A'} />
          {userData?.email && <InfoRow icon="email" label="Email" value={userData.email} />}
          {userData?.phone && <InfoRow icon="phone" label="Phone" value={userData.phone} />}
        </Card>

        {/* Quick Stats */}
        <Card className="bg-blue-50 mb-4">
          <Text className="text-lg font-bold text-gray-900 mb-4">Quick Stats</Text>
          <View className="flex-row justify-around">
            <StatItem icon="event" value="4" label="Events" />
            <StatItem icon="assessment" value="12" label="Assessments" />
            <StatItem icon="video-library" value="5" label="Videos" />
          </View>
        </Card>

        {/* Settings Options */}
        <Card className="mb-4">
          <Text className="text-lg font-bold text-gray-900 mb-3">Settings</Text>
          <SettingItem icon="edit" label="Edit Profile" onPress={() => Alert.alert('Edit Profile', 'Profile editing coming soon!')} />
          <SettingItem icon="notifications" label="Notifications" onPress={() => Alert.alert('Notifications', 'Notification settings coming soon!')} />
          <SettingItem icon="security" label="Privacy & Security" onPress={() => Alert.alert('Privacy', 'Privacy settings coming soon!')} />
          <SettingItem icon="help" label="Help & Support" onPress={() => Alert.alert('Help', 'Support coming soon!')} />
          <SettingItem icon="info" label="About KhelSetu" onPress={() => Alert.alert('About', 'KhelSetu v1.0.0\nYour sports assessment companion')} />
        </Card>

        {/* Logout Button */}
        <TouchableOpacity
          className="bg-red-600 rounded-full py-4 flex-row items-center justify-center shadow-md mb-8"
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <MaterialIcons name="logout" size={24} color="#fff" />
          <Text className="text-white text-lg font-semibold ml-2">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function InfoRow({ icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <View className="flex-row items-start py-3 border-b border-gray-100 last:border-b-0">
      <MaterialIcons name={icon} size={20} color="#1976D2" />
      <View className="flex-1 ml-3">
        <Text className="text-sm text-gray-500">{label}</Text>
        <Text className="text-base text-gray-900 mt-1">{value}</Text>
      </View>
    </View>
  );
}

function StatItem({ icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <View className="items-center">
      <MaterialIcons name={icon} size={32} color="#1976D2" />
      <Text className="text-2xl font-bold text-gray-900 mt-2">{value}</Text>
      <Text className="text-sm text-gray-600">{label}</Text>
    </View>
  );
}

function SettingItem({ icon, label, onPress }: { icon: any; label: string; onPress: () => void }) {
  return (
    <TouchableOpacity
      className="flex-row items-center py-3 border-b border-gray-100 last:border-b-0"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <MaterialIcons name={icon} size={20} color="#1976D2" />
      <Text className="flex-1 text-base text-gray-900 ml-3">{label}</Text>
      <MaterialIcons name="chevron-right" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
}