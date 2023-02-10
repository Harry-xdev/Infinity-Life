import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Alert } from "react-native";
import HeaderTop from "../headerTop.js/HeaderTop";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import engQuest from '../../data/vocabularyData';
const scoreStore = {
  totalScore: 0,
  correctCount: 0,
  wrongCount: 0
};

export default LearningScreen = ({ navigation, props }) => {
  const [score, setScore] = useState(0);

  const random = Math.floor(Math.random() * Object.keys(engQuest).length) + 1;
  const [questNum, setQuestNum] = useState(random);

  const [A, setA] = useState(engQuest[questNum].ansA);
  const [B, setB] = useState(engQuest[questNum].ansB);
  const [C, setC] = useState(engQuest[questNum].ansC);
  const [D, setD] = useState(engQuest[questNum].ansD);

  const handleRandom = () => {
    const random2 = Math.floor(Math.random() * Object.keys(engQuest).length) + 1;
    setQuestNum(random2);
  };
  const setAnswer = () => {
    setA(engQuest[questNum].ansA);
    setB(engQuest[questNum].ansB);
    setC(engQuest[questNum].ansC);
    setD(engQuest[questNum].ansD);
  };

  const handleCorrectAns = () => {
    setScore(score + 1);

  };

  const getValueAnswerA = () => {

    if (A === engQuest[questNum].correction) {
      Alert.alert(`You correct! + 1 point`);
      handleCorrectAns();
      // handleRandom();
    } else {
      Alert.alert('Incorrect choice, please choose again! Khôi lanh chanh!!!');
    };

  };
  const getValueAnswerB = () => {
    if (B === engQuest[questNum].correction) {
      Alert.alert(`You correct! + 1 point`);
      handleCorrectAns();
      // handleRandom();
    } else {
      Alert.alert('Incorrect choice, please choose again! Khôi lanh chanh!!!');
    };
  };

  const getValueAnswerC = () => {
    if (C === engQuest[questNum].correction) {
      Alert.alert(`You correct! + 1 point`);
      handleCorrectAns();
      // handleRandom();
    } else {
      Alert.alert('Incorrect choice, please choose again! Khôi lanh chanh!!!');
    };

  };
  const getValueAnswerD = () => {
    if (D === engQuest[questNum].correction) {
      Alert.alert(`You correct! + 1 point`);
      handleCorrectAns();
      // handleRandom();
    } else {
      Alert.alert('Incorrect choice, please choose again! Khôi lanh chanh!!!');
    };
  };

  return (
    <View style={styles.grandContainer}>
      <HeaderTop
        backTo={() => navigation.navigate('Bottom Tab Main')}
        score={score}
        scoreLabel={'Score:'}
        borderWidth={2}
      />
      <Text style={{ color: '#ffff' }}>Multiple Choices Question</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Splash Screen')} >
        <Text style={{ color: '#ffff' }} >Back to main page</Text>
      </TouchableOpacity>

      <View style={styles.container}>

        <View style={styles.questNum}>
          <Text style={styles.questNumText}>
            {'Question ' + questNum + ": "}
          </Text>
        </View>

        <View style={styles.questBox}>
          <Text style={styles.questBoxText}>{engQuest[questNum].question} </Text>
        </View>

        <TouchableOpacity
          style={styles.anwserBox}
          onPress={getValueAnswerA}
        >
          <Text style={styles.text}>{"A. " + engQuest[questNum].ansA}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={getValueAnswerB} style={styles.anwserBox}>
          <Text style={styles.text}>{"B. " + engQuest[questNum].ansB}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getValueAnswerC} style={styles.anwserBox}>
          <Text style={styles.text}>{"C. " + engQuest[questNum].ansC}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getValueAnswerD} style={styles.anwserBox}>
          <Text style={styles.text}>{"D. " + engQuest[questNum].ansD}</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={[styles.randomBtn, { backgroundColor: "pink" }]}
            onPressOut={setAnswer}
            onPressIn={handleRandom}
          >
            <Text>
              Show random question
            </Text>
          </TouchableOpacity>


        </View>



      </View>




    </View>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    backgroundColor: color.PrimeBackground,
    height: height,
  },
  pageTitle: {

  },
  headerTitle: {
    color: color.homeHeaderTitle,
    fontSize: 35,
    fontFamily: 'IBMPlexMono-Bold',
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  questNum: {
    paddingVertical: 10
  },
  questNumText: {
    color: '#ffff',
    fontSize: 25,
    fontFamily: 'IBMPlexMono-Bold'
  },
  questBox: {
    height: height / 6,
    width: width - 30,
    borderWidth: 4,
    borderColor: '#ffff',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: 'pink'
  },

  questBoxText: {
    fontSize: 23,
    color: '#000000',
    fontFamily: 'IBMPlexMono-Bold'
  },
  anwserBox: {
    borderWidth: 1,
    borderColor: '#ffff',
    height: 50,
    width: width - 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,

  },

  text: {
    fontSize: 19,
    color: '#ffff',
    fontFamily: 'IBMPlexMono-Regular',

  },
  randomBtn: {
    borderWidth: 2,
    borderColor: '#ffff',
    height: 50,
    width: width - 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  nextToPage: {
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'green',
    height: 60,
    width: 150,
    marginTop: 40,
    borderRadius: 10
  },
});