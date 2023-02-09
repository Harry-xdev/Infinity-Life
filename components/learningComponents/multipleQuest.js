import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import engQuest from '../../data/vocabularyData';

export default MultipleQuest = ({ props, navigation }) => {

  const random = Math.floor(Math.random() * Object.keys(engQuest).length) + 1;
  const [questNum, setquestNum] = useState(random);

  const handleRandom = () => {
    const random2 = Math.floor(Math.random() * Object.keys(engQuest).length) + 1
    setquestNum(random2);
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

        <TouchableOpacity style={styles.anwserBox}>
          <Text style={styles.text}>{"A. " + engQuest[questNum].ansA}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.anwserBox}>
          <Text style={styles.text}>{"B. " + engQuest[questNum].ansB}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.anwserBox}>
          <Text style={styles.text}>{"C. " + engQuest[questNum].ansC}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.anwserBox}>
          <Text style={styles.text}>{"D. " + engQuest[questNum].ansD}</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={[styles.randomBtn, { backgroundColor: "pink" }]}
            onPress={handleRandom}
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

})