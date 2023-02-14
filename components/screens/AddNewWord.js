import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput, Button, Touchable, TouchableOpacity, Alert } from "react-native";
import { GolobalContext } from "../../Global/globalData";
import HeaderTop from "../headerTop.js/HeaderTop";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



export default AddNewWord = ({ navigation }) => {
  const { vietNamAnswer } = useContext(GolobalContext);
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

    <View style={styles.grandContainer}>
      <HeaderTop backTo={() => navigation.navigate('Home')} />
      <Text>Add new Word</Text>
      <View style={{flexDirection: "row"}}>
        <Text>Số từ đã thêm:</Text>
        <Text>{countWord}</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.inputBox}
          placeholder={"Từ tiếng Anh cần thêm..."}
          value={question}
          onChangeText={setQuestion}
          autoCapitalize="sentences"
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={handleRandom}>
          <Text>Đáp án ngẫu nhiên</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.inputBox}
          placeholder={"Nghĩa của từ tiếng Anh bên trên..."}
          value={correction}
          onChangeText={setCorrection}
        />

      </View>

      {/* Answer A */}

      <View style={{ flexDirection: "row", }}>
        <TextInput
          style={styles.inputBox}
          placeholder={"Viết tiếng Việt có dấu..."}
          value={ansA}
          onChangeText={setAnsA}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnsA(randomAnswerA)}>
          <Text>Thay đổi</Text>
        </TouchableOpacity>
        {/* {randomABCD === 1 ?
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setAnsA(correction)}>
            <Text>Cài đáp án ở đây</Text>
          </TouchableOpacity> :
          <View></View>} */}
      </View>

      {/* Answer B */}

      <View style={{ flexDirection: "row", }}>
        <TextInput
          style={styles.inputBox}
          placeholder={"Viết tiếng Việt có dấu..."}
          value={ansB}
          onChangeText={setAnsB}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnsB(randomAnswerB)}>
          <Text>Thay đổi</Text>
        </TouchableOpacity>
        {/* {randomABCD === 2 ?
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setAnsB(correction)}>
            <Text>Cài đáp án ở đây</Text>
          </TouchableOpacity> :
          <View></View>} */}
      </View>

      {/* Answer C */}

      <View style={{ flexDirection: "row", }}>
        <TextInput
          style={styles.inputBox}
          placeholder={"Viết tiếng Việt có dấu..."}
          value={ansC}
          onChangeText={setAnsC}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnsC(randomAnswerC)}>
          <Text>Thay đổi</Text>
        </TouchableOpacity>
        {/* {randomABCD === 3 ?
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setAnsC(correction)}>
            <Text>Cài đáp án ở đây</Text>
          </TouchableOpacity> :
          <View></View>} */}
      </View>

      {/* Answer D */}

      <View style={{ flexDirection: "row", }}>
        <TextInput
          style={styles.inputBox}
          placeholder={"Viết tiếng Việt có dấu...."}
          value={ansD}
          onChangeText={setAnsD}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnsD(randomAnswerD)}>
          <Text>Thay đổi</Text>
        </TouchableOpacity>
        {/* {randomABCD === 4 ?
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setAnsD(correction)}>
            <Text>Cài đáp án ở đây</Text>
          </TouchableOpacity> :
          <View></View>} */}
      </View>

      <Button
        title="Submit"
        onPress={handleSubmit}
      />
      {/* <Button
        title="Update"
        onPress={handleUpdateAns}
      /> */}


    </View>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    backgroundColor: color.PrimerBackground,
    height: height,
  },
  headerTitle: {
    color: color.homeHeaderTitle,
    fontSize: 35,
    fontFamily: 'IBMPlexMono-Bold',
  },
  inputBox: {
    height: 50,
    width: width - 200,
    borderWidth: 1,
    borderColor: 'black'
  },
  btn: {
    height: 50,
    width: 60,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 20


  }
});