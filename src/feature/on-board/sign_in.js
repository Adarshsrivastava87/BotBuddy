import React from 'react';
import { View, Text } from "react-native";
import AppColors from '../../utils/appColors';

export default function SignIn() {
    return <View style={{backgroundColor:AppColors.white,height:'100%',width:'100%'}}>
       <Text style={{color:'black'}}>SignIn Screen</Text>
    </View>
}