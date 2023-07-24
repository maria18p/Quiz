import React from 'react';
import { Image, Text, SafeAreaView, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Raleway } from '@expo-google-fonts/offside';
import { useRoute } from '@react-navigation/native';
import styles from '../../styles/Styles';

const ResultsScreen = () => {
  let [fontsLoaded] = useFonts({
    'Raleway-Bold': Raleway,
  });
  if (fontsLoaded) return <AppLoading />;

  const route = useRoute();

  const checkResultScores = () => {
    return route.params.currentScore === route.params.answers.length;
  };

  return (
    <SafeAreaView style={styles.safeAreaResultsScreen}>
      <View
        style={[
          styles.navBarScreenResults,
          checkResultScores() ? styles.colorGreat : styles.colorFailed,
        ]}>
        <View style={styles.queAnsweredContainer}>
          <Text style={styles.queAnswered}>Your Scores</Text>
          <Text style={styles.queAnswered}>{route.params.currentScore} / 20</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {checkResultScores() ? (
          <Text style={[styles.jobTxt]}>
            GREAT JOB{`${'\n'}`}
            <Text style={{ fontSize: 20, fontFamily: 'Raleway-Light' }}>
              You answered all the questions correctly
            </Text>
          </Text>
        ) : (
          <Text style={[styles.jobTxt, { color: 'red' }]}>
            FAILED{`${'\n'}`}
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Raleway-Light',
                color: 'black',
                margin: 20,
              }}>
              You need to answer 10 correct answers
            </Text>
          </Text>
        )}
      </View>
      <View style={styles.logoResultsContainer}>
        {!checkResultScores() ? (
          <View style={styles.imgLogoResults}>
            <Image source={require('../../../assets/failed_character.png')} />
          </View>
        ) : (
          <View style={styles.imgLogoResults}>
            <Image
              style={styles.logoResults}
              source={require('../../../assets/success_character.png')}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ResultsScreen;
