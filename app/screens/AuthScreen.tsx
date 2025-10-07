import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface AuthScreenProps {
  onSubmit: (data: any) => void;
}

export default function AuthScreen({ onSubmit }: AuthScreenProps) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (name && bio && age && address) {
      onSubmit({ name, bio, age, address, email, phone });
    }
  };

  const isFormValid = name && bio && age && address;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScrollView className="flex-1 px-6 py-8" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="mb-8 mt-4">
          <View className="bg-blue-600 rounded-full p-4 self-center mb-4">
            <MaterialIcons name="person-add" size={40} color="#fff" />
          </View>
          <Text className="text-3xl font-bold text-gray-900 text-center mb-2">
            Create Your Profile
          </Text>
          <Text className="text-base text-gray-600 text-center">
            Fill in your details to get started with KhelSetu
          </Text>
        </View>

        {/* Form Fields */}
        <View className="mb-6">
          <InputField
            icon="person"
            placeholder="Full Name *"
            value={name}
            onChangeText={setName}
          />
          <InputField
            icon="info"
            placeholder="Bio / About You *"
            value={bio}
            onChangeText={setBio}
            multiline
          />
          <InputField
            icon="cake"
            placeholder="Age *"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
          <InputField
            icon="home"
            placeholder="Address *"
            value={address}
            onChangeText={setAddress}
            multiline
          />
          <InputField
            icon="email"
            placeholder="Email (Optional)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <InputField
            icon="phone"
            placeholder="Phone (Optional)"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        {/* Required Fields Note */}
        <Text className="text-sm text-gray-500 mb-6 text-center">
          * Required fields
        </Text>

        {/* Submit Button */}
        <TouchableOpacity
          className={`rounded-full py-4 flex-row items-center justify-center shadow-md ${
            isFormValid ? 'bg-blue-600' : 'bg-gray-300'
          }`}
          onPress={handleSubmit}
          disabled={!isFormValid}
          activeOpacity={0.8}
        >
          <MaterialIcons name="check-circle" size={24} color="#fff" />
          <Text className="text-white text-lg font-semibold ml-2">
            Continue to KhelSetu
          </Text>
        </TouchableOpacity>

        <View className="h-8" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

interface InputFieldProps {
  icon: any;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  multiline?: boolean;
}

function InputField({ icon, placeholder, value, onChangeText, keyboardType = 'default', multiline = false }: InputFieldProps) {
  return (
    <View className="mb-4">
      <View className="flex-row items-center border-b border-gray-300 pb-2">
        <MaterialIcons name={icon} size={24} color="#1976D2" />
        <TextInput
          className="flex-1 ml-3 text-base text-gray-900"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={multiline ? 2 : 1}
        />
      </View>
    </View>
  );
}
