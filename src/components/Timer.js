import React, { useState, useEffect, useNavigation } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from '../styles/Styles';

const Timer = (props) => {
  const [counter, setCounter] = useState(props.start); //start timer

  let interval = null;

  useEffect(() => {
    const myInterval = () => {
      if (props.queInd != 20) {
        if (counter > 0) {
          setCounter(counter - 1);
        }
        if (counter == 0) {
          setCounter(props.start);
          props.timeout();
        }
      } else {
        clearTimeout(interval);
      }
    };

    interval = setTimeout(myInterval, 1000);

    //cleanup
    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  //reset timer for next question
  useEffect(() => {
    if (!interval) setCounter(props.start);
  }, [props.queInd]);

  return (
    <SafeAreaView>
      <View style={styles.timerContainer}>
        <Text style={styles.txtTimer}>{counter}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Timer;
