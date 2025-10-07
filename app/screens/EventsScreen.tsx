import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { Badge, Card, Chip } from '../../src/components/MaterialUI';
import { Event, mockEvents } from '../../src/utils/mockData';

export default function EventsScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const liveEvents = mockEvents.filter(e => e.status === 'live');
  const upcomingEvents = mockEvents.filter(e => e.status === 'upcoming');

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-blue-600 pt-12 pb-6 px-6">
        <Text className="text-3xl font-bold text-white mb-2">Events</Text>
        <Text className="text-blue-100">Live and upcoming sports assessments</Text>
      </View>

      <ScrollView
        className="flex-1 px-4 py-4"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Live Events Section */}
        {liveEvents.length > 0 && (
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <MaterialIcons name="radio-button-checked" size={20} color="#EF5350" />
              <Text className="text-xl font-bold text-gray-900 ml-2">Live Now</Text>
            </View>
            {liveEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </View>
        )}

        {/* Upcoming Events Section */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-gray-900 mb-3">Upcoming</Text>
          {upcomingEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function EventCard({ event }: { event: Event }) {
  const statusVariant = event.status === 'live' ? 'error' : event.status === 'upcoming' ? 'info' : 'success';
  
  return (
    <Card onPress={() => console.log('Event pressed:', event.id)}>
      <View className="flex-row justify-between items-start mb-2">
        <Text className="text-lg font-bold text-gray-900 flex-1">{event.title}</Text>
        <Badge text={event.status.toUpperCase()} variant={statusVariant} />
      </View>
      
      <Text className="text-gray-600 mb-3">{event.description}</Text>
      
      <View className="flex-row flex-wrap mb-2">
        <Chip icon="sports" text={event.sport} />
        <Chip icon="people" text={`${event.participants} participants`} />
      </View>
      
      <View className="flex-row items-center mt-2">
        <MaterialIcons name="calendar-today" size={16} color="#757575" />
        <Text className="text-sm text-gray-600 ml-1">{event.date}</Text>
        <MaterialIcons name="access-time" size={16} color="#757575" style={{ marginLeft: 12 }} />
        <Text className="text-sm text-gray-600 ml-1">{event.time}</Text>
      </View>
      
      <View className="flex-row items-center mt-1">
        <MaterialIcons name="location-on" size={16} color="#757575" />
        <Text className="text-sm text-gray-600 ml-1">{event.location}</Text>
      </View>
    </Card>
  );
}