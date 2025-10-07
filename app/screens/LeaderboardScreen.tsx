import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { Card } from '../../src/components/MaterialUI';
import { LeaderboardEntry, mockLeaderboard } from '../../src/utils/mockData';

export default function LeaderboardScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-blue-600 pt-12 pb-6 px-6">
        <Text className="text-3xl font-bold text-white mb-2">Leaderboard</Text>
        <Text className="text-blue-100">Top performers across all sports</Text>
      </View>

      <ScrollView
        className="flex-1 px-4 py-4"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Top 3 Podium */}
        <View className="mb-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <Text className="text-lg font-bold text-gray-900 mb-4">🏆 Top Performers</Text>
            {mockLeaderboard.slice(0, 3).map((entry, index) => (
              <TopRankCard key={entry.id} entry={entry} index={index} />
            ))}
          </Card>
        </View>

        {/* Rest of the leaderboard */}
        <Text className="text-lg font-bold text-gray-900 mb-3">All Rankings</Text>
        {mockLeaderboard.map(entry => (
          <LeaderboardCard key={entry.id} entry={entry} />
        ))}
      </ScrollView>
    </View>
  );
}

function TopRankCard({ entry, index }: { entry: LeaderboardEntry; index: number }) {
  const medals = ['🥇', '🥈', '🥉'];
  const colors = ['text-yellow-600', 'text-gray-500', 'text-orange-600'];
  
  return (
    <View className="flex-row items-center py-3 border-b border-blue-200 last:border-b-0">
      <Text className="text-3xl mr-3">{medals[index]}</Text>
      <View className="flex-1">
        <Text className="text-lg font-bold text-gray-900">{entry.name}</Text>
        <Text className="text-sm text-gray-600">{entry.sport}</Text>
      </View>
      <View className="items-end">
        <Text className={`text-xl font-bold ${colors[index]}`}>{entry.score}</Text>
        <Text className="text-xs text-gray-500">{entry.assessments} assessments</Text>
      </View>
    </View>
  );
}

function LeaderboardCard({ entry }: { entry: LeaderboardEntry }) {
  const getRankColor = (rank: number) => {
    if (rank <= 3) return 'bg-blue-600';
    if (rank <= 5) return 'bg-blue-500';
    return 'bg-gray-400';
  };

  return (
    <Card>
      <View className="flex-row items-center">
        <View className={`w-10 h-10 rounded-full ${getRankColor(entry.rank)} items-center justify-center mr-3`}>
          <Text className="text-white font-bold">{entry.rank}</Text>
        </View>
        
        <View className="flex-1">
          <Text className="text-base font-bold text-gray-900">{entry.name}</Text>
          <View className="flex-row items-center mt-1">
            <MaterialIcons name="sports" size={14} color="#757575" />
            <Text className="text-sm text-gray-600 ml-1">{entry.sport}</Text>
            <Text className="text-sm text-gray-400 ml-2">• {entry.assessments} assessments</Text>
          </View>
        </View>
        
        <View className="items-end">
          <Text className="text-xl font-bold text-blue-600">{entry.score}</Text>
          <Text className="text-xs text-gray-500">points</Text>
        </View>
      </View>
    </Card>
  );
}