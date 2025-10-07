# KhelSetu - Quick Start Guide

## 🚀 Running the App

### Step 1: Start the Development Server

```bash
npm start
```

This will start the Expo development server and show you a QR code.

### Step 2: Choose Your Platform

**Option A: Physical Device (Recommended for testing)**
1. Install "Expo Go" app from App Store (iOS) or Play Store (Android)
2. Scan the QR code shown in the terminal
3. The app will load on your device

**Option B: Android Emulator**
```bash
npm run android
```
Make sure you have Android Studio installed with an emulator set up.

**Option C: iOS Simulator (Mac only)**
```bash
npm run ios
```
Requires Xcode to be installed.

**Option D: Web Browser**
```bash
npm run web
```
Opens the app in your default web browser.

## 📱 Testing the App Flow

### 1. Onboarding Screen
- You'll see a beautiful gradient screen introducing KhelSetu
- Features are listed with icons
- Tap "Get Started" to proceed

### 2. Sign Up Form
- Fill in the required fields:
  - Name (e.g., "Arjun Sharma")
  - Bio (e.g., "Passionate cricket player")
  - Age (e.g., "22")
  - Address (e.g., "Mumbai, Maharashtra")
- Optional fields: Email and Phone
- Tap "Continue to KhelSetu"

### 3. Main App
After signing up, you'll see 5 tabs at the bottom:

#### Events Tab (Default)
- View live sports events with red "LIVE" indicator
- See upcoming events
- Pull down to refresh
- Tap any event card to view details (console log)

#### Leaderboard Tab
- Top 3 performers with medals (🥇🥈🥉)
- Complete rankings list
- View scores and assessment counts
- Pull down to refresh

#### Assessments Tab
- Overall performance statistics
- View past assessment history
- Detailed metrics with progress bars
- Feedback for each assessment
- Pull down to refresh

#### Videos Tab
- See uploaded videos
- Check processing/pending videos
- Upload status indicators
- Tap floating "+" button to add new videos
- Pull down to refresh

#### Profile Tab
- View your profile information
- See quick stats
- Access settings (coming soon features)
- Logout button

## 🔄 Logout and Re-login

1. Go to Profile tab
2. Tap "Logout" button at the bottom
3. Confirm logout
4. You'll be taken back to the onboarding screen
5. Your data is securely stored, so you can sign up with the same details or new ones

## 🎨 Features to Explore

### Material Design Elements
- **Cards**: All content is in elevated cards with shadows
- **Color System**: Primary blue (#1976D2) throughout
- **Icons**: Material Icons for all actions
- **Typography**: Clear hierarchy with bold headings
- **Badges**: Status indicators (Live, Uploaded, etc.)
- **Progress Bars**: Visual metrics in assessments

### Interactions
- **Pull-to-Refresh**: Available on all list screens
- **Tap Feedback**: Cards and buttons provide visual feedback
- **Navigation**: Smooth transitions between screens
- **Loading States**: Spinner shown while checking authentication
- **Empty States**: Helpful messages when no data available

## 🐛 Troubleshooting

### TypeScript Errors in IDE
If you see "Cannot find module" errors:
1. Restart VS Code
2. Or run: `npx tsc --noEmit`
3. These are usually IDE caching issues and won't affect runtime

### App Won't Start
1. Make sure all dependencies are installed: `npm install`
2. Clear cache: `npx expo start -c`
3. Restart the development server

### Styles Not Applying
1. Make sure NativeWind is properly configured
2. Check that `global.css` is imported in `_layout.tsx`
3. Restart the development server

### Navigation Issues
If navigation isn't working:
1. Make sure all dependencies are installed
2. Check that `NavigationContainer` is properly set up
3. Restart the app

## 📝 Mock Data

The app uses realistic mock data located in `app/utils/mockData.ts`:
- 4 Sports Events (Live and Upcoming)
- 10 Leaderboard Entries
- 4 Assessment Records
- 5 Video Entries

You can modify this file to add more data or change existing data.

## 🔐 Data Persistence

User data is stored securely using expo-secure-store:
- Data persists between app restarts
- Secure encryption on device
- Cleared on logout

## 🎯 Next Steps

1. Explore all tabs and features
2. Test the pull-to-refresh functionality
3. Try the logout and re-login flow
4. View different mock data entries
5. Check responsive design on different devices

## 💡 Tips

- Use pull-to-refresh to reload data on any screen
- Tap on cards to see interaction feedback
- Check the console for debug logs when tapping items
- Test on both Android and iOS if possible
- Try different screen sizes and orientations

## 📞 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Review this guide
3. Check the main README.md for more details
4. Create an issue in the repository

---

**Enjoy exploring KhelSetu! 🏆**
