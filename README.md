# KhelSetu - Sports Assessment App 🏆

A full-featured, production-ready sports assessment application built with **React Native (Expo)**, **NativeWind**, and following **Google's Material Design principles**.

## 🎯 Features

### 📱 Complete User Flow
- **Onboarding Screen**: Beautiful introduction to KhelSetu with gradient design
- **Authentication**: Comprehensive signup form collecting user details (name, bio, age, address, etc.)
- **Secure Storage**: User data securely saved using expo-secure-store

### 🏅 Main App Features

#### 1. Events Tab
- View live sports events and assessments
- Upcoming events with detailed information
- Real-time status indicators (Live, Upcoming, Completed)
- Event details including date, time, location, and participants

#### 2. Leaderboard Tab
- Top 3 podium display with medals 🥇🥈🥉
- Complete rankings with scores
- View competitor statistics
- Filter by sports and performance metrics

#### 3. Assessments Tab
- Past assessment history with detailed analytics
- Performance metrics breakdown (Speed, Accuracy, Stamina, Technique)
- Score tracking with visual progress bars
- Personalized feedback for each assessment
- Overall statistics dashboard

#### 4. Videos Tab
- Video library management
- Upload status tracking (Uploaded, Processing, Pending, Failed)
- Video metadata (duration, sport, date)
- Quick statistics overview
- Add new video functionality

#### 5. Profile Tab
- User profile with personal information
- Quick stats overview
- Settings management
- Account preferences
- Logout functionality

## 🛠️ Tech Stack

- **Framework**: React Native with Expo (~54.0)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Navigation**: React Navigation (Native Stack & Bottom Tabs)
- **UI Components**: Material Design patterns with custom components
- **State Management**: React Hooks (useState, useEffect)
- **Secure Storage**: expo-secure-store
- **Icons**: @expo/vector-icons (Material Icons)
- **TypeScript**: Full type safety
- **Design System**: Google Material Design

## 📁 Project Structure

```
app/
├── components/
│   └── MaterialUI.tsx          # Reusable Material Design components
├── navigation/
│   └── MainTabs.tsx            # Bottom tab navigation
├── screens/
│   ├── OnboardingScreen.tsx    # App introduction
│   ├── AuthScreen.tsx          # Signup/Login form
│   ├── EventsScreen.tsx        # Sports events listing
│   ├── LeaderboardScreen.tsx   # Rankings and leaderboard
│   ├── AssessmentsScreen.tsx   # Performance analytics
│   ├── VideosScreen.tsx        # Video management
│   └── ProfileScreen.tsx       # User profile & settings
├── utils/
│   ├── mockData.ts             # Mock data for all features
│   └── storage.ts              # Secure storage utilities
├── _layout.tsx                 # Root layout
└── index.tsx                   # App entry point with navigation logic
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (or Expo Go app on physical device)


### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Run on specific platform**
   ```bash
   npm run android    # For Android
   npm run ios        # For iOS
   npm run web        # For web
   ```

## 📊 Mock Data

The app includes comprehensive mock data for:
- **4 Sports Events** (Athletics, Football, Basketball, Cricket)
- **10 Leaderboard Entries** with realistic scores
- **4 Past Assessments** with detailed metrics
- **5 Videos** with various upload statuses

## 🎨 Design Principles

### Material Design Implementation
- **Elevation & Shadows**: Cards and elevated surfaces
- **Color System**: Primary blue (#1976D2), with semantic colors
- **Typography**: Clear hierarchy with proper font weights
- **Spacing**: Consistent 8dp grid system
- **Touch Targets**: Minimum 48dp for interactive elements
- **Feedback**: Visual feedback for all interactions
- **Cards**: Material cards for content grouping
- **Bottom Navigation**: Material bottom tabs

## 🔐 Security Features

- Secure user data storage using expo-secure-store
- Encrypted data persistence
- Authentication state management
- Secure logout functionality

## 🌟 Key Features

### User Experience
- ✅ Smooth onboarding flow
- ✅ Intuitive navigation
- ✅ Pull-to-refresh on all list screens
- ✅ Material Design animations
- ✅ Responsive touch feedback
- ✅ Loading states
- ✅ Empty states with helpful messages
- ✅ Error handling

### Code Quality
- ✅ TypeScript for type safety
- ✅ Modular component architecture
- ✅ Reusable UI components
- ✅ Clean code organization

## 🎯 Future Enhancements

- Backend API integration
- Real-time event updates
- Video upload functionality
- Push notifications
- Advanced analytics
- Social features
- Performance graphs and charts

## 📄 License

This project is part of SIH 2025 (Smart India Hackathon).

---

**Built with ❤️ using React Native, Expo, and NativeWind**

