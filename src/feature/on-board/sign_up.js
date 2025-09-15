import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert, Pressable } from "react-native";
import AppColors from '../../utils/appColors';
import AppString from '../../utils/appStrings'
import CustomInput from '../../commanComponents/CustomInput'
import SubmitButton from '../../commanComponents/CustomButton'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function SignUp() {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userConformPassword, setUerConformPassword] = useState('')

   function submit(){
       Alert.alert("Submit")
    }
    return <SafeAreaProvider style={styles.mainContainer}>
        <ScrollView>
            <View style={{ alignItems: "center", paddingTop: 40 }}>
                <Image source={{ uri: 'https://i.pravatar.cc/300' }} height={200} width={200} />
                <Text style={{fontWeight:"600", fontSize:14, color: "#491B6D"}}>{AppString.CREACT_ACC}</Text>
            </View>
            <View>
                <CustomInput
                    label="Name"
                    value={userName}
                    onChangeText={(value) => setUserName(value)}
                    placeholder="Enter your name"
                    keyboardType="email-address"
                />

                <CustomInput
                    label="Email Address"
                    value={userEmail}
                    onChangeText={(value)=>setUserEmail(value)}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />
                <CustomInput
                    label="Password"
                    value={userPassword}
                    onChangeText={(value)=> setUserPassword(value)}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    secureTextEntry={true}
                />
                <CustomInput
                    label="Conform Password"
                    value={userConformPassword}
                    onChangeText={(value)=>setUerConformPassword(value)}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    secureTextEntry={true}
                />
            </View>
            <SubmitButton
                title={'Submit'}
                onPress={submit} />
                <Pressable onPress={Alert.alert()}>
                <Text style={{alignSelf:"center",color:AppColors.purpleDark}}>{AppString.ALLREADY_HAVE_ACC}</Text>
                </Pressable>
        </ScrollView>
    </SafeAreaProvider>
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppColors.white,
        height: '100%',
        paddingLeft: 12,
        paddingRight: 12
    }
})