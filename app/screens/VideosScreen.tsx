import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Badge, Card } from '../../src/components/MaterialUI';
import { mockVideos, Video } from '../../src/utils/mockData';

export default function VideosScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const uploadedVideos = mockVideos.filter(v => v.status === 'uploaded');
  const pendingVideos = mockVideos.filter(v => v.status !== 'uploaded');

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-blue-600 pt-12 pb-6 px-6">
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex-1">
            <Text className="text-3xl font-bold text-white mb-2">Videos</Text>
            <Text className="text-blue-100">Manage your training videos</Text>
          </View>
          <TouchableOpacity className="bg-white rounded-full p-3">
            <MaterialIcons name="add" size={24} color="#1976D2" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        className="flex-1 px-4 py-4"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Statistics */}
        <Card className="bg-blue-50 mb-4">
          <View className="flex-row justify-around">
            <StatItem icon="video-library" label="Total" value={mockVideos.length.toString()} />
            <StatItem icon="cloud-done" label="Uploaded" value={uploadedVideos.length.toString()} />
            <StatItem icon="cloud-upload" label="Pending" value={pendingVideos.length.toString()} />
          </View>
        </Card>

        {/* Uploaded Videos */}
        {uploadedVideos.length > 0 && (
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-900 mb-3">Uploaded</Text>
            {uploadedVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </View>
        )}

        {/* Pending/Processing Videos */}
        {pendingVideos.length > 0 && (
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-900 mb-3">Processing & Pending</Text>
            {pendingVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

function StatItem({ icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <View className="items-center">
      <MaterialIcons name={icon} size={28} color="#1976D2" />
      <Text className="text-2xl font-bold text-gray-900 mt-1">{value}</Text>
      <Text className="text-sm text-gray-600">{label}</Text>
    </View>
  );
}

function VideoCard({ video }: { video: Video }) {
  const getStatusVariant = (status: Video['status']) => {
    switch (status) {
      case 'uploaded': return 'success';
      case 'processing': return 'warning';
      case 'pending': return 'info';
      case 'failed': return 'error';
    }
  };

  const getStatusIcon = (status: Video['status']) => {
    switch (status) {
      case 'uploaded': return 'check-circle';
      case 'processing': return 'sync';
      case 'pending': return 'schedule';
      case 'failed': return 'error';
    }
  };

  return (
    <Card onPress={() => console.log('Video pressed:', video.id)}>
      <View className="flex-row">
        {/* Thumbnail Placeholder */}
        <View className="w-24 h-24 bg-gray-300 rounded-lg items-center justify-center mr-3">
          <MaterialIcons name="play-circle-filled" size={40} color="#fff" />
          <Text className="text-white text-xs mt-1">{video.duration}</Text>
        </View>

        {/* Video Info */}
        <View className="flex-1">
          <View className="flex-row justify-between items-start mb-2">
            <Text className="text-base font-bold text-gray-900 flex-1" numberOfLines={2}>
              {video.title}
            </Text>
            <Badge text={video.status.toUpperCase()} variant={getStatusVariant(video.status)} />
          </View>

          <View className="flex-row items-center mb-1">
            <MaterialIcons name="sports" size={14} color="#757575" />
            <Text className="text-sm text-gray-600 ml-1">{video.sport}</Text>
          </View>

          <View className="flex-row items-center mb-1">
            <MaterialIcons name="calendar-today" size={14} color="#757575" />
            <Text className="text-sm text-gray-600 ml-1">{video.uploadDate}</Text>
          </View>

          <View className="flex-row items-center mt-2">
            <MaterialIcons name={getStatusIcon(video.status)} size={16} color="#1976D2" />
            <Text className="text-xs text-gray-500 ml-1">
              {video.status === 'uploaded' && 'Ready to view'}
              {video.status === 'processing' && 'Processing video...'}
              {video.status === 'pending' && 'Waiting to upload'}
              {video.status === 'failed' && 'Upload failed - Tap to retry'}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
}