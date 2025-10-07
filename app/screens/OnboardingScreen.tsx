import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

interface OnboardingScreenProps {
  onGetStarted: () => void;
}

export default function OnboardingScreen({ onGetStarted }: OnboardingScreenProps) {
  return (
    <View className="flex-1 bg-blue-600">
      <LinearGradient
        colors={['#1976D2', '#1565C0', '#0D47A1']}
        className="flex-1 justify-center items-center px-6"
      >
        {/* Logo/Icon */}
        <View className="mb-8 bg-white rounded-full p-6 shadow-lg">
          <MaterialIcons name="sports-soccer" size={80} color="#1976D2" />
        </View>

        {/* Title */}
        <Text className="text-4xl font-bold text-white mb-4 text-center">
          Welcome to KhelSetu
        </Text>

        {/* Subtitle */}
        <Text className="text-lg text-blue-100 text-center mb-8 px-4">
          Your comprehensive sports assessment platform
        </Text>

        {/* Features */}
        <View className="mb-12 w-full px-4">
          <FeatureItem icon="event" text="Track live sports events" />
          <FeatureItem icon="leaderboard" text="Compete on leaderboards" />
          <FeatureItem icon="analytics" text="Analyze your performance" />
          <FeatureItem icon="video-library" text="Manage training videos" />
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          className="bg-white rounded-full px-12 py-4 shadow-lg"
          onPress={onGetStarted}
          activeOpacity={0.8}
        >
          <Text className="text-blue-600 text-lg font-bold">Get Started</Text>
        </TouchableOpacity>

        {/* Version */}
        <Text className="text-blue-200 text-sm mt-8">Version 1.0.0</Text>
      </LinearGradient>
    </View>
  );
}

function FeatureItem({ icon, text }: { icon: any; text: string }) {
  return (
    <View className="flex-row items-center mb-4">
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text className="text-white text-base ml-3">{text}</Text>
    </View>
  );
}
