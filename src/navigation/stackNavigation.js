import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={SignIn} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}



 function SignIn({bgColor}) {
    return <View style={{backgroundColor:bgColor,height:'100%',width:'100%'}}>
       <Text style={{color:'black'}}>SignIn Screen</Text>
    </View>
}