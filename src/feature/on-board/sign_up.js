import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert, Pressable, Animated, Modal } from "react-native";
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
    const translateY = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        start()
        startOpacity()
    }, [])

    function start() {
        console.log("Start")
        Animated.timing(translateY, {
            toValue: -100,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    function startOpacity() {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: 300,
            useNativeDriver: true
        }).start()
    }

    function submit() {
        Alert.alert("Submit")
    }

    return <SafeAreaProvider style={styles.mainContainer}>
        <ScrollView>
        <View style={{ padding: 20, paddingTop: 50 }}>
            <Image
                source={require("../../../assets/logo/app_icon.png")}
                style={{ width: 100, height: 100, alignSelf: "center" }}
            />
            <Animated.View style={{ opacity: opacity, alignItems: "center", paddingTop: 20 }}>
                <Text style={{ fontSize: 24, color: AppColors.purpleDark }}>Welcome To You Study Mitra</Text>
            </Animated.View>
            <View style={{ alignItems: "center", paddingTop: 40 }}>
                <Text style={{ fontWeight: "600", fontSize: 14, color: "#491B6D" }}>{AppString.CREACT_ACC}</Text>
            </View>
        </View>
        
        <View style ={{borderWidth:2 , flex:2 ,padding:20,marginTop:20,borderRadius:40, elevation:10, borderColor:AppColors.purpleDark}}>
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
                    onChangeText={(value) => setUserEmail(value)}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />
                <CustomInput
                    label="Password"
                    value={userPassword}
                    onChangeText={(value) => setUserPassword(value)}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    secureTextEntry={true}
                />
                <CustomInput
                    label="Conform Password"
                    value={userConformPassword}
                    onChangeText={(value) => setUerConformPassword(value)}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    secureTextEntry={true}
                />
            </View>
            <SubmitButton
                title={'Submit'}
                onPress={submit} />
            <Pressable onPress={() => Alert.alert("Login")}>
                <Text style={{ alignSelf: "center", color: AppColors.purpleDark }}>{AppString.ALLREADY_HAVE_ACC}</Text>
            </Pressable>
            
            </View>
            </ScrollView>
        
    </SafeAreaProvider>
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppColors.white,
        height: '100%',
        paddingLeft:12,
        paddingRight:12
    }
})