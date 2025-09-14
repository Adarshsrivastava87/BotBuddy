import React from 'react';
import { View, Text } from "react-native";

export default function SignIn({bgColor}) {
    return <View style={{backgroundColor:bgColor,height:'100%',width:'100%'}}>
       <Text style={{color:'black'}}>SignIn Screen</Text>
    </View>
}