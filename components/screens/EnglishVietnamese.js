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
  const [statusColor, setStatusColor] = useState(color.white);


  const [dt, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000)

    return () => clearInterval(secTimer);
  }, []);
  // console.log(`timer:`, dt);

  const random = Math.floor(Math.random() * data.length) + 1;
  const [questNum, setQuestNum] = useState(random);
  const activeBtnText = 'Hoàn tất và nhận';
  const inactiveBtnText = 'Đã bỏ vàng vào túi';

  const [isSaved, setIsSaved] = useState(false);

  const [A, setA] = useState(data[questNum]["ansA"]);
  const [B, setB] = useState(data[questNum]["ansB"]);
  const [C, setC] = useState(data[questNum]["ansC"]);
  const [D, setD] = useState(data[questNum]["ansD"]);

  const handleRandom = () => {
    const random2 = Math.floor(Math.random() * data.length) + 1;

    setQuestNum(random2);
    setIsSaved(false);
    setTimeout(() => {
      setNotification('');
      setEyeColor('gray');
      setCameraColor('gray');
    }, 2000);
    setTimeout(() => {
      setNotification('Chọn câu tiếp theo nào Khôi!Không nhớ thì tra từ điển!Làm xong nhớ bấm lưu!');
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
    updateScore("1", newScore, dt);
    setDailyScore(0);
    ;

  };
  const updateScore = (id, newScore, dt) => {

    fetch(`https://63eddd2f388920150dd47775.mockapi.io/userAccount/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        score: newScore,
        finishTime: dt
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
      setNotification('Đã lưu!');
    }, 0);
    setTimeout(() => {
      dailyScore < 20 ?
        setNotification('Mỗi ngày phải đủ 20 vàng nha!Hôm nay em mới làm được ' + dailyScore + ' câu thôi!') :
        setNotification('Hôm nay Khôi làm được: ' + dailyScore + ' câu!');
    }, 1500);
    setTimeout(() => {
      Alert.alert(`Hãy xoá ứng dụng chạy ngầm rồi ngày mai mở lại làm vàng sẽ được chuyển về!`);
      () => navigation.navigate('Splash Screen');
    }, 2000);


  };

  const getValueAnswerA = () => {

    if (A === data[questNum].correction) {
      // Alert.alert(`You correct! + 1 point`);
      setNotification('Chọn chính xác! + 1 vàng nha!');
      setEyeColor('#2ff5d5');
      setCameraColor('#2ff5d5');
      setStatusColor(color.white);
      handleCorrectAns();
      handleRandom();
      // saveScore();


    } else {
      Alert.alert('Không phải đáp án này nha, bấm quài!');
      setNotification('Chọn đáp án sai -1 vàng! Chọn lại đi...!');
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
      setNotification('Chọn chính xác! + 1 vàng nha!');
      setStatusColor(color.white);
      setEyeColor('#2ff5d5');
      setCameraColor('#2ff5d5');
      handleCorrectAns();
      handleRandom();
      // saveScore();

    } else {
      Alert.alert('Không phải đáp án này nha, bấm quài!');
      setNotification('Chọn đáp án sai -1 vàng! Chọn lại đi Khôi tồ...!');
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
      setNotification('Chọn chính xác! + 1 vàng nha!');
      setStatusColor(color.white);
      setCameraColor('#2ff5d5');
      setEyeColor('#2ff5d5');
      handleCorrectAns();
      handleRandom();
      // saveScore();

    } else {
      Alert.alert('Không phải đáp án này nha, bấm quài!');
      setNotification('Chọn đáp án sai -1 vàng! Chọn lại đi Khôi tồ...!');
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
      setNotification('Chọn chính xác! + 1 vàng nha!');
      setStatusColor(color.white);
      setCameraColor('#2ff5d5');
      setEyeColor('#2ff5d5');
      handleCorrectAns();
      handleRandom();
      // saveScore();

    } else {
      Alert.alert('Không phải đáp án này nha, bấm quài!');
      setNotification('Chọn đáp án sai -1 vàng! Chọn lại đi!');
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
          score={oldTotalScore}
          borderWidth={2}
        />
        <View style={{ alignItems: "center", justifyContent: "center", height: 70 }}>
          <Text style={{ color: color.white, fontFamily: 'IBMPlexMono-Bold', fontSize: 23 }}>MULTIPLE CHOICES QUESTION</Text>

        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.dailyStatusBox}>
            <Text style={styles.dailyStatusText}>Total questions: </Text>
            <Text style={[styles.dailyStatusText, { color: color.hackingColor, fontSize: 15, fontWeight: 800 }]}>
              {data.length}
            </Text>
          </View>
          <View style={styles.dailyStatusBox}>
            <Text style={styles.dailyStatusText}>Số vàng hôm nay nhận: </Text>
            <Text style={[styles.dailyStatusText, { color: color.hackingColor, fontSize: 15, fontWeight: 800 }]}>
              {dailyScore}
            </Text>
          </View>

          <View style={styles.avatarContainer}>
            <View style={{ borderWidth: 0, borderColor: '#000000', flexDirection: 'column-reverse' }}>
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
              <Text style={[styles.dailyStatusText, { fontSize: 16, color: statusColor, fontFamily: 'IBMPlexMono-Bold' }]}>
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
              dailyScore >= 2 ?
                <TouchableOpacity
                  style={[isSaved === true ? styles.inactiveBtn : styles.activeBtn]}
                  onPressOut={saveScore}
                  onPressIn={handlePressSaving}
                >
                  <View style={{ flexDirection: "row" }}>

                    <Text style={isSaved === true ? styles.inactiveText : styles.activeText} >
                      {isSaved === false ? (activeBtnText + ' ' + dailyScore) : inactiveBtnText}
                    </Text>
                    <ImageBackground
                      style={{ height: 33, width: 33, marginLeft: 10, justifyContent: "center" }}
                      source={require('../../images/item/stock-vector-one-coin-white-background.png')}>
                    </ImageBackground>
                  </View>
                </TouchableOpacity> :
                <TouchableOpacity>
                  <Text style={[styles.activeText, { fontSize: 15, color: 'red' }]}>
                    Phải làm đủ trên 20 vàng mới hiện nút lưu, nếu không lưu sẽ bị mất vàng vừa nhận!!!</Text>
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
    backgroundColor: color.PrimeBackground,
    height: height,
  },
  headerTitle: {
    color: color.white,
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
    color: color.white,
    fontSize: 25,
    fontFamily: 'IBMPlexMono-Bold'
  },
  questBox: {
    height: height / 6,
    width: width - 30,
    borderWidth: 0.5,
    borderColor: color.hackingColor,
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 8,
    marginBottom: 12,
    backgroundColor: color.PrimeBackground
  },

  questBoxText: {
    fontSize: 30,
    color: color.white,
    fontFamily: 'IBMPlexMono-Bold'
  },
  anwserBox: {
    borderWidth: 0.5,
    borderColor: color.hackingColor,
    height: 50,
    width: width - 30,
    // borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: color.PrimeBackground


  },

  answserText: {
    fontSize: 17,
    color: color.white,
    fontFamily: 'IBMPlexMono-Bold',

  },
  activeBtn: {
    borderWidth: 1,
    borderColor: color.white,
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
    borderColor: color.hackingColor,
    flexDirection: 'row',
    // justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    // backgroundColor: '#0e19bf'
  },
  dailyStatusText: {
    color: color.white,
    fontSize: 15,
    fontFamily: 'IBMPlexMono-Regular'
  },
  avatarContainer: {
    flexDirection: "row",
    marginTop: 10,
    height: 100,
    borderRadius: 15,
    // backgroundColor: color.black
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