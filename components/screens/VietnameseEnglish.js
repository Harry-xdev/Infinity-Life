import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, Dimensions, Button, TouchableOpacity, Alert, Modal, Pressable } from "react-native";
import HeaderTop from "../headerTop/HeaderTop";
import { GolobalContext } from "../../Global/globalData";
import WordPicker from "./wordPicker";
import ItemBar from "../homeComponents/ItemBar";

import Feather from 'react-native-vector-icons/Feather';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default VietnameseToEnglish = ({ navigation }) => {

  const { data, userData, userEndPoint } = useContext(GolobalContext);
  const oldTotalScore = userData[0]['score'];
  const random = Math.floor(Math.random() * data.length) + 1;
  const [randomNumQuest, setRandomNumQuest] = useState(random);

  const [questVN, setQuestVN] = useState(data[randomNumQuest - 1]['correction']);
  const [answerEng, setAnsEng] = useState(data[randomNumQuest - 1]['question']);

  console.log('random question number:', randomNumQuest);
  console.log('questVN: ', questVN);
  console.log(`user data new:`, userData);
  console.log(`user end point:`, userEndPoint);

  const [answer, setAnswer] = useState([]);
  const [mixedAns, setMixedAns] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalNotify, setModalNotify] = useState('');
  const [goldModalVisible, setGoldModalVisible] = useState(false);

  const [dailyScore, setDailyScore] = useState(0);

  const [step1Active, setStep1Active] = useState(true);


  const [part0BtnActive, setPart0BtnActive] = useState(true);
  const [part1BtnActive, setPart1BtnActive] = useState(true);
  const [part2BtnActive, setPart2BtnActive] = useState(true);
  const [part3BtnActive, setPart3BtnActive] = useState(true);
  const [part4BtnActive, setPart4BtnActive] = useState(true);
  const [part5BtnActive, setPart5BtnActive] = useState(true);
  const [part6BtnActive, setPart6BtnActive] = useState(true);
  const [part7BtnActive, setPart7BtnActive] = useState(true);
  const [part8BtnActive, setPart8BtnActive] = useState(true);
  const [part9BtnActive, setPart9BtnActive] = useState(true);

  const handleRandomQuest = () => {
    const random2 = Math.floor(Math.random() * data.length) + 1;
    setRandomNumQuest(random2);
    setQuestVN(data[randomNumQuest - 1]['correction']);
    setAnsEng(data[randomNumQuest - 1]['question']);
    handleDelete();
    setModalVisible(!modalVisible);


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
    setStep1Active(false);
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
    setPart0BtnActive(!part0BtnActive);
  };
  const handlePushPart1 = () => {
    setAnswer([
      ...answer,
      mixedAns[1]
    ]);
    setPart1BtnActive(!part1BtnActive);

  };
  const handlePushPart2 = () => {
    setAnswer([
      ...answer,
      mixedAns[2]
    ]);
    setPart2BtnActive(!part2BtnActive);

  };
  const handlePushPart3 = () => {
    setAnswer([
      ...answer,
      mixedAns[3]
    ]);
    setPart3BtnActive(!part3BtnActive);
  };
  const handlePushPart4 = () => {
    setAnswer([
      ...answer,
      mixedAns[4]
    ]);
    setPart4BtnActive(!part4BtnActive);


  };
  const handlePushPart5 = () => {
    setAnswer([
      ...answer,
      mixedAns[5]
    ]);
    setPart5BtnActive(!part5BtnActive);
  };
  const handlePushPart6 = () => {
    setAnswer([
      ...answer,
      mixedAns[6]
    ]);
    setPart6BtnActive(!part6BtnActive);

  };
  const handlePushPart7 = () => {
    setAnswer([
      ...answer,
      mixedAns[7]
    ]);
    setPart7BtnActive(!part7BtnActive);


  };
  const handlePushPart8 = () => {
    setAnswer([
      ...answer,
      mixedAns[8]
    ]);
    setPart8BtnActive(!part8BtnActive);

  };
  const handlePushPart9 = () => {
    setAnswer([
      ...answer,
      mixedAns[9]
    ]);
    setPart9BtnActive(!part9BtnActive);



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
    setPart0BtnActive(true);
    setPart1BtnActive(true);
    setPart2BtnActive(true);
    setPart3BtnActive(true);
    setPart4BtnActive(true);
    setPart5BtnActive(true);
    setPart6BtnActive(true);
    setPart7BtnActive(true);
    setPart8BtnActive(true);
    setPart9BtnActive(true);
  };

  const handleSubmitAns = () => {
    if (showAns === answerEng) {
      handleCorrectAns();
      setModalNotify('Congrats! You are correct!');
      setMixedAns(['']);
      setStep1Active(true);
      setPart0BtnActive(true);
      setPart1BtnActive(true);
      setPart2BtnActive(true);
      setPart3BtnActive(true);
      setPart4BtnActive(true);
      setPart5BtnActive(true);
      setPart6BtnActive(true);
      setPart7BtnActive(true);
      setPart8BtnActive(true);
      setPart9BtnActive(true);

    } else {
      handleWrongAns();
      setModalNotify('You are wrong!');
      setAnswer([]);
      // setMixedAns(['']);
      setStep1Active(true);
      setPart0BtnActive(true);
      setPart1BtnActive(true);
      setPart2BtnActive(true);
      setPart3BtnActive(true);
      setPart4BtnActive(true);
      setPart5BtnActive(true);
      setPart6BtnActive(true);
      setPart7BtnActive(true);
      setPart8BtnActive(true);
      setPart9BtnActive(true);
    };
  };
  const handleModal = () => {
    setModalVisible(true);
    handleSubmitAns();
  };

  const handleCorrectAns = () => {
    setDailyScore(dailyScore + 2);

  };
  const handleWrongAns = () => {
    setDailyScore(dailyScore - 2);

  };


  const newScore = oldTotalScore + dailyScore;
  console.log(`new score:`, newScore);

  const updateScore = () => {
    handlePUT("1", newScore);
    setDailyScore(0);
  }
  const handlePUT = (id) => {
    fetch(`${userEndPoint}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ score: newScore })
    })
      .then(res => {
        console.log(res.status);
        // console.log(res.headers)
        return res.json();
      })
      .then(result => {
        console.log(result);
      })
  };

  return (
    <View style={styles.grandContainer}>
      <HeaderTop
        backTo={() => navigation.navigate("Bottom Tab Main")}
        goldBtn={() => setGoldModalVisible(!goldModalVisible)}
        score={oldTotalScore}
        borderWidth={2}
      />
      <View>
        <Text style={styles.headerTitle}>Please translate to English:</Text>
      </View>
      <View>
        <View style={styles.dailyStatusBox}>
          <Text style={styles.dailyStatusText}>Total questions: </Text>
          <Text style={[styles.dailyStatusText, { color: 'red', fontSize: 15, fontWeight: 800 }]}>
            {data.length}
          </Text>
        </View>
        <View style={styles.dailyStatusBox}>
          <Text style={styles.dailyStatusText}>Số vàng hôm nay nhận: </Text>
          <Text style={[styles.dailyStatusText, { color: '#FFD700', fontSize: 15, fontWeight: 800 }]}>
            {dailyScore}
          </Text>
        </View>
      </View>

      <View style={styles.questionSection}>
        <View>
          <Text style={styles.questionText}>{questVN}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.answerSection}>
          <Text style={styles.answerText}>{showAns}</Text>

        </View>
        <View>
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={handleDelete}
          >
            <Text style={styles.deleteText}><Feather name='delete' size={25} color={color.black} /></Text>
          </TouchableOpacity>
        </View>
      </View>

      {
        step1Active === true ?
          <TouchableOpacity
            activeOpacity={9}
            onPress={handleMixup}
            style={styles.step1Active}>
            <Text style={styles.step1Text}>
              Step 1: Generate answer</Text>
          </TouchableOpacity> :
          <TouchableOpacity
            activeOpacity={9}
            style={styles.step1InActive}>
            <Text style={styles.step1TextOff}>
              Step 1: Generate answer</Text>
          </TouchableOpacity>
      }
      {
        step1Active === false ?
          <View style={styles.letterContainer}>
            {/* <Text>Mixup words Section</Text> */}
            {/* <Text>{answer}</Text> */}
            <View style={styles.colmn1}>
              <WordPicker value={mixedAns[0]} pushValue={handlePushPart0} status={part0BtnActive} />
              <WordPicker value={mixedAns[1]} pushValue={handlePushPart1} status={part1BtnActive} />
              <WordPicker value={mixedAns[2]} pushValue={handlePushPart2} status={part2BtnActive} />
            </View>

            <View>
              <WordPicker value={mixedAns[3]} pushValue={handlePushPart3} status={part3BtnActive} />
              <WordPicker value={mixedAns[4]} pushValue={handlePushPart4} status={part4BtnActive} />
            </View>

            <View>
              <WordPicker value={mixedAns[5]} pushValue={handlePushPart5} status={part5BtnActive} />
              <WordPicker value={mixedAns[6]} pushValue={handlePushPart6} status={part6BtnActive} />
              <WordPicker value={mixedAns[7]} pushValue={handlePushPart7} status={part7BtnActive} />
            </View>

            <View>
              <WordPicker value={mixedAns[8]} pushValue={handlePushPart8} status={part8BtnActive} />
              <WordPicker value={mixedAns[9]} pushValue={handlePushPart9} status={part9BtnActive} />
            </View>


          </View> :

          <View style={styles.letterContainer}></View >
      }

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalNotify}</Text>
            {
              showAns === answerEng ?
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPressIn={handleRandomQuest}
                >
                  <Text style={styles.textStyle}>Next</Text>
                </TouchableOpacity> :

                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                  onPressOut={() => setMixedAns([""])}
                >
                  <Text style={styles.textStyle}>Try again</Text>
                </TouchableOpacity>
            }

          </View>
        </View>
      </Modal >

      <Modal
        animationType="slide"
        transparent={true}
        visible={goldModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalNotify}</Text>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setGoldModalVisible(!goldModalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>


          </View>
        </View>
      </Modal >
      {/* <Button
        title="UPDATE"
        onPress={updateScore}
      /> */}
      {/* <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={handleModal}>
        <Text style={styles.textStyle}>Check result</Text>
      </TouchableOpacity> */}

      {/* <Button title="Random" onPress={handleRandomQuest} /> */}
      {/* <Button title="Check result" onPress={handleSubmitAns} /> */}

      <ItemBar
        itemContent={'Step 2: Check result'}
        navigation={handleModal}
        borderColor={'#eeeeee'}

      />
      {
        dailyScore >= 20 ?
          <ItemBar
            itemContent={'Step 3: Save Golds'}
            navigation={updateScore}
            borderColor={'#eeeeee'}

          /> :
          <View></View>
      }



    </View >
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    // backgroundColor: color.PrimeBackground,
    backgroundColor: color.PrimeBackground,
    height: height,
    alignItems: "center",

  },
  headerTitle: {
    color: color.white,
    fontSize: 23,
    fontFamily: 'IBMPlexMono-Bold',
    marginVertical: 5
  },
  questionSection: {
    height: 100,
    width: width - 30,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
    // backgroundColor: '#0086ff',
    // backgroundColor: '#eeeeee'
  },
  questionText: {
    color: color.white,
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 26
  },
  answerSection: {
    flexDirection: "row",
    height: 100,
    width: width - 68,
    borderWidth: 2,
    borderColor: 'grey',
    color: color.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#F194FF',
    // backgroundColor: '#eeeeee',
    marginBottom: 10


  },
  answerText: {
    color: color.white,
    fontSize: 25,
    fontFamily: 'IBMPlexMono-Bold',
  },
  letterContainer: {
    height: 220,
    width: width - 20,
    // borderWidth: 1,
    borderColor: color.white,
    color: color.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"

  },
  colmn1: {
    marginBottom: 40
  },
  modalView: {
    marginTop: 390,
    marginHorizontal: 60,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'IBMPlexMono-Bold',

  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 22,
    color: color.black
  },
  deleteBtn: {
    height: 100,
    width: 35,
    borderWidth: 1,
    borderColor: '#ffff',
    borderRadius: 10,
    marginLeft: 3,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center'

  },
  deleteText: {
    color: 'black'
  },
  dailyStatusBox: {
    width: 400,
    // height: 90,
    borderWidth: 1,
    borderColor: color.white,
    flexDirection: 'row',
    // justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    // backgroundColor: '#0e19bf',
    borderRadius: 10,
    marginBottom: 5
  },
  dailyStatusText: {
    color: color.white,
    fontSize: 15,
    fontFamily: 'IBMPlexMono-Regular'
  },
  step1Active: {
    borderWidth: 2,
    borderColor: '#ffff',
    // height: 50,
    width: width - 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 3,
    paddingVertical: 10
  },
  step1Text: {
    color: '#ffff',
    fontSize: 20,
    fontFamily: "IBMPlexMono-Regular",
  },
  step1InActive: {
    borderWidth: 2,
    borderColor: '#3f3f3f',
    // height: 50,
    width: width - 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 3,
    paddingVertical: 10
  },
  step1TextOff: {
    color: '#3f3f3f',
    fontSize: 20,
    fontFamily: "IBMPlexMono-Regular",
  },


});