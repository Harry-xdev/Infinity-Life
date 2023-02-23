import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, Dimensions, Button, Touchable, TouchableOpacity, Alert } from "react-native";
import HeaderTop from "../headerTop/HeaderTop";
import { GolobalContext } from "../../Global/globalData";
import WordPicker from "./wordPicker";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default VietnameseToEnglish = ({ navigation }) => {
  const { data } = useContext(GolobalContext);
  const random = Math.floor(Math.random() * (data.length + 1)) ;
  console.log('random: ', random);
  console.log('data length: ', data.length);
  const [answer, setAnswer] = useState([]);
  const [questVN, setQuestVN] = useState('');
  const [mixedAns, setMixedAns] = useState([]);

  // const index = ['0', '1', '2', '3'];
  // const randomInx = index.sort(() => Math.random() - 0.5);
  // console.log('random index:', randomInx);

  const questionVN = 'Ngoại ngữ rất thuận tiện'
  const correction = 'Language is much convenient';

  // const part0 = correction.slice(0, 3);
  // const part1 = correction.slice(3, 6);
  // const part2 = correction.slice(6, 9);
  // const part3 = correction.slice(9, 12);
  // const part4 = correction.slice(12, 15);
  // const part5 = correction.slice(15, 18);
  // const part6 = correction.slice(18, 21);
  // const part7 = correction.slice(21, 24);
  // const part8 = correction.slice(24, 27);
  // const part9 = correction.slice(27, 30);

  const part0 = correction.slice(0, 3);
  const part1 = correction.slice(3, 6);
  const part2 = correction.slice(6, 11);
  const part3 = correction.slice(11, 18);
  const part4 = correction.slice(18, 22);
  const part5 = correction.slice(22, 25);
  const part6 = correction.slice(25, 28);
  const part7 = correction.slice(28, 31);
  const part8 = correction.slice(31, 35);
  const part9 = correction.slice(35, 40);

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
    showAns === correction ? Alert.alert('Congrats! You are correct!') : Alert.alert('You are wrong!');
  };
  return (
    <View style={styles.grandContainer}>
      <HeaderTop backTo={() => navigation.navigate("Home")} />
      <View>
        <Text style={styles.headerTitle}>Please translate to English:</Text>
      </View>

      <View style={styles.questionSection}>
        <View>
          <Text style={{ color: color.white }}>{questionVN}</Text>
        </View>
      </View>

      <View style={styles.answerSection}>
        <Text style={{ color: color.white }}>{showAns}</Text>

      </View>

      <View style={{ flexDirection: "row" }}>
        {/* <Text>Mixup words Section</Text> */}
        {/* <Text>{answer}</Text> */}
        <View>
          <WordPicker value={mixedAns[0]} pushValue={handlePushPart0} />
          <WordPicker value={mixedAns[1]} pushValue={handlePushPart1} />
          <WordPicker value={mixedAns[2]} pushValue={handlePushPart2} />
          <WordPicker value={mixedAns[3]} pushValue={handlePushPart3} />
          <WordPicker value={mixedAns[4]} pushValue={handlePushPart4} />

        </View>
        <View>
          <WordPicker value={mixedAns[5]} pushValue={handlePushPart5} />
          <WordPicker value={mixedAns[6]} pushValue={handlePushPart6} />
          <WordPicker value={mixedAns[7]} pushValue={handlePushPart7} />
          <WordPicker value={mixedAns[8]} pushValue={handlePushPart8} />
          <WordPicker value={mixedAns[9]} pushValue={handlePushPart9} />
        </View>




        {/* <WordPicker letter={part4} /> */}

      </View>

      <Button
        title="Generate answer"
        onPress={handleMixup}
      />
      <Button title="Submit" onPress={handleSubmitAns} />
      <Button title="Delete" onPress={handleDelete} />



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
    fontSize: 22,
    fontFamily: 'IBMPlexMono-Bold',
  },
  questionSection: {
    height: 150,
    width: width - 20,
    borderWidth: 1,
    borderColor: color.white

  },
  answerSection: {
    height: 150,
    width: width - 20,
    borderWidth: 1,
    borderColor: color.white,
    color: color.white


  },


});