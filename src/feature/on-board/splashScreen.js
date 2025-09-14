import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View ,StyleSheet, Text} from 'react-native';


export default function SplashScreen() {
   const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            // Navigate to the next screen after 3 seconds
            navigation.replace("Main");
        }, 3000);

        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, [navigation]);
    return <View style= {styles.container} >
        <Text>SplashScreen </Text>
    </View>;

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }
})