import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable, Animated } from "react-native";
import AppColors from '../../utils/appColors';
import AppString from '../../utils/appStrings'
import CustomInput from '../../commanComponents/CustomInput'
import SubmitButton from '../../commanComponents/CustomButton'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    // Animations
    const logoTranslateY = useRef(new Animated.Value(-100)).current;
    const logoOpacity = useRef(new Animated.Value(0)).current;
    const textOpacity = useRef(new Animated.Value(0)).current;
    const formTranslateY = useRef(new Animated.Value(80)).current;
    const formOpacity = useRef(new Animated.Value(0)).current;
    const buttonScale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.parallel([
                Animated.spring(logoTranslateY, {
                    toValue: 0,
                    speed: 20,
                    bounciness: 10,
                    useNativeDriver: true,
                }),
                Animated.timing(logoOpacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]),
            Animated.timing(textOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.parallel([
                Animated.spring(formTranslateY, {
                    toValue: 0,
                    speed: 18,
                    bounciness: 6,
                    useNativeDriver: true,
                }),
                Animated.timing(formOpacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    }, []);

    const handlePressIn = () => {
        Animated.spring(buttonScale, {
            toValue: 0.95,
            speed: 30,
            bounciness: 0,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(buttonScale, {
            toValue: 1,
            speed: 25,
            bounciness: 5,
            useNativeDriver: true,
        }).start();
        navigation.navigate("Main");
    };

    return (
        <SafeAreaProvider style={styles.mainContainer}>
            <ScrollView>
                <View style={{ padding: 20, paddingTop: 50 }}>

                    {/* Logo with bounce animation */}
                    <Animated.Image
                        source={require("../../../assets/logo/app_icon.png")}
                        style={{
                            width: 100,
                            height: 100,
                            alignSelf: "center",
                            opacity: logoOpacity,
                            transform: [{ translateY: logoTranslateY }]
                        }}
                    />

                    {/* Welcome text fade-in */}
                    <Animated.View style={{ opacity: textOpacity, alignItems: "center", paddingTop: 20 }}>
                        <Text style={{ fontSize: 24, color: AppColors.purpleDark }}>
                            Welcome Back!
                        </Text>
                    </Animated.View>

                    <View style={{ alignItems: "center", paddingTop: 40 }}>
                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#491B6D" }}>
                            {AppString.LOGIN_ACC}
                        </Text>
                    </View>
                </View>

                {/* Form sliding up */}
                <Animated.View
                    style={{
                        borderWidth: 2,
                        flex: 1,
                        padding: 20,
                        marginTop: 20,
                        borderRadius: 40,
                        borderColor: AppColors.purpleDark,
                        backgroundColor: AppColors.white,
                        opacity: formOpacity,
                        transform: [{ translateY: formTranslateY }]
                    }}
                >
                    <View>
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
                            placeholder="Enter your password"
                            secureTextEntry={true}
                        />
                    </View>

                    {/* Submit button with press animation */}
                    <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
                        <Pressable
                            onPressIn={handlePressIn}
                            onPressOut={handlePressOut}
                            
                        >
                            <SubmitButton title={'Login'} onPress={()=> navigation.replace("Main")}/>
                        </Pressable>
                    </Animated.View>

                    <Pressable
                        onPress={() => navigation.replace('Auth')}
                        style={{ padding: 20, alignItems: "center" }}
                    >
                        <Text style={{ alignSelf: "center", color: AppColors.purpleDark }}>
                            {AppString.DONT_HAVE_ACC}
                        </Text>
                    </Pressable>
                </Animated.View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppColors.white,
        height: '100%',
        paddingLeft: 12,
        paddingRight: 12
    }
});
