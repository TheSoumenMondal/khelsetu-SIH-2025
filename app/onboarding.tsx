import { useRouter } from 'expo-router';
import React from 'react';
import OnboardingScreen from '../src/screens/OnboardingScreen';


export default function Onboarding() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/auth' as any);
  };

  return <OnboardingScreen onGetStarted={handleGetStarted} />;
}
