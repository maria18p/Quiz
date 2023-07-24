import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Raleway } from '@expo-google-fonts/offside';

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    'Raleway-Bold': Raleway,
  });
  if (fontsLoaded) return <AppLoading />;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <Image source={require('../../../assets/splash_logo.png')} />
        <View>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Quiz')}>
            <Text style={styles.raleway_bold}>Let's Play</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#6CD4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 150,
    justifyContent: 'space-between',
    marginBottom: 30,
    alignItem: 'center',
    alignItems: 'center',
  },
  button: {
    alignItem: 'center',
    backgroundColor: '#ffff',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    marginBottom: 30,
  },
  raleway_bold: {
    fontSize: 35,
    color: '#666370',
    fontFamily: 'Raleway-Bold',
  },
});
