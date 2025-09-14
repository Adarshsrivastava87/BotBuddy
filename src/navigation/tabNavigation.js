import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './stackNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="ChatWithAi" component={StackNavigator} />
      <Tab.Screen name="FeedStack" component={StackNavigator} options={{ title: "Feed" }} />
    </Tab.Navigator>
  );
}
