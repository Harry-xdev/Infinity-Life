import React, { useContext, useEffect, useState, DevSettings } from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, TextInput, Button, Touchable, TouchableOpacity, Alert, StatusBar, ScrollView, FlatList } from "react-native";
import { GolobalContext } from "../../Global/globalData";
import HeaderTop from "../headerTop/HeaderTop";

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default AddNewWord = ({ navigation, props }) => {
  const { vietNamAnswer, data, vietNamAnswerB, dataB, userData } = useContext(GolobalContext);
  const oldTotalScore = userData[0]['score'];
  const [isA, setIsA] = useState(true);
  const [count, setCountDaily] = useState(0);
  const [recentlyAdded, setRecentlyAdded] = useState([]);
  const [endpointStatus, setEndpointStatus] = useState('Render.com')




  const questEndPointA = 'https://awsome-project-backend2.onrender.com/engQuest';
  const ansEndPointA = 'https://awsome-project-backend2.onrender.com/vnAnswerList';

  // const questEndPointB = 'https://63eddd2f388920150dd47775.mockapi.io/newQuest';
  // const ansEndPointB = 'https://63eedb395e9f1583bdc850f3.mockapi.io/api/v1/userList';

  const questEndpointLocal = 'http://192.168.168.192:4000/engQuest';
  const ansEndPointLocal = 'http://192.168.168.192:4000/vnAnswerList';


  const [questEndPoint, setQuestEndPoint] = useState(questEndPointA);
  const [ansEndPoint, setAnsEndPoint] = useState(ansEndPointA);
  // console.log(`new data:`, data);
  // console.log(`user point: `, userData);

  const switchToRender = () => {
    setQuestEndPoint(questEndPointA);
    setAnsEndPoint(ansEndPointA);
    setEndpointStatus('Render.com');
    Alert.alert(`Switched to Render.com`);
  };
  const switchToLocal = () => {
    setQuestEndPoint(questEndpointLocal);
    setAnsEndPoint(ansEndPointLocal);
    Alert.alert(`Switched to localhost`);
    setEndpointStatus('Localhost');

  };

  // console.log('question endpoint:', questEndPoint);
  // console.log('answer endpoint:', ansEndPoint);

  const randomABCD = Math.floor(Math.random() * 4) + 1;
  // console.log('ABCD:', randomABCD);
  const [countWord, setCount] = useState(0);

  const [idState, setIdState] = useState(1);
  const [idState2, setIdState2] = useState(1);

  // console.log(`id Data: `, data.length);
  // console.log(`id vnAnswerList length:`, vietNamAnswer.length);

  const [question, setQuestion] = React.useState("");
  const [ansA, setAnsA] = React.useState("");
  const [ansB, setAnsB] = React.useState("");
  const [ansC, setAnsC] = React.useState("");
  const [ansD, setAnsD] = React.useState("");
  const [correction, setCorrection] = React.useState("");
  const [inputBoxNotify, setBoxNotify] = useState("");
  const [deleteId, setDeleteId] = React.useState("");

  // console.log(`type of id: `, typeof id);
  // const toString = id.toString();
  // console.log(`type of toString: `, typeof toString);



  // console.log(question);
  // console.log(ansA);
  // console.log(ansB);
  // console.log(ansC);
  // console.log(ansD);
  // console.log(correction)
  const randomAnswerA = vietNamAnswer[Math.floor(Math.random() * vietNamAnswer.length)]["answer"];
  const randomAnswerB = vietNamAnswer[Math.floor(Math.random() * vietNamAnswer.length)]["answer"];
  const randomAnswerC = vietNamAnswer[Math.floor(Math.random() * vietNamAnswer.length)]["answer"];
  const randomAnswerD = vietNamAnswer[Math.floor(Math.random() * vietNamAnswer.length)]["answer"];

  const handleRandom = () => {
    if (question === "" && correction === "") {
      setBoxNotify('* Hãy điền từ ở đây rồi tạo đáp án sau!');

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
  const handleOnChangeQuestInput = () => {
    setAnsA('')
    setAnsB('')
    setAnsC('')
    setAnsD('')

  };
  const handleOnChangeCorrectInput = () => {
    setAnsA('')
    setAnsB('')
    setAnsC('')
    setAnsD('')
  };

  const checkDoubleThenSubmit = () => {
    const doubleWordArray = data.filter(item => item.question === question);
    
    doubleWordArray.length === 0 ? handleSubmit() : Alert.alert('Từ này đã học rồi! Đổi từ tiếng Anh mới khác!');
    // console.log('double array:', doubleWordArray);
    // console.log('question:', question);

  };
  const handleCleaningField = () => {
    setQuestion("");
    setCorrection("");
    setAnsA("");
    setAnsB("");
    setAnsC("");
    setAnsD("");
  };
  const updateScreenList = () => {
    setRecentlyAdded([
      ...recentlyAdded,
      {
        id: count,
        question: question,
        correction: correction
      }

    ])
  };

  const handleSubmit = () => {
    if
      (question !== "" &&
      ansA !== "" &&
      ansB !== "" &&
      ansC !== "" &&
      ansD !== "" &&
      correction !== "") {
      createNewQuestion(question, ansA, ansB, ansC, ansD, correction);
      updateNewRanAns(correction);
      setCountDaily(count + 1);
      updateScreenList();
      setCount(countWord + 1);
      handleCleaningField();

      // Alert.alert('Đã thêm từ mới:', question + ': ' + correction);

    } else {
      Alert.alert(`Do not leave the empty field!`);

    }

  };

  // console.log('new array pushed: ', vietNamAnswer);
  let createNewQuestion = (question, ansA, ansB, ansC, ansD, correction) => {
    setIdState(idState + 1);
    fetch(questEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: (data.length + idState).toString(),
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
        // return res.json();
      })
      .then(result => {
        // console.log(result);
      })
  };
  let updateNewRanAns = (correction) => {
    setIdState2(idState2 + 1);
    fetch(ansEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: (vietNamAnswer.length + idState2).toString(),
        answer: correction
      })
    })
      .then(res => {
        console.log(res.status);
        console.log(res.headers)
        // return res.json();
      })
      .then(result => {
        // console.log(result);
      })
  };
  const deleteById = (id) => {
    fetch(`https://awsome-project-backend2.onrender.com/engquest/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        console.log(res.status);
        console.log(res.headers);
        // return res.json();
      })
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);

        }
      )
  };
  // console.log(`Endpoint data:`, questEndPoint);


  return (
    <View>
      <HeaderTop
        headerTitle={'ADDING FORM'} backTo={() => navigation.navigate('Bottom Tab Main')}
        score={oldTotalScore}
        borderWidth={2}
      />

      <View>
        <View style={styles.grandContainer}>

          {/* Status Box */}
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontFamily: 'IBMPlexMono-Bold', fontSize: 16, color: 'black' }}>Tổng số câu hỏi đã có: </Text>
              <Text style={{ fontFamily: 'IBMPlexMono-Bold', fontSize: 16, color: 'black' }}>{isA === true ? data.length : dataB.length}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontFamily: 'IBMPlexMono-Bold', fontSize: 16, fontSize: 16, color: 'black' }}>Số từ đã thêm: </Text>
              <Text style={{ fontFamily: 'IBMPlexMono-Bold', fontSize: 16, fontSize: 16, color: 'black' }}>{countWord}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontFamily: 'IBMPlexMono-Bold', fontSize: 16, fontSize: 16, color: 'black' }}>Server: </Text>
              <Text style={{ fontFamily: 'IBMPlexMono-Bold', fontSize: 16, fontSize: 16, color: 'red' }}>{endpointStatus}</Text>
            </View>

            {/* Black Screen  */}
            <View style={styles.screenContainer}>
              <ScrollView style={{ flexDirection: 'column-reverse' }}>
                {recentlyAdded.map(item => <View key={item.id}><Text style={styles.listText}>{item.id + 1}. {item.question} : {item.correction}</Text></View>)}
              </ScrollView>

            </View>
            <View style={{ flexDirection: "row" }}>


              <View>
                {/* <Text style={{ color: 'black' }}>Nhập từ tiếng Anh cần thêm...</Text> */}
                <TextInput
                  style={question ? styles.mainInput : styles.mainInputPlaceholder}
                  placeholder={"Nhập từ tiếng Anh cần thêm..."}
                  value={question}
                  onChange={handleOnChangeQuestInput}
                  onChangeText={setQuestion}
                  autoCapitalize="sentences"
                  placeholderTextColor={'gray'}
                />
                <View><Text style={styles.boxNotify}>
                  {inputBoxNotify}
                </Text></View>

              </View>

            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <TextInput
                  style={correction ? styles.mainInput : styles.mainInputPlaceholder}
                  placeholder={"Nhập nghĩa tiếng Việt..."}
                  value={correction}
                  onChange={handleOnChangeCorrectInput}
                  onChangeText={setCorrection}
                  placeholderTextColor={'gray'}

                />
                <View><Text style={styles.boxNotify}>
                  {inputBoxNotify}
                </Text></View>
              </View>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>

              <View style={styles.descriptionTextBox}>
                {
                  correction ?
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ marginRight: 15 }}>
                        <Text style={{ fontSize: 15, color: 'red', fontWeight: '600' }}>
                          Bấm vào nút bên cạnh để tạo
                        </Text>
                        <Text style={{ fontSize: 15, color: 'red', fontWeight: '600' }}>
                          tự động đáp án bên dưới...
                        </Text>
                      </View>
                      <Ionicons name={'md-arrow-redo-sharp'} size={38} color={'red'} />
                    </View> : <View></View>
                }
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

            {/* Answer C */}

            <View style={styles.itemContainer}>
              <TextInput
                style={ansC ? styles.inputBox : styles.placeholder}
                placeholder={"Đáp án ngẫu nhiên..."}
                value={ansC}
                onChangeText={setAnsC}
                placeholderTextColor={'gray'}

              />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setAnsC(randomAnswerC)}>
                <Text><FontAwesome5 name={'sync'} size={25} color={'green'} /></Text>
              </TouchableOpacity>

            </View>

            {/* Answer A */}

            <View style={styles.itemContainer}>
              <TextInput
                style={ansA ? styles.inputBox : styles.placeholder}
                placeholder={"Đáp án ngẫu nhiên..."}
                value={ansA}
                onChangeText={setAnsA}
                placeholderTextColor={'gray'}

              />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setAnsA(randomAnswerA)}>
                <Text><FontAwesome5 name={'sync'} size={25} color={'green'} /></Text>
              </TouchableOpacity>

            </View>

            {/* Answer D */}

            <View style={styles.itemContainer}>
              <TextInput
                style={ansD ? styles.inputBox : styles.placeholder}
                placeholder={"Đáp án ngẫu nhiên.."}
                value={ansD}
                onChangeText={setAnsD}
                placeholderTextColor={'gray'}

              />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setAnsD(randomAnswerD)}>
                <Text><FontAwesome5 name={'sync'} size={25} color={'green'} /></Text>
              </TouchableOpacity>

            </View>

            {/* Answer B */}

            <View style={styles.itemContainer}>
              <TextInput
                style={ansB ? styles.inputBox : styles.placeholder}
                placeholder={"Đáp án ngẫu nhiên..."}
                value={ansB}
                onChangeText={setAnsB}
                placeholderTextColor={'gray'}

              />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setAnsB(randomAnswerB)}>
                <Text><FontAwesome5 name={'sync'} size={25} color={'green'} /></Text>
              </TouchableOpacity>

            </View>

          </View>
          {/* <TouchableOpacity
          onPress={handleSubmit}
          style={styles.uploadBtn}>
            <Text style={{fontSize: 18, color: 'blue' }}>Submit</Text>

        </TouchableOpacity> */}
          <View style={styles.uploadBtn}>
            <Button
              title="Upload"
              onPress={checkDoubleThenSubmit}
              style={styles.uploadBtn}
            />
          </View>
          {/* <View>
            <TextInput

              placeholder="Delete ID"
              value={deleteId}
              style={{ borderWidth: 1, height: 40, width: 100, color: color.black }}
              onChangeText={setDeleteId}
              placeholderTextColor={'gray'}

            />
            <Button title="Delete" onPress={() => deleteById(deleteId)} />

          </View> */}

          {/* <View style={styles.uploadBtn}>
            <Button
              title="Switch to API A"
              onPress={switchToA}
              style={styles.uploadBtn}
            />
          </View> */}
          {/* <View style={styles.uploadBtn}>
          <Button
            title="Switch to API B"
            onPress={switchToB}
            style={styles.uploadBtn}
          />
        </View> */}
          <View style={styles.uploadBtn}>
            <Button
              title="Render.com"
              onPress={switchToRender}
              style={styles.uploadBtn}
            />
          </View>
          <View style={styles.uploadBtn}>
            <Button
              title="Localhost"
              onPress={switchToLocal}
              style={styles.uploadBtn}
            />
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    backgroundColor: color.SecondBackground,
    height: height,
    alignItems: "center"
  },
  headerTitle: {
    color: color.black,
    fontSize: 35,
    fontFamily: 'IBMPlexMono-Bold',
  },
  mainInput: {
    fontFamily: 'IBMPlexMono-Bold',
    height: 50,
    width: width - 70,
    borderWidth: 0.5,
    fontSize: 16,
    // bordertBottomWidth: 0.5,
    // marginTop: 5,
    borderColor: 'grey',
    // borderStyle: "dotted",
    // borderRadius: 10,
    // marginVertical: 8,
    color: color.classicBackground,
    paddingHorizontal: 10,
  },
  mainInputPlaceholder: {
    fontFamily: 'IBMPlexMono-Bold',
    height: 50,
    width: width - 70,
    borderWidth: 0.5,
    fontSize: 16,
    // borderBottomWidth: 0.5,
    borderColor: 'grey',
    // borderStyle: "dotted",
    // borderRadius: 10,
    // marginTop: 5,
    // color: color.hackingColor,
    color: color.classicBackground,

  },
  inputBox: {
    fontFamily: 'IBMPlexMono-Bold',
    height: 50,
    width: width - 150,
    borderWidth: 0.5,
    fontSize: 16,
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
    fontSize: 16,
    // borderBottomWidth: 0.5,
    borderColor: 'grey',

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
    marginBottom: 4

  },
  btn: {
    height: 50,
    width: 60,
    borderWidth: 0.5,
    borderBottomTop: 0,
    borderColor: 'gray',
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  btnIconSize: {
    height: 56,
    width: 56,
    // borderWidth: 2,
    marginBottom: 0


  },
  itemContainer: {
    // alignItems: "center",
    flexDirection: "row",
    // borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 4

  },
  boxNotify: {
    fontStyle: 'italic',
    color: 'red'
  },
  uploadBtn: {
    marginTop: 10,
    // height: 30,
    // width: 80
  },
  screenContainer: {
    height: 100,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginBottom: 10,
    // flexDirection: 'column-reverse',
    width: width - 70,
    backgroundColor: '#000000',
    flexDirection: "row",
  },
  listText: {
    color: color.hackingColor,
    fontSize: 15,
    fontFamily: 'IBMPlexMono-Bold'
  },
  rocketArea: {
    marginTop: 15,
    height: 200,
    width: 40,
    // borderWidth: 1,
    borderColor: '#ffff'
  }



}


);