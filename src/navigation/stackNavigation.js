import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import ChatHomeScreen from '../feature/ai-chat/chatHomeScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatScreen" component={ChatHomeScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}