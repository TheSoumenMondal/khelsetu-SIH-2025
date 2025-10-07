KhelSetu - Sports Assessment App

KhelSetu is a production-ready sports assessment application built with React Native (Expo) and NativeWind, following Google’s Material Design principles for a clean, functional, and modern interface.

Features

User Flow

Onboarding: Introductory screen that explains the app’s purpose and features.

Authentication: Signup and login screens collecting user details (name, bio, age, address, etc.).

Secure Storage: All user data stored securely using expo-secure-store.


Main Sections

Events

Browse live and upcoming sports events with detailed information including date, time, location, and participants.

Real-time status indicators (Live, Upcoming, Completed).


Leaderboard

Rankings with podium view for top performers.

Filter results by sport or performance metric.

View detailed individual statistics and scores.


Assessments

Track past assessment history with key performance metrics (speed, accuracy, stamina, technique).

View personalized feedback and progress analytics.


Videos

Manage uploaded assessment videos and monitor upload status.

View video metadata such as duration, sport, and upload date.

Add new videos with proper validation and error handling.


Profile

Manage user details and account settings.

View personal stats and preferences.

Secure logout functionality.


Technology Stack

Framework: React Native (Expo 54+)

Styling: NativeWind (Tailwind CSS for React Native)

Navigation: React Navigation (Native Stack and Bottom Tabs)

UI System: Material Design Components

State Management: React Hooks

Secure Storage: expo-secure-store

Icons: @expo/vector-icons

Language: TypeScript


Setup

Prerequisites

Node.js (v14 or higher)

npm or yarn

Expo CLI

Android Emulator, iOS Simulator, or physical device with Expo Go


Installation

npm install
npm start
npm run android    # Android  
npm run ios        # iOS  
npm run web        # Web

Mock Data

Includes sample data for:

Four sports events (Athletics, Football, Basketball, Cricket)

Ten leaderboard entries

Four past assessments

Five video uploads with various states


Design System

Consistent 8dp spacing grid

Primary color: Blue (#1976D2)

Clear typography hierarchy

Material shadows and elevation for depth

Touch targets of at least 48dp

Smooth feedback and motion transitions


Security

Secure data handling via expo-secure-store

Encrypted storage and safe authentication flow

Session management and secure logout


Future Enhancements

Backend API integration

Real-time event updates

Cloud video upload support

Push notifications

Advanced analytics and performance charts

Social engagement and friend tracking


License

Developed as part of Smart India Hackathon 2025.


---

Built with React Native, Expo, and NativeWind.

