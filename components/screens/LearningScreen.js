import { React, useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Alert } from "react-native";
import { GolobalContext } from '../../Global/globalData';

import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HeaderTop from "../headerTop.js/HeaderTop";

import color from '../../colorStore';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// import data from '../../data/Khoi-Vocabulary';
const scoreStore = {
  totalScore: 0,
  correctCount: 0,
  wrongCount: 0
};



export default LearningScreen = ({ navigation, props }) => {
  const { data } = useContext(GolobalContext);
  // console.log('Screen:',data);
  // console.log('ansA:', data[0]["1"]["ansA"]);

  const [dailyScore, setDailyScore] = useState(0);
  const [notification, setNotification] = useState('');
  const [eyeColor, setEyeColor] = useState('grey');
  const [cameraColor, setCameraColor] = useState('grey');
  const [statusColor, setStatusColor] = useState('#ffff');


  const random = Math.floor(Math.random() * data.length);
  // const random = Math.floor(Math.random() * 3);

  // console.log(data.length);
  const [questNum, setQuestNum] = useState(random);

  const activeBtnText = 'Hoàn tất và lưu điểm của Khôi';
  const inactiveBtnText = 'Đã lưu điểm bài thi';

  const [isSaved, setIsSaved] = useState(false);

  // // const test = data[questNum - 1][questNum.toString()]["ansA"];
  // // console.log('test: ', test);
  // console.log(data)
  // const questNumString = questNum.toString();
  // console.log('questNumString: ', questNumString);
  // console.log('type of questNumString: ', typeof questNumString);
  // // const test = data[questNum - 1][questNumString]["ansA"];
  // // console.log('test: ', test);
  // console.log('questNum - 1: ', questNum - 1);
  // console.log('questNumString: ', questNum.toString());
  // const test = data[0]["ansA"];
  // console.log('test: ', test);


  const [A, setA] = useState(data[questNum]["ansA"]);
  const [B, setB] = useState(data[questNum]["ansB"]);
  const [C, setC] = useState(data[questNum]["ansC"]);
  const [D, setD] = useState(data[questNum]["ansD"]);

  const handleRandom = () => {
    const random2 = Math.floor(Math.random() * data.length);
    // const random2 = Math.floor(Math.random() * 3);

    setQuestNum(random2);
    setIsSaved(false);
    setTimeout(() => {
      setNotification('');
      setEyeColor('gray');
      setCameraColor('gray');
    }, 2000);
    setTimeout(() => {
      setNotification('Chọn câu tiếp theo nào Khôi!Không nhớ thì tra từ điển!Làm xong nhớ bấm lưu điểm!');
      setEyeColor(color.hackingColor);
      setCameraColor(color.hackingColor);
    }, 4300);

  };
  const setAnswer = () => {
    setA(data[questNum].ansA);
    setB(data[questNum].ansB);
    setC(data[questNum].ansC);
    setD(data[questNum].ansD);

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
    ;

  };
  const handlePressSaving = () => {
    setIsSaved(true);
    setTimeout(() => {
      setNotification('Đã lưu điểm!');
    }, 0);
    setTimeout(() => {
      dailyScore < 20 ?
        setNotification('Mỗi ngày phải đủ 20 điểm nha!Hôm nay em mới làm được ' + dailyScore + ' câu thôi!') :
        setNotification('Hôm nay Khôi làm được' + dailyScore + ' câu!');
    }, 1500);
    setTimeout(() => {
      navigation.navigate("Splash Screen");

    }, 3000)
  };

  const getValueAnswerA = () => {

    if (A === data[questNum].correction) {
      // Alert.alert(`You correct! + 1 point`);
      setNotification('Chọn chính xác! + 1 điểm nha!');
      setEyeColor('#2ff5d5');
      setCameraColor('#2ff5d5');
      // setStatusColor('#2ff5d5');
      handleCorrectAns();
      handleRandom();
      // saveScore();


    } else {
      Alert.alert('Không phải đáp án này nha, bấm quài!');
      setNotification('Chọn đáp án sai -1 điểm! Chọn lại đi Khôi tồ...!');
      // setStatusColor('red');
      setEyeColor('red');
      setCameraColor('red');
      handleWrongAns();
      // saveScore();
      setIsSaved(false);

    };

  };
  const getValueAnswerB = () => {
    if (B === data[questNum].correction) {
      // Alert.alert(`You correct! + 1 point`);
      setNotification('Chọn chính xác! + 1 điểm nha!');
      setStatusColor(color.hackingColor);
      setEyeColor('#2ff5d5');
      setCameraColor('#2ff5d5');
      handleCorrectAns();
      handleRandom();
      // saveScore();

    } else {
      Alert.alert('Không phải đáp án này nha, bấm quài!');
      setNotification('Chọn đáp án sai -1 điểm! Chọn lại đi Khôi tồ...!');
      // setStatusColor('red');
      setEyeColor('red');
      setCameraColor('red');
      handleWrongAns();
      // saveScore();
      setIsSaved(false);



    };
  };

  const getValueAnswerC = () => {
    if (C === data[questNum].correction) {
      // Alert.alert(`You correct! + 1 point`);
      setNotification('Chọn chính xác! + 1 điểm nha!');
      setCameraColor('#2ff5d5');
      setEyeColor('#2ff5d5');
      handleCorrectAns();
      handleRandom();
      // saveScore();

    } else {
      Alert.alert('Không phải đáp án này nha, bấm quài!');
      setNotification('Chọn đáp án sai -1 điểm! Chọn lại đi Khôi tồ...!');
      // setStatusColor('red');
      setEyeColor('red');
      setCameraColor('red');
      handleWrongAns();
      // saveScore();
      setIsSaved(false);



    };

  };
  const getValueAnswerD = () => {
    if (D === data[questNum].correction) {
      // Alert.alert(`You correct! + 1 point`);
      setNotification('Chọn chính xác! + 1 điểm nha!');
      setCameraColor('#2ff5d5');
      setEyeColor('#2ff5d5');
      handleCorrectAns();
      handleRandom();
      // saveScore();

    } else {
      Alert.alert('Không phải đáp án này nha, bấm quài!');
      setNotification('Chọn đáp án sai -1 điểm! Chọn lại đi Khôi tồ...!');
      setEyeColor('red');
      setCameraColor('red');
      handleWrongAns();
      // saveScore();
      setIsSaved(false);


    };
  };
  // console.log(scoreStore.totalScore);

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
          <Text style={styles.dailyStatusText}>Total questions: </Text>
          <Text style={[styles.dailyStatusText, { color: color.hackingColor, fontSize: 15, fontWeight: 800 }]}>
            {Object.keys(data).length}
          </Text>
        </View>
        <View style={styles.dailyStatusBox}>
          <Text style={styles.dailyStatusText}>Số điểm hôm nay của Khôi: </Text>
          <Text style={[styles.dailyStatusText, { color: color.hackingColor, fontSize: 15, fontWeight: 800 }]}>
            {dailyScore}
          </Text>
        </View>

        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              Anh Tuấn Hacker đẹp trai tài giỏi đang ở đây...!!!_
            </Text>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome name="eye" size={18} color={eyeColor} />
              <Text style={{ width: 5 }}></Text>
              <Entypo name="video-camera" size={18} color={cameraColor} />
            </View>
          </View>

          <View style={[styles.dailyStatusBox, { width: 310, borderWidth: 0.5, borderRadius: 15, justifyContent: "center" }]}>
            <Text style={[styles.dailyStatusText, { fontSize: 19, color: statusColor, fontFamily: 'IBMPlexMono-Bold' }]}>
              {notification}
            </Text>
          </View>

        </View>



      </View>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Splash Screen')} >
        <Text style={{ color: '#ffff' }} >Back to main page</Text>
      </TouchableOpacity> */}

      <View style={styles.questContainer}>

        <View style={styles.questNum}>
          <Text style={styles.questNumText}>
            {'Question ' + data[questNum]["id"] + ": "}
          </Text>
        </View>

        <View style={styles.questBox}>
          <Text style={styles.questBoxText}>{data[questNum]["question"]} </Text>
        </View>

        <TouchableOpacity
          style={styles.anwserBox}
          onPressOut={getValueAnswerA}
          onPressIn={setAnswer}
        >
          <Text style={styles.text}>{"A. " + data[questNum]["ansA"]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressOut={getValueAnswerB}
          onPressIn={setAnswer}
          style={styles.anwserBox}
        >
          <Text style={styles.text}>{"B. " + data[questNum]["ansB"]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressOut={getValueAnswerC}
          onPressIn={setAnswer}
          style={styles.anwserBox}
        >
          <Text style={styles.text}>{"C. " + data[questNum]["ansC"]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.anwserBox}
          onPressIn={setAnswer}
          onPressOut={getValueAnswerD}
        >
          <Text style={styles.text}>{"D. " + data[questNum].ansD}</Text>
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
  questContainer: {
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
    borderRadius: 0,
    marginBottom: 12,
    backgroundColor: color.classicBackground
  },

  questBoxText: {
    fontSize: 23,
    color: color.white,
    fontFamily: 'IBMPlexMono-Bold'
  },
  anwserBox: {
    borderWidth: 1,
    borderColor: '#ffff',
    height: 50,
    width: width - 30,
    borderRadius: 0,
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
    borderRadius: 0,
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
    borderRadius: 0
  },
  inactiveBtn: {
    borderWidth: 2,
    borderColor: 'gray',
    height: 50,
    width: width - 30,
    borderRadius: 0,
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
    borderWidth: 0.5,
    borderColor: '#ffff',
    flexDirection: 'row',
    // justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    // backgroundColor: '#0e19bf'
  },
  dailyStatusText: {
    color: '#ffff',
    fontSize: 15,
    fontFamily: 'IBMPlexMono-Regular'
  },
  avatarContainer: {
    flexDirection: "row",
    marginTop: 10,
    // backgroundColor: '#0e19bf'
  },
  avatar: {
    height: 90,
    // margin: 8,
    width: 90,
    borderWidth: 1,
    // borderColor: color.hackingColor,
    padding: 3,
    // marginTop: 30
  },
  avatarText: {
    color: color.hackingColor,
    fontSize: 11,
    fontFamily: 'IBMPlexMono-Regular'
  },
});