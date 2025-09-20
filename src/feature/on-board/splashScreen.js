import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AppColors from '../../utils/appColors';

export default function SplashScreen() {
  const navigation = useNavigation();

  // Animations
  const scaleAnim = useRef(new Animated.Value(0)).current; // logo scale
  const opacityAnim = useRef(new Animated.Value(0)).current; // logo opacity
  const textTranslateY = useRef(new Animated.Value(30)).current; // text slide up
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Run animations
    Animated.sequence([
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          speed: 10,
          bounciness: 12,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Navigate after 2.5 seconds
    const timer = setTimeout(() => {
        navigation.replace("Auth");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Animated Logo */}
      <Animated.Image
        source={require("../../../assets/logo/app_icon.png")}
        style={[
          styles.logo,
          {
            opacity: opacityAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />

      {/* Animated App Name */}
      <Animated.Text
        style={[
          styles.appName,
          {
            opacity: textOpacity,
            transform: [{ translateY: textTranslateY }],
          },
        ]}
      >
        Study Mitra
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.purpleDark, // Splash background
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  appName: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: AppColors.white,
  },
});
