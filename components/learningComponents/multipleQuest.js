
import React, { useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import engQuest from '../../data/Khoi-Vocabulary';

export default MultipleQuest = ({ props, navigation }) => {

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

  const handleCorrectAns = (props) => {
    props.scoreTest + 1
  }

  const getValueAnswerA = () => {
    A === engQuest[questNum].correction ? handleCorrectAns() : Alert.alert('Wrong');

  };
  const getValueAnswerB = () => {
    B === engQuest[questNum].correction ? handleCorrectAns() : Alert.alert('Wrong');

  };
  const getValueAnswerC = () => {
    C === engQuest[questNum].correction ? handleCorrectAns() : Alert.alert('Wrong');

  };
  const getValueAnswerD = () => {
    D === engQuest[questNum].correction ? handleCorrectAns() : Alert.alert('Wrong');

  };

  return (
    <View>

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

