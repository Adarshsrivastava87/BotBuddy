/**  this is the hame page for chat feature */

import React from 'react';
import { View, Text , StyleSheet} from "react-native";
import AppColors from '../../utils/appColors';

export default function ChatHomeScreen() {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chat Home Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppColors.white,
        height: '100%',
        paddingLeft:12,
        paddingRight:12
    }
})