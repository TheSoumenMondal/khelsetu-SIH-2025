import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

export function Card({ children, className = '', onPress }: CardProps) {
  const baseClass = 'bg-white rounded-lg shadow-md p-4 mb-3';
  
  if (onPress) {
    return (
      <TouchableOpacity
        className={`${baseClass} ${className}`}
        onPress={onPress}
        activeOpacity={0.7}
      >
        {children}
      </TouchableOpacity>
    );
  }
  
  return <View className={`${baseClass} ${className}`}>{children}</View>;
}

interface BadgeProps {
  text: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
}

export function Badge({ text, variant = 'info' }: BadgeProps) {
  const variantStyles = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return (
    <View className={`px-3 py-1 rounded-full ${variantStyles[variant]}`}>
      <Text className={`text-xs font-semibold ${variantStyles[variant]}`}>
        {text}
      </Text>
    </View>
  );
}

interface ChipProps {
  icon?: any;
  text: string;
  iconColor?: string;
}

export function Chip({ icon, text, iconColor = '#1976D2' }: ChipProps) {
  return (
    <View className="flex-row items-center bg-gray-100 rounded-full px-3 py-2 mr-2">
      {icon && <MaterialIcons name={icon} size={16} color={iconColor} />}
      <Text className="text-sm text-gray-700 ml-1">{text}</Text>
    </View>
  );
}

interface ProgressBarProps {
  progress: number;
  color?: string;
  height?: number;
}

export function ProgressBar({ progress, color = '#1976D2', height = 8 }: ProgressBarProps) {
  return (
    <View className="bg-gray-200 rounded-full overflow-hidden" style={{ height }}>
      <View
        className="rounded-full"
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: color,
        }}
      />
    </View>
  );
}

interface EmptyStateProps {
  icon: any;
  title: string;
  description: string;
}

export function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <View className="flex-1 justify-center items-center px-8">
      <MaterialIcons name={icon} size={64} color="#BDBDBD" />
      <Text className="text-xl font-bold text-gray-700 mt-4 text-center">{title}</Text>
      <Text className="text-base text-gray-500 mt-2 text-center">{description}</Text>
    </View>
  );
}
