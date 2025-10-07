# Component API Documentation

## Reusable Components

### Card Component
Location: `app/components/MaterialUI.tsx`

Material Design card with optional press interaction.

```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}
```

**Usage:**
```tsx
// Static card
<Card className="bg-blue-50">
  <Text>Card content</Text>
</Card>

// Pressable card
<Card onPress={() => console.log('Pressed')}>
  <Text>Tap me</Text>
</Card>
```

**Features:**
- Automatic elevation and shadow
- Rounded corners
- Responsive touch feedback when pressable
- Customizable with Tailwind classes

---

### Badge Component
Location: `app/components/MaterialUI.tsx`

Status badge with semantic color variants.

```typescript
interface BadgeProps {
  text: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
}
```

**Usage:**
```tsx
<Badge text="LIVE" variant="error" />
<Badge text="COMPLETED" variant="success" />
<Badge text="PENDING" variant="info" />
<Badge text="PROCESSING" variant="warning" />
```

**Variants:**
- `success`: Green background (#4CAF50)
- `warning`: Orange background (#FF9800)
- `error`: Red background (#EF5350)
- `info`: Blue background (#2196F3)

---

### Chip Component
Location: `app/components/MaterialUI.tsx`

Small compact element with icon and text.

```typescript
interface ChipProps {
  icon?: any; // MaterialIcons name
  text: string;
  iconColor?: string;
}
```

**Usage:**
```tsx
<Chip icon="sports" text="Football" />
<Chip icon="people" text="45 participants" iconColor="#FF5722" />
<Chip text="No icon chip" />
```

**Features:**
- Optional icon
- Customizable icon color
- Gray rounded background
- Compact sizing

---

### ProgressBar Component
Location: `app/components/MaterialUI.tsx`

Horizontal progress indicator.

```typescript
interface ProgressBarProps {
  progress: number; // 0-100
  color?: string;
  height?: number;
}
```

**Usage:**
```tsx
<ProgressBar progress={75} />
<ProgressBar progress={90} color="#4CAF50" height={10} />
```

**Features:**
- Smooth animated width
- Customizable color
- Customizable height
- Gray background track

---

### EmptyState Component
Location: `app/components/MaterialUI.tsx`

Empty state display with icon and message.

```typescript
interface EmptyStateProps {
  icon: any; // MaterialIcons name
  title: string;
  description: string;
}
```

**Usage:**
```tsx
<EmptyState 
  icon="event-busy"
  title="No Events"
  description="There are no events scheduled at this time."
/>
```

**Features:**
- Large centered icon
- Bold title
- Descriptive text
- Centered layout

---

## Screen Components

### OnboardingScreen
Location: `app/screens/OnboardingScreen.tsx`

First screen shown to new users.

```typescript
interface OnboardingScreenProps {
  onGetStarted: () => void;
}
```

**Features:**
- Gradient background using expo-linear-gradient
- App logo with Material Icon
- Feature list with icons
- Call-to-action button
- Version display

**Colors:**
- Gradient: #1976D2 → #1565C0 → #0D47A1

---

### AuthScreen
Location: `app/screens/AuthScreen.tsx`

Signup/login form for collecting user information.

```typescript
interface AuthScreenProps {
  onSubmit: (data: UserData) => void;
}
```

**Form Fields:**
- Name (required)
- Bio (required)
- Age (required)
- Address (required)
- Email (optional)
- Phone (optional)

**Features:**
- Keyboard-aware scrolling
- Input validation
- Material Design text inputs
- Icon-based inputs
- Disabled submit until valid
- Visual feedback

---

### EventsScreen
Location: `app/screens/EventsScreen.tsx`

Display live and upcoming sports events.

**Features:**
- Sectioned layout (Live, Upcoming)
- Pull-to-refresh
- Event cards with full details
- Status badges
- Interactive cards (tap prepared)

**Data Source:** `mockEvents` from `app/utils/mockData.ts`

---

### LeaderboardScreen
Location: `app/screens/LeaderboardScreen.tsx`

Rankings and competitor statistics.

**Features:**
- Top 3 podium display
- Medal emojis (🥇🥈🥉)
- Complete rankings
- Pull-to-refresh
- Color-coded rank badges

**Data Source:** `mockLeaderboard` from `app/utils/mockData.ts`

---

### AssessmentsScreen
Location: `app/screens/AssessmentsScreen.tsx`

Performance history and analytics.

**Features:**
- Overall statistics card
- Assessment history
- Performance metrics with progress bars
- Feedback display
- Pull-to-refresh
- Color-coded scores

**Data Source:** `mockAssessments` from `app/utils/mockData.ts`

---

### VideosScreen
Location: `app/screens/VideosScreen.tsx`

Video library management.

**Features:**
- Statistics overview
- Sectioned by status
- Status indicators
- Thumbnail placeholders
- Add video button (FAB)
- Pull-to-refresh

**Data Source:** `mockVideos` from `app/utils/mockData.ts`

---

### ProfileScreen
Location: `app/screens/ProfileScreen.tsx`

User profile and settings.

```typescript
interface ProfileScreenProps {
  onLogout?: () => void;
}
```

**Features:**
- Profile header with avatar
- Personal information display
- Quick stats
- Settings menu
- Logout with confirmation
- Data from secure storage

**Settings Options:**
- Edit Profile
- Notifications
- Privacy & Security
- Help & Support
- About KhelSetu

---

## Navigation Components

### MainTabs
Location: `app/navigation/MainTabs.tsx`

Bottom tab navigator for main app screens.

```typescript
interface MainTabsProps {
  onLogout?: () => void;
}
```

**Tabs:**
1. Events (event icon)
2. Leaderboard (leaderboard icon)
3. Assessments (analytics icon)
4. Videos (video-library icon)
5. Profile (person icon)

**Features:**
- Material Design icons
- Active state highlighting
- Blue active color (#1976D2)
- Gray inactive color (#757575)
- No headers (custom per screen)

---

## Utility Functions

### Storage Utilities
Location: `app/utils/storage.ts`

Secure user data management using expo-secure-store.

```typescript
// Save user data
await saveUser(userData: UserData): Promise<void>

// Retrieve user data
const user = await getUser(): Promise<UserData | null>

// Remove user data (logout)
await removeUser(): Promise<void>
```

**UserData Interface:**
```typescript
interface UserData {
  name: string;
  bio: string;
  age: string;
  address: string;
  email?: string;
  phone?: string;
}
```

---

### Mock Data
Location: `app/utils/mockData.ts`

Realistic mock data for development and testing.

**Exports:**
- `mockEvents: Event[]` - 4 sports events
- `mockLeaderboard: LeaderboardEntry[]` - 10 rankings
- `mockAssessments: Assessment[]` - 4 past assessments
- `mockVideos: Video[]` - 5 video entries

**Interfaces:**
All TypeScript interfaces are exported for type safety.

---

### Theme Configuration
Location: `app/utils/theme.ts`

Centralized theme constants.

**Exports:**
- `colors` - Color palette
- `spacing` - Spacing scale
- `borderRadius` - Border radius values
- `shadows` - Shadow presets
- `typography` - Text styles

**Usage:**
```typescript
import { colors, spacing, typography } from '../utils/theme';

<View style={{ padding: spacing.md, backgroundColor: colors.primary }}>
  <Text style={typography.h1}>Hello</Text>
</View>
```

---

## Navigation Flow

### App Entry Point
Location: `app/index.tsx`

Main app component with navigation logic.

**Flow:**
1. Check for existing user (secure storage)
2. Show loading spinner during check
3. Route based on authentication state:
   - Not authenticated → Onboarding → Auth
   - Authenticated → Main tabs

**Navigation Stack:**
```
NavigationContainer
  └── Stack.Navigator
      ├── Onboarding (conditional)
      ├── Auth (conditional)
      └── Main (MainTabs) (conditional)
```

---

## Best Practices

### Component Usage

1. **Always use TypeScript types**
   ```typescript
   import { Event } from '../utils/mockData';
   const event: Event = {...};
   ```

2. **Use reusable components**
   ```tsx
   import { Card, Badge } from '../components/MaterialUI';
   ```

3. **Follow Material Design**
   - Use proper elevation
   - Maintain 8dp spacing
   - Use semantic colors

4. **Handle loading states**
   ```tsx
   const [loading, setLoading] = useState(false);
   ```

5. **Add pull-to-refresh**
   ```tsx
   <ScrollView
     refreshControl={
       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
     }
   >
   ```

### Styling

1. **Use NativeWind (Tailwind) classes**
   ```tsx
   <View className="flex-1 bg-gray-50 px-4">
   ```

2. **Combine with inline styles when needed**
   ```tsx
   <View className="flex-1" style={{ paddingTop: insets.top }}>
   ```

3. **Use theme constants**
   ```typescript
   import { colors } from '../utils/theme';
   style={{ color: colors.primary }}
   ```

### Navigation

1. **Pass props to screens**
   ```tsx
   <Tab.Screen name="Profile">
     {() => <ProfileScreen onLogout={handleLogout} />}
   </Tab.Screen>
   ```

2. **Use TypeScript for navigation types**
   ```typescript
   interface ScreenProps {
     navigation: any; // Or use typed navigation
   }
   ```

### Data Management

1. **Use async/await for storage**
   ```typescript
   const user = await getUser();
   ```

2. **Handle errors gracefully**
   ```typescript
   try {
     await saveUser(data);
   } catch (error) {
     console.error('Save failed:', error);
   }
   ```

3. **Update state properly**
   ```typescript
   const [data, setData] = useState<Type[]>([]);
   ```

---

## Testing Components

### Manual Testing Checklist

- [ ] Component renders without errors
- [ ] Props are properly typed
- [ ] Touch interactions work
- [ ] Visual feedback is visible
- [ ] Loading states display correctly
- [ ] Error states are handled
- [ ] Works on both iOS and Android
- [ ] Responsive on different screen sizes

### Console Logging

Add logs for debugging:
```typescript
console.log('Component mounted');
console.log('Data:', data);
console.log('User pressed:', item.id);
```

---

## Performance Tips

1. **Use React.memo for expensive components**
2. **Avoid inline function definitions in render**
3. **Use FlatList for long lists (future enhancement)**
4. **Optimize images and assets**
5. **Minimize re-renders**

---

**This documentation covers all components and utilities in the KhelSetu app! 📚**
