import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Alert } from "react-native";
import HeaderTop from "../headerTop.js/HeaderTop";

import color from '../../colorStore';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import engQuest from '../../data/vocabularyData';
const scoreStore = {
  totalScore: 0,
  correctCount: 0,
  wrongCount: 0
};
import engQuest2 from '../../data/json'

export default LearningScreen = ({ navigation, props }) => {
  const [dailyScore, setDailyScore] = useState(0);

  const random = Math.floor(Math.random() * Object.keys(engQuest).length) + 1;
  const [questNum, setQuestNum] = useState(random);

  const [A, setA] = useState(engQuest[questNum].ansA);
  const [B, setB] = useState(engQuest[questNum].ansB);
  const [C, setC] = useState(engQuest[questNum].ansC);
  const [D, setD] = useState(engQuest[questNum].ansD);

  const activeBtnText = 'Hoàn tất và lưu điểm của Khôi';
  const inactiveBtnText = 'Đã lưu điểm bài thi';

  const [isSaved, setIsSaved] = useState(false);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://6268162901dab900f1c9969b.mockapi.io/appi/v1/engQuest');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(`quest number:`, questNum);
  console.log('new:', data["ansA"]);
  console.log('string:', questNum.toString());
  // console.log('anA:', engQuest2[questNum].ansA);
  console.log('quest num', typeof questNum);

  const handleRandom = () => {
    const random2 = Math.floor(Math.random() * Object.keys(engQuest).length) + 1;
    setQuestNum(random2);
    setIsSaved(false);

  };
  const setAnswer = () => {
    setA(engQuest[questNum].ansA);
    setB(engQuest[questNum].ansB);
    setC(engQuest[questNum].ansC);
    setD(engQuest[questNum].ansD);

  };
  const handleCorrectAns = () => {
    setDailyScore(dailyScore + 1);

  };
  const handleWrongAns = () => {
    setDailyScore(dailyScore - 1);

  };
  const saveScore = () => {
    scoreStore.totalScore = scoreStore.totalScore + dailyScore;
    setDailyScore(0);
    console.log(data);

    // Alert.alert(`Saving your score...!`)
    // console.log(score);
  };
  const handlePressSaving = () => {
    setIsSaved(true);
  };

  const getValueAnswerA = () => {

    if (A === engQuest[questNum].correction) {
      // Alert.alert(`You correct! + 1 point`);
      handleCorrectAns();
      handleRandom();
      // saveScore();


    } else {
      Alert.alert('Chọn đáp án sai -1 điểm! Chọn lại đi Khôi tồ...!');
      handleWrongAns();
      // saveScore();
      setIsSaved(false);

    };

  };
  const getValueAnswerB = () => {
    if (B === engQuest[questNum].correction) {
      // Alert.alert(`You correct! + 1 point`);
      handleCorrectAns();
      handleRandom();
      // saveScore();

    } else {
      Alert.alert('Chọn đáp án sai -1 điểm! Chọn lại đi Khôi tồ...!');
      handleWrongAns();
      // saveScore();
      setIsSaved(false);


    };
  };

  const getValueAnswerC = () => {
    if (C === engQuest[questNum].correction) {
      // Alert.alert(`You correct! + 1 point`);
      handleCorrectAns();
      handleRandom();
      // saveScore();

    } else {
      Alert.alert('Chọn đáp án sai -1 điểm! Chọn lại đi Khôi tồ...!');
      handleWrongAns();
      // saveScore();
      setIsSaved(false);



    };

  };
  const getValueAnswerD = () => {
    if (D === engQuest[questNum].correction) {
      // Alert.alert(`You correct! + 1 point`);
      handleCorrectAns();
      handleRandom();
      // saveScore();

    } else {
      Alert.alert('Chọn đáp án sai -1 điểm! Chọn lại đi Khôi tồ...!');
      handleWrongAns();
      // saveScore();
      setIsSaved(false);


    };
  };
  console.log(scoreStore.totalScore);

  return (
    <View style={styles.grandContainer}>
      <HeaderTop
        backTo={() => navigation.navigate('Bottom Tab Main')}
        score={scoreStore.totalScore}
        scoreLabel={'Tổng điểm: '}
        borderWidth={2}
      />
      <View style={{ alignItems: "center", justifyContent: "center", height: 70 }}>
        <Text style={{ color: color.hackingColor, fontFamily: 'IBMPlexMono-Bold', fontSize: 25 }}>Multiple Choices Question</Text>

      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.dailyStatusBox}>
          <Text style={styles.dailyStatusText}>Số điểm hôm nay của Khôi: </Text>
          <Text style={[styles.dailyStatusText, { color: color.hackingColor, fontSize: 40 }]}>
            {dailyScore}
          </Text>
        </View>
        <View style={styles.dailyStatusBox}>
          <Text style={styles.dailyStatusText}>Total questions: </Text>
          <Text style={[styles.dailyStatusText, { color: color.hackingColor, fontSize: 40 }]}>
            {Object.keys(engQuest).length}
          </Text>
        </View>
      </View>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Splash Screen')} >
        <Text style={{ color: '#ffff' }} >Back to main page</Text>
      </TouchableOpacity> */}

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
          onPressOut={getValueAnswerA}
          onPressIn={setAnswer}
        >
          <Text style={styles.text}>{"A. " + engQuest[questNum].ansA}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressOut={getValueAnswerB}
          onPressIn={setAnswer}
          style={styles.anwserBox}
        >
          <Text style={styles.text}>{"B. " + engQuest[questNum].ansB}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressOut={getValueAnswerC}
          onPressIn={setAnswer}
          style={styles.anwserBox}
        >
          <Text style={styles.text}>{"C. " + engQuest[questNum].ansC}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.anwserBox}
          onPressIn={setAnswer}
          onPressOut={getValueAnswerD}
        >
          <Text style={styles.text}>{"D. " + engQuest[questNum].ansD}</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={[isSaved === true ? styles.inactiveBtn : styles.activeBtn, { backgroundColor: "#000000" }]}
            onPressOut={saveScore}
            onPressIn={handlePressSaving}
          >
            <Text style={isSaved === true ? styles.inactiveText : styles.activeText} >
              {isSaved === false ? activeBtnText : inactiveBtnText}
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
  activeBtn: {
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
  inactiveBtn: {
    borderWidth: 2,
    borderColor: 'gray',
    height: 50,
    width: width - 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  activeText: {
    fontSize: 19,
    color: color.hackingColor,
    fontFamily: 'IBMPlexMono-Regular',
  },
  inactiveText: {
    fontSize: 19,
    color: 'gray',
    fontFamily: 'IBMPlexMono-Regular',
  },
  dailyStatusBox: {
    width: 400,
    // borderWidth: 1,
    borderColor: '#ffff',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },
  dailyStatusText: {
    color: '#ffff',
    fontSize: 18,
    fontFamily: 'IBMPlexMono-Bold'
  },
});