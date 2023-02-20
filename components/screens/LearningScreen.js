import { React, useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Alert, ScrollView, ImageBackground } from "react-native";
import { GolobalContext } from '../../Global/globalData';

import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HeaderTop from "../headerTop/HeaderTop";

import color from '../../colorStore';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// import data from '../../data/Khoi-Vocabulary';
const scoreStore = {
  totalScore: 0,

};



export default LearningScreen = ({ navigation }) => {

  const { data, dataB } = useContext(GolobalContext);
  const { userData } = useContext(GolobalContext);
  const oldTotalScore = userData[0]['score'];

  const [dailyScore, setDailyScore] = useState(0);
  const [notification, setNotification] = useState('');
  const [eyeColor, setEyeColor] = useState('grey');
  const [cameraColor, setCameraColor] = useState('grey');
  const [statusColor, setStatusColor] = useState('#000000');


  const random = Math.floor(Math.random() * data.length);

  const [questNum, setQuestNum] = useState(random);
  const activeBtnText = 'Hoàn tất và lưu điểm của Khôi';
  const inactiveBtnText = 'Đã lưu điểm bài thi';

  const [isSaved, setIsSaved] = useState(false);

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

  const newScore = oldTotalScore + dailyScore;
  const saveScore = () => {
    updateScore("1", newScore);
    setDailyScore(0);
    ;

  };
  const updateScore = (id, score) => {
    fetch(`https://63eddd2f388920150dd47775.mockapi.io/userAccount/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        score: newScore
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

  const handlePressSaving = () => {
    setIsSaved(true);
    setTimeout(() => {
      setNotification('Đã lưu điểm!');
    }, 0);
    setTimeout(() => {
      dailyScore < 20 ?
        setNotification('Mỗi ngày phải đủ 20 điểm nha!Hôm nay em mới làm được ' + dailyScore + ' câu thôi!') :
        setNotification('Hôm nay Khôi làm được: ' + dailyScore + ' câu!');
    }, 1500);
    setTimeout(() => {
      Alert.alert(`Hãy xoá ứng dụng chạy ngầm rồi ngày mai mở lại làm điểm sẽ được cập nhật!`);
      () => navigation.navigate('Splash Screen');
    }, 2000);


  };

  const getValueAnswerA = () => {

    if (A === data[questNum].correction) {
      // Alert.alert(`You correct! + 1 point`);
      setNotification('Chọn chính xác! + 1 điểm nha!');
      setEyeColor('#2ff5d5');
      setCameraColor('#2ff5d5');
      setStatusColor(color.black);
      handleCorrectAns();
      handleRandom();
      // saveScore();


    } else {
      Alert.alert('Không phải đáp án này nha, bấm quài!');
      setNotification('Chọn đáp án sai -1 điểm! Chọn lại đi Khôi tồ...!');
      setStatusColor('red');
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
      setStatusColor(color.black);
      setEyeColor('#2ff5d5');
      setCameraColor('#2ff5d5');
      handleCorrectAns();
      handleRandom();
      // saveScore();

    } else {
      Alert.alert('Không phải đáp án này nha, bấm quài!');
      setNotification('Chọn đáp án sai -1 điểm! Chọn lại đi Khôi tồ...!');
      setStatusColor('red');
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
      setStatusColor(color.black);
      setCameraColor('#2ff5d5');
      setEyeColor('#2ff5d5');
      handleCorrectAns();
      handleRandom();
      // saveScore();

    } else {
      Alert.alert('Không phải đáp án này nha, bấm quài!');
      setNotification('Chọn đáp án sai -1 điểm! Chọn lại đi Khôi tồ...!');
      setStatusColor('red');
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
      setStatusColor(color.black);
      setCameraColor('#2ff5d5');
      setEyeColor('#2ff5d5');
      handleCorrectAns();
      handleRandom();
      // saveScore();

    } else {
      Alert.alert('Không phải đáp án này nha, bấm quài!');
      setNotification('Chọn đáp án sai -1 điểm! Chọn lại đi Khôi tồ...!');
      setStatusColor('red');
      setEyeColor('red');
      setCameraColor('red');
      handleWrongAns();
      // saveScore();
      setIsSaved(false);


    };
  };
  // console.log(scoreStore.totalScore);

  return (
    <ScrollView>
      <View style={styles.grandContainer}>
        <HeaderTop
          backTo={() => navigation.navigate('Bottom Tab Main')}
          // score={scoreStore.totalScore}
          score={oldTotalScore}
          scoreLabel={'Tổng điểm: '}
          borderWidth={2}
        />
        <View style={{ alignItems: "center", justifyContent: "center", height: 70 }}>
          <Text style={{ color: color.black, fontFamily: 'IBMPlexMono-Bold', fontSize: 23 }}>MULTIPLE CHOICES QUESTION</Text>

        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.dailyStatusBox}>
            <Text style={styles.dailyStatusText}>Total questions: </Text>
            <Text style={[styles.dailyStatusText, { color: color.hackingColor, fontSize: 15, fontWeight: 800 }]}>
              {data.length}
            </Text>
          </View>
          <View style={styles.dailyStatusBox}>
            <Text style={styles.dailyStatusText}>Số điểm hôm nay của Khôi: </Text>
            <Text style={[styles.dailyStatusText, { color: color.hackingColor, fontSize: 15, fontWeight: 800 }]}>
              {dailyScore}
            </Text>
          </View>

          <View style={styles.avatarContainer}>
            <View style={{ borderWidth: 1, borderColor: '#ffff', flexDirection: 'column-reverse' }}>
              <View style={styles.avatarBox}>
                {/* <Text style={styles.avatarText}>
                Anh Tuấn Hacker đẹp trai tài giỏi đang ở đây...!!!_
              </Text> */}
                <View>
                  <ImageBackground
                    source={require(`../../images/btnIcon/angry.jpg`)}
                    style={{ height: 60, width: 60 }} />
                </View>
                <TouchableOpacity onPress={handleRandom}>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="eye" size={18} color={eyeColor} />
                    <Text style={{ width: 5 }}></Text>
                    <Entypo name="video-camera" size={18} color={cameraColor} />
                  </View>
                </TouchableOpacity>
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
            <Text style={styles.answserText}>{"A. " + data[questNum]["ansA"]}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPressOut={getValueAnswerB}
            onPressIn={setAnswer}
            style={styles.anwserBox}
          >
            <Text style={styles.answserText}>{"B. " + data[questNum]["ansB"]}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPressOut={getValueAnswerC}
            onPressIn={setAnswer}
            style={styles.anwserBox}
          >
            <Text style={styles.answserText}>{"C. " + data[questNum]["ansC"]}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.anwserBox}
            onPressIn={setAnswer}
            onPressOut={getValueAnswerD}
          >
            <Text style={styles.answserText}>{"D. " + data[questNum].ansD}</Text>
          </TouchableOpacity>

          <View style={{ paddingHorizontal: 18 }}>
            {
              dailyScore >= 15 ?
                <TouchableOpacity
                  style={[isSaved === true ? styles.inactiveBtn : styles.activeBtn]}
                  onPressOut={saveScore}
                  onPressIn={handlePressSaving}
                >
                  <Text style={isSaved === true ? styles.inactiveText : styles.activeText} >
                    {isSaved === false ? activeBtnText : inactiveBtnText}
                  </Text>
                </TouchableOpacity> :
                <TouchableOpacity>
                  <Text style={[styles.activeText, { fontSize: 15, color: 'red' }]}>
                    Phải làm đủ trên 20 điểm mới hiện nút lưu điểm, nếu không lưu sẽ bị mất kết quả vừa làm!!!</Text>
                </TouchableOpacity>
            }

          </View>

        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    backgroundColor: color.SecondBackground,
    height: height,
  },
  headerTitle: {
    color: 'color.homeHeaderTitle',
    fontSize: 35,
    fontFamily: 'IBMPlexMono-Bold',
  },
  questContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  questNum: {
    paddingVertical: 10
  },
  questNumText: {
    color: color.black,
    fontSize: 25,
    fontFamily: 'IBMPlexMono-Bold'
  },
  questBox: {
    height: height / 6,
    width: width - 30,
    borderWidth: 2,
    borderColor: 'grey',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: color.white
  },

  questBoxText: {
    fontSize: 30,
    color: color.black,
    fontFamily: 'IBMPlexMono-Bold'
  },
  anwserBox: {
    borderWidth: 2,
    borderColor: 'grey',
    height: 50,
    width: width - 120,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: color.white


  },

  answserText: {
    fontSize: 17,
    color: color.black,
    fontFamily: 'IBMPlexMono-Bold',

  },
  activeBtn: {
    borderWidth: 2,
    borderColor: color.black,
    height: 50,
    width: width - 30,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: color.white,
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
    borderColor: '#393636',
    height: 50,
    width: width - 30,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: '#bcbcbc',

  },
  activeText: {
    fontSize: 19,
    color: color.black,
    fontFamily: 'IBMPlexMono-Regular',
  },
  inactiveText: {
    fontSize: 19,
    color: 'gray',
    fontFamily: 'IBMPlexMono-Regular',
  },
  dailyStatusBox: {
    width: 400,
    // height: 90,
    borderWidth: 0.5,
    borderColor: color.black,
    flexDirection: 'row',
    // justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    // backgroundColor: '#0e19bf'
  },
  dailyStatusText: {
    color: color.black,
    fontSize: 15,
    fontFamily: 'IBMPlexMono-Regular'
  },
  avatarContainer: {
    flexDirection: "row",
    marginTop: 10,
    height: 100,
    borderRadius: 15,
    backgroundColor: color.white
  },
  avatarBox: {
    height: 90,
    // margin: 8,
    width: 90,
    // borderWidth: 1,
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