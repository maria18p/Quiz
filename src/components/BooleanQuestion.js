import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../styles/Styles';

const MultiChoiceQuestion = (props) => {
  const generateQuestionAnswers = () => {
    let allAnswers = [];
    for (const answer of props.question.incorrect_answers) allAnswers.push(answer);
    allAnswers.push(props.question.correct_answer);
    allAnswers = allAnswers.sort(function () {
      return Math.random() - 0.5;
    });
    return (
      <View style={{ padding: 20 }}>
        {allAnswers.map((item, index) => {
          return (
            <TouchableOpacity key={index.toString()} onPress={() => chooseAnswer(item)}>
              <Text style={[styles.queContainer, styles.txtAnswers]}>{item} </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const chooseAnswer = (answer) => {
    props.chooseAnswer(answer === props.question.correct_answer ? 1 : 0, answer);
  };

  return (
    <View>
      <Text style={styles.queBody}>{props.question.question}</Text>
      {generateQuestionAnswers()}
    </View>
  );
};

export default MultiChoiceQuestion;
