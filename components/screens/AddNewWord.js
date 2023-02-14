import React from "react";
import { Text, View, StyleSheet, Dimensions, TextInput, Button, Touchable, TouchableOpacity } from "react-native";
import HeaderTop from "../headerTop.js/HeaderTop";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const vietNamAnswer = [
  "Máy ảnh chi tiết", "Máy ảnh Sony", "Máy ảnh kỹ thuật số", "Máy quay", "Điện thoại bàn",
  "Điện thoại rảnh tay",
  "Điện thoại cổ điển",
  "Đánh giá", "Tấm",
  "Máy kỹ thuật số",
  "Phân tích",
  "Máy nghe nhạc",
  "Trợ lý kỹ thuật cá nhân",
  "Trợ lý ảo",
  "Trợ lý cá nhân",
  "Trợ lý chi tiết"
];

export default AddNewWord = ({ navigation }) => {
  const [question, setQuestion] = React.useState("");
  const [ansA, setAnsA] = React.useState("");
  const [ansB, setAnsB] = React.useState("");
  const [ansC, setAnsC] = React.useState("");
  const [ansD, setAnsD] = React.useState("");
  const [correction, setCorrection] = React.useState("");


  console.log(question);
  console.log(ansA);
  console.log(ansB);
  console.log(ansC);
  console.log(ansD);
  console.log(correction)
  const randomAnswerA = vietNamAnswer[Math.floor(Math.random() * vietNamAnswer.length)];
  const randomAnswerB = vietNamAnswer[Math.floor(Math.random() * vietNamAnswer.length)];
  const randomAnswerC = vietNamAnswer[Math.floor(Math.random() * vietNamAnswer.length)];
  const randomAnswerD = vietNamAnswer[Math.floor(Math.random() * vietNamAnswer.length)];

  const handleRandom = () => {
    setAnsA(randomAnswerA);
    setAnsB(randomAnswerB);
    setAnsC(randomAnswerC);
    setAnsD(randomAnswerD);
  };
  


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
        console.log(res.status);
        console.log(res.headers)
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
      <View style={{ flexDirection: "row"}}>
        <TextInput
          style={styles.inputBox}
          placeholder={"Từ tiếng Anh cần thêm..."}
          value={question}
          onChangeText={setQuestion}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={handleRandom}>
          <Text>Đáp án ngẫu nhiên</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row"}}>
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
          placeholder={"A..."}
          value={ansA}
          onChangeText={setAnsA}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnsA(randomAnswerA)}>
          <Text>Thay đổi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnsA(correction)}>
          <Text>Cài đáp án ở đây</Text>
        </TouchableOpacity>
      </View>

      {/* Answer B */}

      <View style={{ flexDirection: "row", }}>
        <TextInput
          style={styles.inputBox}
          placeholder={"B..."}
          value={ansB}
          onChangeText={setAnsB}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnsB(randomAnswerB)}>
          <Text>Thay đổi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnsB(correction)}>
          <Text>Cài đáp án ở đây</Text>
        </TouchableOpacity>
      </View>

      {/* Answer C */}

      <View style={{ flexDirection: "row", }}>
        <TextInput
          style={styles.inputBox}
          placeholder={"C..."}
          value={ansC}
          onChangeText={setAnsC}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnsC(randomAnswerC)}>
          <Text>Thay đổi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnsC(correction)}>
          <Text>Cài đáp án ở đây</Text>
        </TouchableOpacity>
      </View>

      {/* Answer D */}

      <View style={{ flexDirection: "row", }}>
        <TextInput
          style={styles.inputBox}
          placeholder={"D..."}
          value={ansD}
          onChangeText={setAnsD}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnsD(randomAnswerD)}>
          <Text>Thay đổi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnsD(correction)}>
          <Text>Cài đáp án ở đây</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Submit"
        onPress={() => createNewQuestion(question, ansA, ansB, ansC, ansD, correction)}
      />



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