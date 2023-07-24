import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './src/components/screens/HomeScreen';
import StackNavigator from './src/StackNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Raleway-Black': require('./assets/fonts/Raleway-Black.ttf'),
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'Raleway-ExtraBold': require('./assets/fonts/Raleway-ExtraBold.ttf'),
    'Raleway-ExtraLight': require('./assets/fonts/Raleway-ExtraLight.ttf'),
    'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
    'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
    'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
    'Raleway-SemiBoldItalic': require('./assets/fonts/Raleway-SemiBoldItalic.ttf'),
    'Raleway-VariableFont_wght': require('./assets/fonts/Raleway-VariableFont_wght.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StackNavigator>
      <SafeAreaView onLayout={onLayoutRootView}>
        <HomeScreen />
      </SafeAreaView>
    </StackNavigator>
  );
}
