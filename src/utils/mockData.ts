// Mock data for the KhelSetu app

export interface Event {
  id: string;
  title: string;
  sport: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  status: 'live' | 'upcoming' | 'completed';
  description: string;
}

export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  sport: string;
  score: number;
  assessments: number;
  avatar?: string;
}

export interface Assessment {
  id: string;
  title: string;
  sport: string;
  date: string;
  score: number;
  maxScore: number;
  metrics: {
    speed: number;
    accuracy: number;
    stamina: number;
    technique: number;
  };
  feedback: string;
}

export interface Video {
  id: string;
  title: string;
  sport: string;
  uploadDate: string;
  status: 'uploaded' | 'pending' | 'processing' | 'failed';
  duration: string;
  thumbnailUrl?: string;
}

// Mock Events Data
export const mockEvents: Event[] = [
  {
    id: '1',
    title: '100m Sprint Assessment',
    sport: 'Athletics',
    date: '2025-10-10',
    time: '10:00 AM',
    location: 'National Stadium',
    participants: 45,
    status: 'live',
    description: 'Live sprint assessment for athletes. Timing and performance metrics will be recorded.',
  },
  {
    id: '2',
    title: 'Football Skills Challenge',
    sport: 'Football',
    date: '2025-10-12',
    time: '3:00 PM',
    location: 'City Sports Complex',
    participants: 32,
    status: 'upcoming',
    description: 'Test your dribbling, passing, and shooting skills in this comprehensive football assessment.',
  },
  {
    id: '3',
    title: 'Basketball Shooting Drill',
    sport: 'Basketball',
    date: '2025-10-15',
    time: '11:00 AM',
    location: 'Indoor Court A',
    participants: 28,
    status: 'upcoming',
    description: 'Shooting accuracy and consistency assessment for basketball players.',
  },
  {
    id: '4',
    title: 'Cricket Bowling Analysis',
    sport: 'Cricket',
    date: '2025-10-08',
    time: '2:00 PM',
    location: 'Practice Ground',
    participants: 20,
    status: 'completed',
    description: 'Advanced bowling technique analysis with speed and accuracy measurements.',
  },
];

// Mock Leaderboard Data
export const mockLeaderboard: LeaderboardEntry[] = [
  { id: '1', rank: 1, name: 'Arjun Sharma', sport: 'Athletics', score: 9850, assessments: 15 },
  { id: '2', rank: 2, name: 'Priya Patel', sport: 'Football', score: 9720, assessments: 18 },
  { id: '3', rank: 3, name: 'Rohan Kumar', sport: 'Basketball', score: 9680, assessments: 12 },
  { id: '4', rank: 4, name: 'Ananya Singh', sport: 'Cricket', score: 9540, assessments: 14 },
  { id: '5', rank: 5, name: 'Vikram Reddy', sport: 'Athletics', score: 9480, assessments: 16 },
  { id: '6', rank: 6, name: 'Sneha Gupta', sport: 'Football', score: 9350, assessments: 13 },
  { id: '7', rank: 7, name: 'Karan Mehta', sport: 'Basketball', score: 9280, assessments: 11 },
  { id: '8', rank: 8, name: 'Ishita Joshi', sport: 'Cricket', score: 9150, assessments: 10 },
  { id: '9', rank: 9, name: 'Aditya Verma', sport: 'Athletics', score: 9050, assessments: 9 },
  { id: '10', rank: 10, name: 'Riya Desai', sport: 'Football', score: 8980, assessments: 12 },
];

// Mock Assessments Data
export const mockAssessments: Assessment[] = [
  {
    id: '1',
    title: '100m Sprint - October 2025',
    sport: 'Athletics',
    date: '2025-10-05',
    score: 92,
    maxScore: 100,
    metrics: {
      speed: 95,
      accuracy: 88,
      stamina: 90,
      technique: 94,
    },
    feedback: 'Excellent performance! Your explosive start and maintaining top speed throughout were impressive. Focus on arm swing consistency for further improvement.',
  },
  {
    id: '2',
    title: 'Football Dribbling Skills',
    sport: 'Football',
    date: '2025-09-28',
    score: 85,
    maxScore: 100,
    metrics: {
      speed: 82,
      accuracy: 90,
      stamina: 88,
      technique: 80,
    },
    feedback: 'Good control and accuracy. Work on maintaining speed while dribbling through tight spaces. Your ball control is solid.',
  },
  {
    id: '3',
    title: 'Basketball Free Throws',
    sport: 'Basketball',
    date: '2025-09-20',
    score: 78,
    maxScore: 100,
    metrics: {
      speed: 70,
      accuracy: 85,
      stamina: 75,
      technique: 82,
    },
    feedback: 'Decent accuracy but inconsistent form. Focus on follow-through and elbow alignment. Practice routine will help improve consistency.',
  },
  {
    id: '4',
    title: 'Cricket Batting Technique',
    sport: 'Cricket',
    date: '2025-09-15',
    score: 88,
    maxScore: 100,
    metrics: {
      speed: 85,
      accuracy: 92,
      stamina: 86,
      technique: 89,
    },
    feedback: 'Strong technique and shot selection. Your footwork is excellent. Continue working on power hitting for boundary scoring.',
  },
];

// Mock Videos Data
export const mockVideos: Video[] = [
  {
    id: '1',
    title: '100m Sprint - Practice Session',
    sport: 'Athletics',
    uploadDate: '2025-10-06',
    status: 'uploaded',
    duration: '2:15',
  },
  {
    id: '2',
    title: 'Football Skills Montage',
    sport: 'Football',
    uploadDate: '2025-10-05',
    status: 'uploaded',
    duration: '4:30',
  },
  {
    id: '3',
    title: 'Basketball Game Highlights',
    sport: 'Basketball',
    uploadDate: '2025-10-07',
    status: 'processing',
    duration: '3:45',
  },
  {
    id: '4',
    title: 'Cricket Bowling Analysis',
    sport: 'Cricket',
    uploadDate: '2025-10-07',
    status: 'pending',
    duration: '5:20',
  },
  {
    id: '5',
    title: 'Training Session - Morning',
    sport: 'Athletics',
    uploadDate: '2025-10-06',
    status: 'failed',
    duration: '6:00',
  },
];
