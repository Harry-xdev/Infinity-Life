import React, { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Button, TouchableOpacity, Pressable, Modal, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HeaderTop from "../../headerTop/HeaderTop";
import { GolobalContext } from "../../../Global/globalData";
import DayTransporter from "./DayTransporter"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default WorkingDayCounter = ({ navigation, props }) => {
  const march =
    [
      {
        "id": 1,
        "name": "WED",
        "workingTime": 0
      },
      {
        "id": 2,
        "name": "THU",
        "workingTime": 0
      },
      {
        "id": 3,
        "name": "FRI",
        "workingTime": 0
      },
      {
        "id": 4,
        "name": "SAT",
        "workingTime": 0
      },
      {
        "id": 5,
        "name": "SUN",
        "workingTime": 0
      },
      {
        "id": 6,
        "name": "MON",
        "workingTime": 0
      },
      {
        "id": 7,
        "name": "TUE",
        "workingTime": 0
      },
      {
        "id": 8,
        "name": "WED",
        "workingTime": 0
      },
      {
        "id": 9,
        "name": "THU",
        "workingTime": 0
      },
      {
        "id": 10,
        "name": "FRI",
        "workingTime": 0
      },
      {
        "id": 11,
        "name": "SAT",
        "workingTime": 0
      },
      {
        "id": 12,
        "name": "SUN",
        "workingTime": 0
      },
      {
        "id": 13,
        "name": "MON",
        "workingTime": 0
      },
      {
        "id": 14,
        "name": "TUE",
        "workingTime": 0
      },
      {
        "id": 15,
        "name": "WED",
        "workingTime": 0
      },
      {
        "id": 16,
        "name": "THU",
        "workingTime": 0
      },
      {
        "id": 17,
        "name": "FRI",
        "workingTime": 0
      },
      {
        "id": 18,
        "name": "SAT",
        "workingTime": 0
      },
      {
        "id": 19,
        "name": "SUN",
        "workingTime": 0
      },
      {
        "id": 20,
        "name": "MON",
        "workingTime": 0
      },
      {
        "id": 21,
        "name": "TUE",
        "workingTime": 0
      },
      {
        "id": 22,
        "name": "WED",
        "workingTime": 0
      },
      {
        "id": 23,
        "name": "THU",
        "workingTime": 0
      },
      {
        "id": 24,
        "name": "FRI",
        "workingTime": 0
      },
      {
        "id": 25,
        "name": "SAT",
        "workingTime": 0
      },
      {
        "id": 26,
        "name": "SUN",
        "workingTime": 0
      },
      {
        "id": 27,
        "name": "MON",
        "workingTime": 0
      },
      {
        "id": 28,
        "name": "TUE",
        "workingTime": 0
      },
      {
        "id": 29,
        "name": "WED",
        "workingTime": 0
      },
      {
        "id": 30,
        "name": "THU",
        "workingTime": 0
      },
      {
        "id": 31,
        "name": "FRI",
        "workingTime": 0
      }
    ];
  const [apr, setApr] = useState([]);
  const { monthData, monthServer, monthSumData, current } = useContext(GolobalContext);
  // console.log(monthSumData);
  // currentMon + 1 is current month of year
  const [currentMon, setCurrentMon] = useState(2);
  const [currentDate, setCurrentDate] = useState();
  const [hours, setHours] = useState(0);
  const hoursToMin = hours * 60;

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year
    );
    setHours(hours);
  }, []);

  const [hour, setHour] = useState(new Date().getHours());
  const [mins, setMins] = useState(new Date().getMinutes());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setHour(new Date().getHours());
      setMins(new Date().getMinutes());
    }, 1000);
    return () => clearInterval(secTimer);
  }, []);


  const [month, setMonth] = useState(monthData);
  const [activeDay, setActiveDay] = useState(current);

  const [totalWorkingHour, setTotalWorkingHour] = useState(0);
  const [gold, setGold] = useState(monthSumData[2]["sumTotal"]);
  const [goldLocal, setGoldLocal] = useState(0);
  const [leaveTime, setLeaveTime] = useState();
  const [totalHour, setTotalHour] = useState();
  const [workingMinState, setWorkingMinState] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalNotify, setModalNotify] = useState('Save data?');

  const [isSaved, setIsSaved] = useState(true);

  // console.log('month data children:', monthData);

  const multipleFunc = () => {
    goldLocal === 0 ? navigation.navigate("Bottom Tab Main") : setModalVisible(true);

  };


  const putOutTime = (id, timeOut, workingTime) => {
    var dayName = month[activeDay]["name"];
    fetch(`${monthServer}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        timeOut: timeOut,
        workingTime: workingTime,
        name: dayName,
      })

    });
  };

  const handleClearOnline = (id) => {
    var dayName = month[activeDay]["name"];
    fetch(`${monthServer}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        timeOut: "",
        workingTime: 0,
        name: dayName,
      })

    });
  };


  // let leavingTimeMark = 540;
  let leavingTimeMark = hour * 60 + mins;

  const calculateWorkingHourPerDay = () => {
    var x = parseInt(leavingTimeMark / 60);
    var t = leavingTimeMark / 60 - x;

    if (0 <= t && t < 0.5) {
      t = 0;
    } else if (0.5 <= t && t < 1) {
      t = 0.5;
    };
    var totalHour = x + t;

    var hourString = "";
    var minString = "";

    x < 10 ? hourString = "0" + x.toString() : hourString = x.toString();
    t === 0 ? minString = "00" : minString = (t * 60).toString();

    let setTimeOutString = month[activeDay].timeOut = hourString + ":" + minString;
    var overTime = 0;
    leavingTimeMark < 990 ? overTime = 0 : overTime = totalHour - 16.5;
    let setWorkingMinPerDay = ((totalHour - 7.5 - 1) + overTime * 1.5) * 60;

    let id = activeDay + 1;
    putOutTime(id, setTimeOutString, setWorkingMinPerDay);
    sumFunc();
    setGoldLocal(goldLocal + 8 * 67300);
    setIsSaved(false);
    setTotalWorkingHour((x + t) * 60);

  };

  // console.log(`leave time: `, leaveTime);
  // console.log(`workingMinState: `, workingMinState);
  // console.log(`leaving time mark:`, leavingTimeMark);

  const setOutTime1630 = () => {

    let id = activeDay + 1;
    let timeOut = "16:30";
    let workingTime = 480;
    month[activeDay].timeOut = timeOut;
    month[activeDay].workingTime = workingTime;
    putOutTime(id, timeOut, workingTime);
    sumFunc();
    setGoldLocal(goldLocal + 8 * 67300);
    setIsSaved(false);

  };

  // console.log(`gold local:`, goldLocal);
  const sumFunc = () => {
    var arrTime = month.map(e => e.workingTime);
    var total = 0;
    for (let i in arrTime) {
      total += arrTime[i]
    }
    setTotalHour(total / 60);
  };
  // console.log(`total hour:`, totalHour);

  const handleClear = () => {
    month[activeDay].workingTime = 0;
    month[activeDay].timeOut = "";
    var id = activeDay + 1;

    sumFunc();
    handleClearOnline(id);
    setGoldLocal(goldLocal - 8 * 67300);
    setIsSaved(false);
  };

  const handlePressYES = () => {
    handleUpdateTotalSalary(3, totalWorkingHour, totalHour);
    setModalVisible(false);
    setTimeout(() => {
      navigation.navigate("Bottom Tab Main");

    }, 800);

  };

  const handleUpdateTotalSalary = (id, totalWorkingHour, totalHour) => {
    setIsSaved(true);
    fetch(`http://192.168.2.7:4000/monthSum/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        name: "MAR",
        totalHour: totalHour,
        supportSalary: 1038000,
        salaryTotal: ((totalWorkingHour / 60) * 67300),
        sumTotal: ((totalWorkingHour / 60) * 67300) + 10380000
      })
    });
  };

  // console.log(`sumTotal: `, monthSumData[2]["sumTotal"]);
  var totalGold = gold + goldLocal
  const goldSliced1 = totalGold.toString().slice(0, 2);
  const goldSliced2 = totalGold.toString().slice(2, 5);
  const goldSliced3 = totalGold.toString().slice(5, 8);
  const goldDisplay = goldSliced1 + ',' + goldSliced2 + ',' + goldSliced3

  // console.log(`active day main:`, activeDay);

  return (
    <View style={styles.grandContainer}>
      <HeaderTop
        backTo={multipleFunc}
        gold={goldDisplay}
      />
      {/* <Text>{currentDate + " " + hour + ":" + mins}</Text> */}

      <View style={styles.displayInfo}>
        <Text style={styles.displayInfo.text} >Leave time: {month[activeDay].timeOut}</Text>
        <Text> Total Working Hour/ Day: {month[activeDay].workingTime / 60} </Text>
        {/* <Text>Hours/day: {month[activeDay].workingTime / 60}</Text>
        <Text>Hours/month: {totalWorkingHour / 60}</Text>
        <Text>Salary/day: {(month[activeDay].workingTime / 60) * 67300}</Text> */}

      </View>

      {/* <View style={styles.calContainer}>
        {
          month.map((e) => <DayTransporter
            key={e.id}
            dayid={e.id}
            timeOut={e.timeOut}
            dayName={e.name}
            onPressIn={() => setActiveDay(e.id - 1)}
            activeDay={activeDay}
          />)
        }
      </View> */}

      <View style={styles.calContainer}>
        {
          month.map((e) =>
            <Pressable
              key={e.id}
              style={activeDay === (e.id - 1) ? styles.activeBtn : styles.inActiveBtn}
              onPress={() => setActiveDay(e.id - 1)}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={activeDay === (e.id - 1) ? styles.textOn : styles.textOff}>{e.id}</Text>
                <Text style={activeDay === (e.id - 1) ? styles.textOn : styles.textOff}>{e.name}</Text>
                <Text style={{ fontSize: 10, color: 'lightcoral' }}>{e.timeOut}</Text>
              </View>

            </Pressable>
          )
        }
      </View>



      <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
        <Text>Calendar</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{modalNotify}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={handlePressYES} >
              <Text>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text>No</Text>
            </TouchableOpacity>
          </View>

        </View>

      </Modal>



      {
        (month[activeDay]["timeOut"] !== "" && month[activeDay]["timeOut"] !== undefined) ? <View style={styles.fingerprint} /> :
          <Pressable
            style={styles.fingerprint}
            onPressOut={calculateWorkingHourPerDay}
            onPressIn={() => handleUpdateTotalSalary(3, totalWorkingHour, totalHour)}
          >
            <MaterialIcons name="fingerprint" size={55} color={color.hackingColor} />
          </Pressable>
      }

      <View>

      </View>

      {
        (month[activeDay]["timeOut"] === "" || month[activeDay]["timeOut"] === undefined) ?
          <View
            style={styles.inactiveBtnUpClear}
          ><Text style={styles.inactiveBtnUpClear.text}>Clear</Text>
          </View> :
          <TouchableOpacity
            style={styles.activeBtnUpClear}
            onPress={handleClear}
          ><Text style={styles.activeBtnUpClear.text}>Clear</Text>
          </TouchableOpacity>
      }

      {
        (isSaved === true || goldLocal === 0) ?
          <View
            style={styles.inactiveBtnUpClear}
          ><Text style={styles.inactiveBtnUpClear.text}>Updated</Text>
          </View>
          :
          <TouchableOpacity
            style={styles.activeBtnUpClear}
            onPress={() => handleUpdateTotalSalary(3, totalWorkingHour, totalHour)}
          ><Text style={styles.activeBtnUpClear.text}>Update</Text>
          </TouchableOpacity>
      }




    </View>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    // backgroundColor: color.PrimeBackground,
    backgroundColor: color.SecoundBackground,
    height: height,
    alignItems: "center"
  },
  headerTitle: {
    color: color.homeHeaderTitle,
    fontSize: 35,
    fontFamily: 'IBMPlexMono-Bold',
  },
  calContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    height: 390,
    width: width - 40,
    backgroundColor: color.PrimeBackground,
    // justifyContent: "center",
    paddingLeft: 12,
    paddingTop: 12,
    borderRadius: 20,
    marginBottom: 20,

  },
  displayInfo: {
    // borderWidth: 1,
    height: 100,
    width: width,
    alignItems: "center",
    text: {
      fontFamily: "IBMPlexMono-Bold",
      fontSize: 20,
      color: "grey"
    }

    // backgroundColor: color.black
  },
  activeBtn: {
    borderWidth: 0.5,
    height: 40,
    width: 50,
    borderRadius: 5,
    margin: 1
  },
  fingerprint: {
    width: 60,
    height: 70,
    // borderWidth: 1,
    backgroundColor: color.PrimeBackground,
    borderRadius: 15,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",

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
  activeBtnUpClear: {
    text: {
      color: 'blue',
      fontFamily: "IBMPlexMono-Bold",
      fontSize: 20
    }
  },
  inactiveBtnUpClear: {
    text: {
      color: 'grey',
      fontFamily: "IBMPlexMono-Bold",
      fontSize: 20
    }
  },
  activeTimePicker: {
    text: {
      fontFamily: "IBMPlexMono-Regular",
    }
  },
  inactiveTimePicker: {
    text: {
      fontFamily: "IBMPlexMono-Regular",
    }
  },
  inActiveBtn: {
    // borderWidth: 0.5,
    borderColor: color.white,
    height: 70,
    width: 50,
    borderRadius: 8,
    margin: 1,
    backgroundColor: 'transparent'

  },
  activeBtn: {
    // borderWidth: 0.5,
    height: 70,
    width: 50,
    borderRadius: 8,
    margin: 1,
    backgroundColor: color.white,


  },
  textOff: {
    color: color.white,
    fontFamily: "IBMPlexMono-Regular",
    fontSize: 14
  },
  textOn: {
    color: 'lightcoral',
    fontFamily: "IBMPlexMono-Bold",
    fontSize: 17
  }
});