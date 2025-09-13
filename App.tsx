import { ScrollView, StatusBar, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import SignIn from "./src/feature/sign-in/sign_in";


function App() {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <SignIn bgColor={'red'} />
      </View>
      <View style={{ flex: 3, backgroundColor: 'red' }}>
        <SignIn bgColor={"blue"} />
      </View>
    </SafeAreaProvider>
  );
}

export default App;