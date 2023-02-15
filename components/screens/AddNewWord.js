import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, TextInput, Button, Touchable, TouchableOpacity, Alert, StatusBar, ScrollView } from "react-native";
import { GolobalContext } from "../../Global/globalData";
import HeaderTop from "../headerTop.js/HeaderTop";

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



export default AddNewWord = ({ navigation }) => {
  const { vietNamAnswer, data } = useContext(GolobalContext);
  const randomABCD = Math.floor(Math.random() * 4) + 1;
  // console.log('ABCD:', randomABCD);
  const [countWord, setCount] = useState(0);

  const [question, setQuestion] = React.useState("");
  const [ansA, setAnsA] = React.useState("");
  const [ansB, setAnsB] = React.useState("");
  const [ansC, setAnsC] = React.useState("");
  const [ansD, setAnsD] = React.useState("");
  const [correction, setCorrection] = React.useState("");

  console.log(`new vietNamAnser`, vietNamAnswer);
  console.log(question);
  console.log(ansA);
  console.log(ansB);
  console.log(ansC);
  console.log(ansD);
  console.log(correction)
  const randomAnswerA = vietNamAnswer[Math.floor(Math.random() * vietNamAnswer.length)]["answer"];
  const randomAnswerB = vietNamAnswer[Math.floor(Math.random() * vietNamAnswer.length)]["answer"];
  const randomAnswerC = vietNamAnswer[Math.floor(Math.random() * vietNamAnswer.length)]["answer"];
  const randomAnswerD = vietNamAnswer[Math.floor(Math.random() * vietNamAnswer.length)]["answer"];



  const handleRandom = () => {
    if (question === "" || correction === "") {
      setTimeout(() => { Alert.alert(`Điền từ mới vào ô trước!`); }, 300);
    } else {
      randomABCD === 1 ?
        setAnsA(correction) :
        setAnsA(randomAnswerA);
      randomABCD === 2 ?
        setAnsB(correction) :
        setAnsB(randomAnswerB);
      randomABCD === 3 ?
        setAnsC(correction) :
        setAnsC(randomAnswerC);
      randomABCD === 4 ?
        setAnsD(correction) :
        setAnsD(randomAnswerD);

    };

  };
  const handleCleaningField = () => {
    setQuestion("");
    setCorrection("");
    setAnsA("");
    setAnsB("");
    setAnsC("");
    setAnsD("");
  };
  handleSubmit = () => {
    if
      (question !== "" &&
      ansA !== "" &&
      ansB !== "" &&
      ansC !== "" &&
      ansD !== "" &&
      correction !== "") {
      setTimeout(() => {
        createNewQuestion(question, ansA, ansB, ansC, ansD, correction);

      }, 0);
      updateNewRanAns(correction);
      setCount(countWord + 1);
      setTimeout(() => {
        handleCleaningField()
      }, 500);
      setTimeout(() => {
        Alert.alert('Đã thêm từ mới:', question + ': ' + correction);

      }, 500);

    } else {
      Alert.alert(`Do not leave the empty field!`);

    }

  };

  // console.log('new array pushed: ', vietNamAnswer);
  let createNewQuestion = (question, ansA, ansB, ansC, ansD, correction) => {
    fetch(`https://6268162901dab900f1c9969b.mockapi.io/appi/v1/engQuest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question: question,
        ansA: ansA,
        ansB: ansB,
        ansC: ansC,
        ansD: ansD,
        correction: correction
      })
    })
      .then(res => {
        // console.log(res.status);
        // console.log(res.headers)
        return res.json();
      })
      .then(result => {
        console.log(result);
      })
  };
  let updateNewRanAns = () => {
    fetch(`https://6268162901dab900f1c9969b.mockapi.io/appi/v1/userList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        answer: correction
      })
    })
      .then(res => {
        // console.log(res.status);
        // console.log(res.headers)
        return res.json();
      })
      .then(result => {
        console.log(result);
      })
  };


  return (
    <ScrollView>
      <View style={styles.grandContainer}>
        <HeaderTop backTo={() => navigation.navigate('Home')} />
        <Text>Add new Word</Text>
        <View style={{ flexDirection: "row" }}>
          <Text>Tổng số câu hỏi đã học:</Text>
          <Text>{data.length}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Số từ đã thêm:</Text>
          <Text>{countWord}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={question ? styles.inputBox : styles.placeholder}
            placeholder={"Nhập từ tiếng Anh cần thêm..."}
            value={question}
            onChangeText={setQuestion}
            autoCapitalize="sentences"
          // placeholderTextColor={'gray'}

          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={correction ? styles.inputBox : styles.placeholder}
            placeholder={"Nhập nghĩa tiếng Việt..."}
            value={correction}
            onChangeText={setCorrection}
          />

        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.descriptionTextBox}>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 15 }}>
                <Text style={{ fontSize: 15, color: color.hackingColor, fontWeight: '600' }}>
                  Bấm vào nút bên cạnh để tạo
                </Text>
                <Text style={{ fontSize: 15, color: color.hackingColor, fontWeight: '600' }}>
                  tự động đáp án bên dưới...
                </Text>
              </View>
              <Ionicons name={'md-arrow-redo-sharp'} size={38} color={'red'} />
            </View>


          </View>
          <TouchableOpacity
            style={styles.randomBtn}
            onPressIn={handleRandom}
            activeOpacity={0.5}
          >

            <ImageBackground
              style={styles.btnIconSize}
              source={require(`../../images/btnIcon/icon.jpeg`)}
            >
            </ImageBackground>
          </TouchableOpacity>
        </View>



        {/* Answer A */}

        <View style={styles.itemContainer}>
          <TextInput
            style={ansA ? styles.inputBox : styles.placeholder}
            placeholder={"Đáp án ngẫu nhiên..."}
            value={ansA}
            onChangeText={setAnsA}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setAnsA(randomAnswerA)}>
            <Text><FontAwesome5 name={'sync'} size={25} /></Text>
          </TouchableOpacity>

        </View>

        {/* Answer B */}

        <View style={styles.itemContainer}>
          <TextInput
            style={ansB ? styles.inputBox : styles.placeholder}
            placeholder={"Đáp án ngẫu nhiên..."}
            value={ansB}
            onChangeText={setAnsB}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setAnsB(randomAnswerB)}>
            <Text><FontAwesome5 name={'sync'} size={25} /></Text>
          </TouchableOpacity>

        </View>

        {/* Answer C */}

        <View style={styles.itemContainer}>
          <TextInput
            style={ansC ? styles.inputBox : styles.placeholder}
            placeholder={"Đáp án ngẫu nhiên..."}
            value={ansC}
            onChangeText={setAnsC}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setAnsC(randomAnswerC)}>
            <Text><FontAwesome5 name={'sync'} size={25} /></Text>
          </TouchableOpacity>

        </View>

        {/* Answer D */}

        <View style={styles.itemContainer}>
          <TextInput
            style={ansD ? styles.inputBox : styles.placeholder}
            placeholder={"Đáp án ngẫu nhiên.."}
            value={ansD}
            onChangeText={setAnsD}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setAnsD(randomAnswerD)}>
            <Text><FontAwesome5 name={'sync'} size={25} /></Text>
          </TouchableOpacity>

        </View>

        <Button
          title="Submit"
          onPress={handleSubmit}
        />
        {/* <View style={{ height: height }}></View> */}
        {/* <Button
        title="Update"
        onPress={handleUpdateAns}
      /> */}






      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    backgroundColor: color.secondBackground,
    height: height,
  },
  headerTitle: {
    color: color.homeHeaderTitle,
    fontSize: 35,
    fontFamily: 'IBMPlexMono-Bold',
  },
  inputBox: {
    fontFamily: 'IBMPlexMono-Bold',
    height: 50,
    width: width - 150,
    borderWidth: 0.5,
    fontSize: 18,
    // bordertBottomWidth: 0.5,
    // marginTop: 5,
    borderColor: 'grey',
    // borderStyle: "dotted",
    // borderRadius: 10,
    // marginVertical: 8,
    color: color.classicBackground,
    paddingHorizontal: 10,
  },
  placeholder: {
    fontFamily: 'IBMPlexMono-Bold',
    height: 50,
    width: width - 150,
    borderWidth: 0.5,
    fontSize: 15,
    // borderBottomWidth: 0.5,
    borderColor: 'grey',
    // borderStyle: "dotted",
    // borderRadius: 10,
    // marginTop: 5,
    color: color.hackingColor,
  },
  descriptionTextBox: {
    height: 60,
    width: width - 150,
    // borderWidth: 1,
    borderColor: '#000000',
    justifyContent: "center",
    alignItems: "center",

  },
  randomBtn: {
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: 'black',
    marginLeft: 20,
    backgroundColor: 'black',
    // borderRadius: 10,

  },
  btn: {
    height: 50,
    width: 60,
    borderWidth: 0.5,
    borderColor: 'black',
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  btnIconSize: {
    height: 56,
    width: 56,
    // borderWidth: 2,

  },
  itemContainer: {
    alignItems: "center",
    flexDirection: "row",
    // borderWidth: 1,
    borderColor: '#00000',

  }

});