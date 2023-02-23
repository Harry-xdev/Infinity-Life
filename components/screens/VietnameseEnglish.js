import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, Dimensions, Button, TouchableOpacity, Alert } from "react-native";
import HeaderTop from "../headerTop/HeaderTop";
import { GolobalContext } from "../../Global/globalData";
import WordPicker from "./wordPicker";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default VietnameseToEnglish = ({ navigation }) => {

  const { data } = useContext(GolobalContext);
  const random = Math.floor(Math.random() * data.length) + 1;
  const [randomNumQuest, setRandomNumQuest] = useState(random);

  const [questVN, setQuestVN] = useState(data[randomNumQuest - 1]['correction']);
  const [answerEng, setAnsEng] = useState(data[randomNumQuest - 1]['question']);

  console.log('random question number:', randomNumQuest);
  console.log('questVN: ', questVN);

  const [answer, setAnswer] = useState([]);
  const [mixedAns, setMixedAns] = useState([]);

  const handleRandomQuest = () => {
    const random2 = Math.floor(Math.random() * data.length) + 1;
    setRandomNumQuest(random2);
    setQuestVN(data[randomNumQuest - 1]['correction']);
    setAnsEng(data[randomNumQuest - 1]['question']);

  };
  // const index = ['0', '1', '2', '3'];
  // const randomInx = index.sort(() => Math.random() - 0.5);
  // console.log('random index:', randomInx);
  // console.log('data 1: ', data[randomNumQuest - 1]);
  // const questionVN = 'Ngoại ngữ rất thuận tiện'
  // const correction = 'Language is much convenient';

  const part0 = answerEng.slice(0, 3);
  const part1 = answerEng.slice(3, 6);
  const part2 = answerEng.slice(6, 11);
  const part3 = answerEng.slice(11, 15);
  const part4 = answerEng.slice(15, 20);
  const part5 = answerEng.slice(20, 25);
  const part6 = answerEng.slice(25, 28);
  const part7 = answerEng.slice(28, 31);
  const part8 = answerEng.slice(31, 35);
  const part9 = answerEng.slice(35, 40);

  const correctArr = [part0, part1, part2, part3, part4, part5, part6, part7, part8, part9];



  const handleMixup = () => {
    setMixedAns(correctArr.sort(() => Math.random() - 0.5));
  };

  // correctArr.sort(() => Math.random() - 0.5);
  console.log('mixed answer:', mixedAns);

  // const handleRandomString = () => {
  //   for (let i = answer.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     let k = answer[i];
  //     answer[i] = answer[j];
  //     answer[j] = k;
  //   }
  // }

  // console.log(newArr);
  const handlePushPart0 = () => {
    setAnswer([
      ...answer,
      mixedAns[0]
    ]);
    // setLastPart(mixedAns[0]);
  };
  const handlePushPart1 = () => {
    setAnswer([
      ...answer,
      mixedAns[1]
    ]);
    // setLastPart(mixedAns[1]);


  };
  const handlePushPart2 = () => {
    setAnswer([
      ...answer,
      mixedAns[2]
    ]);
    // setLastPart(mixedAns[2]);

  };
  const handlePushPart3 = () => {
    setAnswer([
      ...answer,
      mixedAns[3]
    ]);
    // setLastPart(mixedAns[3]);


  };
  const handlePushPart4 = () => {
    setAnswer([
      ...answer,
      mixedAns[4]
    ]);
    // setLastPart(mixedAns[4]);


  };
  const handlePushPart5 = () => {
    setAnswer([
      ...answer,
      mixedAns[5]
    ]);
    // setLastPart(mixedAns[5]);

  };
  const handlePushPart6 = () => {
    setAnswer([
      ...answer,
      mixedAns[6]
    ]);
    // setLastPart(mixedAns[6]);

  };
  const handlePushPart7 = () => {
    setAnswer([
      ...answer,
      mixedAns[7]
    ]);
    // setLastPart(mixedAns[7]);


  };
  const handlePushPart8 = () => {
    setAnswer([
      ...answer,
      mixedAns[8]
    ]);
    // setLastPart(mixedAns[8]);

  };
  const handlePushPart9 = () => {
    setAnswer([
      ...answer,
      mixedAns[9]
    ]);
    // setLastPart(mixedAns[9]);


  };
  console.log('answer:', answer);

  const showAns = answer.join("");
  console.log('show answer:', showAns);

  const handleDelete = () => {
    // function deleteL1astPart(answer) {
    //   return answer !== lastPart
    // };
    // const newAnswer = answer.filter(deleteL1astPart);
    setAnswer([]);
  };

  const handleSubmitAns = () => {
    if (showAns === answerEng) {
      Alert.alert('Congrats! You are correct!')
      handleDelete();
      handleRandomQuest();
      setMixedAns(['']);

    } else {
      Alert.alert('You are wrong!');

    };
  };


  return (
    <View style={styles.grandContainer}>
      <HeaderTop backTo={() => navigation.navigate("Home")} />
      <View>
        <Text style={styles.headerTitle}>Please translate to English:</Text>
      </View>

      <View style={styles.questionSection}>
        <View>
          <Text style={styles.questionText}>{questVN}</Text>
        </View>
      </View>

      <View style={styles.answerSection}>
        <Text style={styles.answerText}>{showAns}</Text>

      </View>

      <View style={styles.letterContainer}>
        {/* <Text>Mixup words Section</Text> */}
        {/* <Text>{answer}</Text> */}
        <View style={styles.colmn1}>
          <WordPicker value={mixedAns[0]} pushValue={handlePushPart0} />
          <WordPicker value={mixedAns[1]} pushValue={handlePushPart1} />
          <WordPicker value={mixedAns[2]} pushValue={handlePushPart2} />
        </View>

        <View>
          <WordPicker value={mixedAns[3]} pushValue={handlePushPart3} />
          <WordPicker value={mixedAns[4]} pushValue={handlePushPart4} />
        </View>

        <View>
          <WordPicker value={mixedAns[5]} pushValue={handlePushPart5} />
          <WordPicker value={mixedAns[6]} pushValue={handlePushPart6} />
          <WordPicker value={mixedAns[7]} pushValue={handlePushPart7} />
        </View>

        <View>
          <WordPicker value={mixedAns[8]} pushValue={handlePushPart8} />
          <WordPicker value={mixedAns[9]} pushValue={handlePushPart9} />
        </View>


      </View>

      <Button
        title="Generate answer"
        onPress={handleMixup}
      />
      <Button title="Submit" onPress={handleSubmitAns} />
      <Button title="Delete" onPress={handleDelete} />
      <Button title="Random" onPress={handleRandomQuest} />



    </View>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    // backgroundColor: color.PrimeBackground,
    backgroundColor: color.PrimeBackground,
    height: height,
  },
  headerTitle: {
    color: color.white,
    fontSize: 28,
    fontFamily: 'IBMPlexMono-Bold',
  },
  questionSection: {
    height: 90,
    width: width - 20,
    borderWidth: 1,
    borderColor: color.white

  },
  questionText: {
    color: color.white,
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 25
  },
  answerSection: {
    height: 90,
    width: width - 20,
    borderWidth: 1,
    borderColor: color.white,
    color: color.white
  },
  answerText: {
    color: color.white,
    fontSize: 25,
    fontFamily: 'IBMPlexMono-Bold',
  },
  letterContainer: {
    height: 220,
    width: width - 20,
    borderWidth: 1,
    borderColor: color.white,
    color: color.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"

  },
  colmn1: {
    marginBottom: 40
  }


});