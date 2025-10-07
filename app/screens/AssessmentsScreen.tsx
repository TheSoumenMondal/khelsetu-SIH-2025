import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { Card, ProgressBar } from '../../src/components/MaterialUI';
import { Assessment, mockAssessments } from '../../src/utils/mockData';

export default function AssessmentsScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const averageScore = Math.round(
    mockAssessments.reduce((sum, a) => sum + a.score, 0) / mockAssessments.length
  );

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-blue-600 pt-12 pb-6 px-6">
        <Text className="text-3xl font-bold text-white mb-2">Assessments</Text>
        <Text className="text-blue-100">Your performance history and analytics</Text>
      </View>

      <ScrollView
        className="flex-1 px-4 py-4"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Statistics Card */}
        <Card className="bg-blue-50 mb-4">
          <Text className="text-lg font-bold text-gray-900 mb-4">Overall Performance</Text>
          <View className="flex-row justify-around">
            <StatItem icon="assessment" label="Total" value={mockAssessments.length.toString()} />
            <StatItem icon="trending-up" label="Avg Score" value={`${averageScore}%`} />
            <StatItem icon="sports" label="Sports" value="4" />
          </View>
        </Card>

        {/* Assessment List */}
        <Text className="text-lg font-bold text-gray-900 mb-3">Recent Assessments</Text>
        {mockAssessments.map(assessment => (
          <AssessmentCard key={assessment.id} assessment={assessment} />
        ))}
      </ScrollView>
    </View>
  );
}

function StatItem({ icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <View className="items-center">
      <MaterialIcons name={icon} size={32} color="#1976D2" />
      <Text className="text-2xl font-bold text-gray-900 mt-2">{value}</Text>
      <Text className="text-sm text-gray-600">{label}</Text>
    </View>
  );
}

function AssessmentCard({ assessment }: { assessment: Assessment }) {
  const scorePercentage = (assessment.score / assessment.maxScore) * 100;
  const scoreColor = scorePercentage >= 80 ? '#4CAF50' : scorePercentage >= 60 ? '#FF9800' : '#EF5350';

  return (
    <Card onPress={() => console.log('Assessment pressed:', assessment.id)}>
      <View className="flex-row justify-between items-start mb-3">
        <View className="flex-1">
          <Text className="text-lg font-bold text-gray-900">{assessment.title}</Text>
          <View className="flex-row items-center mt-1">
            <MaterialIcons name="sports" size={14} color="#757575" />
            <Text className="text-sm text-gray-600 ml-1">{assessment.sport}</Text>
            <MaterialIcons name="calendar-today" size={14} color="#757575" style={{ marginLeft: 8 }} />
            <Text className="text-sm text-gray-600 ml-1">{assessment.date}</Text>
          </View>
        </View>
        <View className="items-center">
          <Text className="text-2xl font-bold" style={{ color: scoreColor }}>
            {assessment.score}
          </Text>
          <Text className="text-xs text-gray-500">/{assessment.maxScore}</Text>
        </View>
      </View>

      {/* Performance Metrics */}
      <View className="mb-3">
        <Text className="text-sm font-semibold text-gray-700 mb-2">Performance Metrics</Text>
        <MetricBar label="Speed" value={assessment.metrics.speed} />
        <MetricBar label="Accuracy" value={assessment.metrics.accuracy} />
        <MetricBar label="Stamina" value={assessment.metrics.stamina} />
        <MetricBar label="Technique" value={assessment.metrics.technique} />
      </View>

      {/* Feedback */}
      <View className="bg-gray-50 rounded-lg p-3">
        <Text className="text-xs font-semibold text-gray-700 mb-1">Feedback</Text>
        <Text className="text-sm text-gray-600">{assessment.feedback}</Text>
      </View>
    </Card>
  );
}

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <View className="mb-2">
      <View className="flex-row justify-between mb-1">
        <Text className="text-xs text-gray-600">{label}</Text>
        <Text className="text-xs font-semibold text-gray-700">{value}%</Text>
      </View>
      <ProgressBar progress={value} height={6} />
    </View>
  );
}