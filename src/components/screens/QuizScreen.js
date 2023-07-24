import { Text, SafeAreaView, View, Image } from 'react-native';
import React, { useState, useEffect, useReducer } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Raleway } from '@expo-google-fonts/offside';
import { useNavigation } from '@react-navigation/native';
import { getData } from '../../API/api_calls';
import styles from '../../styles/Styles';
import MultiChoiceQuestion from '../MultiChoiceQuestion';
import BooleanQuestion from '../BooleanQuestion';
import Timer from '../Timer';

const initialState = { answers: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      state.answers.push(action.payload);
      return { ...state, answers: state.answers };
  }
}

const QuizScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState({});
  const [queInd, setQueInd] = useState(0); //index of the question
  const [currentScore, setCurrentScore] = useState(0); //points
  const [answers, answersDispatch] = useReducer(reducer, initialState);

  let [fontsLoaded] = useFonts({
    'Raleway-ExtraBold': Raleway,
  });

  if (fontsLoaded) return <AppLoading />;

  const dataRequest = async () => {
    const queryResult = await getData();
    setData(queryResult.data.results);
  };

  //progress bar
  const progress = Math.floor((queInd / data.length) * 100);

  // first render - data from API
  useEffect(() => {
    dataRequest();
  }, []);

  // check arrived data using deps => [data]
  useEffect(() => {
    if (Object.keys(data).length === 0) return;
  }, [data]);

  const showContent = () => {
    if (queInd < data.length) {
      if (Object.keys(data).length === 0) return <Text>Loading...</Text>;
      if (data[queInd]?.type === 'multiple') {
        return <MultiChoiceQuestion chooseAnswer={chooseAnswer} question={data[queInd]} />;
      } else {
        return <BooleanQuestion chooseAnswer={chooseAnswer} question={data[queInd]} />;
      }
    }
  };

  //screen Results
  useEffect(() => {
    if (queInd == data.length) {
      navigation.navigate('ResultsScreen', {
        answers: answers,
        currentScore: currentScore,
      });
    }
  }, [queInd]);

  //answer status
  const chooseAnswer = (result, answer) => {
    const answerObj = {
      question: data[queInd].question,
      userAnswer: answer,
      correctAnswer: data[queInd].correct_answer,
    };
    answersDispatch({ type: 'add', payload: answerObj });
    setCurrentScore(currentScore + result);
    setQueInd(queInd + 1);
  };

  const timeout = () => {
    setQueInd(queInd + 1);
  };

  const startTimer = () => {
    if (queInd < 10) return 30;
    if (queInd < 15) return 15;
    return 10;
  };

  return (
    <SafeAreaView
      style={{ flexDirection: 'column', flex: 1, width: ' 100%' }}
      forceInset={{ bottom: 'never' }}>
      <View style={styles.navBar}>
        <Text style={[styles.navTxt, styles.ralewayExtraBold]}>
          Question {queInd != data.length ? queInd + 1 : data.length} / {data.length}
        </Text>
        <Image style={styles.imgLittleLogo} source={require('../../../assets/logo.png')} />
      </View>

      <View style={styles.progressView}>
        <Text style={[styles.progressTxt, { width: `${progress}%` }]}></Text>
      </View>

      <View style={{ width: '100%', padding: 20 }}>
        <Text style={styles.txtLevel}>
          Level: <Text style={styles.difficulty}>{data?.[queInd]?.difficulty}</Text>
        </Text>
      </View>

      <Text style={styles.scores}>Score: {currentScore}</Text>
      <View style={{ width: '100%', height: '60%' }}>{showContent()}</View>
      <View style={{ alignSelf: 'center', position: 'absolute', bottom: '5%' }}>
        <Timer start={startTimer()} timeout={timeout} queInd={queInd} />
      </View>
    </SafeAreaView>
  );
};
export default QuizScreen;
