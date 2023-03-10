import React, { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Button, TouchableOpacity, Pressable, Modal, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HeaderTop from "../../headerTop/HeaderTop";
import { GolobalContext } from "../../../Global/globalData";
import DayTransporter from "./DayTransporter"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
const april = [
  {
    'id': 1,
    'name': 'WED'
  },
  {
    'id': 2,
    'name': 'THU'
  },
  {
    'id': 3,
    'name': 'FRI'
  },
  {
    'id': 4,
    'name': 'SAT'
  },
  {
    'id': 5,
    'name': 'SUN'
  },
  {
    'id': 6,
    'name': 'MON'
  },
  {
    'id': 7,
    'name': 'TUE'
  },
  {
    'id': 8,
    'name': 'WED'
  },
  {
    'id': 9,
    'name': 'THU'
  },
  {
    'id': 10,
    'name': 'FRI'
  },
  {
    'id': 11,
    'name': 'SAT'
  },
  {
    'id': 12,
    'name': 'SUN'
  },
  {
    'id': 13,
    'name': 'MON'
  },
  {
    'id': 14,
    'name': 'TUE'
  },
  {
    'id': 15,
    'name': 'WED'
  },
  {
    'id': 16,
    'name': 'THU'
  },
  {
    'id': 17,
    'name': 'FRI'
  },
  {
    'id': 18,
    'name': 'SAT'
  },
  {
    'id': 19,
    'name': 'SUN'
  },
  {
    'id': 20,
    'name': 'MON'
  },
  {
    'id': 21,
    'name': 'TUE'
  },
  {
    'id': 22,
    'name': 'WED'
  },
  {
    'id': 23,
    'name': 'THU'
  },
  {
    'id': 24,
    'name': 'FRI'
  },
  {
    'id': 25,
    'name': 'SAT'
  },
  {
    'id': 26,
    'name': 'SUN'
  },
  {
    'id': 27,
    'name': 'MON'
  },
  {
    'id': 28,
    'name': 'TUE'
  },
  {
    'id': 29,
    'name': 'WED'
  },
  {
    'id': 30,
    'name': 'THU'
  },
  {
    'id': 31,
    'name': 'FRI'
  }
];

export default WorkingDayCounter = ({ navigation, props }) => {
  const { monthData, monthServer, monthSumData, current } = useContext(GolobalContext);
  console.log(monthSumData);
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
      date + '/' + month + '/' + year + '  '
      + hours + ':' + min
    );
    setHours(hours);
  }, []);

  const [month, setMonth] = useState(monthData);
  const [activeDay, setActiveDay] = useState(current);

  const [totalWorkingHour, setTotalWorkingHour] = useState(0);
  const [gold, setGold] = useState(monthSumData[2]["sumTotal"]);
  const [goldLocal, setGoldLocal] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalNotify, setModalNotify] = useState('Save data?');

  const [isSaved, setIsSaved] = useState(false);

  const handleRec1 = () => {
    setActiveDay(0);
    
  };
  const handleRec2 = () => {
    setActiveDay(1);
    

  };
  const handleRec3 = () => {
    setActiveDay(2);
    

  };
  const handleRec4 = () => {
    setActiveDay(3);
    
  };
  const handleRec5 = () => {
    setActiveDay(4);
    
  };
  const handleRec6 = () => {
    setActiveDay(5);
    
  };
  const handleRec7 = () => {
    setActiveDay(6);
    
  };
  const handleRec8 = () => {
    setActiveDay(7);
    
  };
  const handleRec9 = () => {
    setActiveDay(8);

    
  };
  const handleRec10 = () => {
    setActiveDay(9);

    
  };
  const handleRec11 = () => {
    setActiveDay(10);
    

  };
  const handleRec12 = () => {
    setActiveDay(11);
    

  };
  const handleRec13 = () => {
    setActiveDay(12);
    

  };
  const handleRec14 = () => {
    setActiveDay(13);
    

  };
  const handleRec15 = () => {
    setActiveDay(14);
    

  };
  const handleRec16 = () => {
    setActiveDay(15);
    

  };
  const handleRec17 = () => {
    setActiveDay(16);
    

  };
  const handleRec18 = () => {
    setActiveDay(17);
    

  };
  const handleRec19 = () => {
    setActiveDay(18);
    

  };
  const handleRec20 = () => {
    setActiveDay(19);
    

  };
  const handleRec21 = () => {
    setActiveDay(20);
    

  };
  const handleRec22 = () => {
    setActiveDay(21);
    

  };
  const handleRec23 = () => {
    setActiveDay(22);
    

  };
  const handleRec24 = () => {
    setActiveDay(23);
    

  };
  const handleRec25 = () => {
    setActiveDay(24);
    

  };
  const handleRec26 = () => {
    setActiveDay(25);
    

  };
  const handleRec27 = () => {
    setActiveDay(26);
    

  };
  const handleRec28 = () => {
    setActiveDay(27);
    

  };
  const handleRec29 = () => {
    setActiveDay(28);
    

  };
  const handleRec30 = () => {
    setActiveDay(29);
    

  };
  const handleRec31 = () => {
    setActiveDay(30);
    

  };
  console.log(`active day main:`, activeDay);
  console.log('month data children:', monthData);

  const multipleFunc = () => {
    goldLocal === 0 ? navigation.navigate("Bottom Tab Main") : setModalVisible(true)

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

  const setOutTime1630 = () => {
    var id = activeDay + 1;
    var timeOut = '16:30';
    var workingTime = 480;
    month[activeDay].timeOut = "16:30";
    month[activeDay].workingTime = 480;
    putOutTime(id, timeOut, workingTime);
    sumFunc();
    setGoldLocal(goldLocal + 8 * 67300)

  };
  console.log(`gold local:`, goldLocal);
  const setOutTime1700 = () => {
    month[activeDay].timeOut = '17:00';
    month[activeDay].workingTime = 525;
    // month[activeDay].overTime = 45;
    sumFunc();


  };
  const setOutTime1730 = () => {
    month[activeDay].timeOut = '17:30';
    month[activeDay].workingTime = 570;
    // month[activeDay].overTime = 90;
    sumFunc();


  };
  const setOutTime1800 = () => {
    month[activeDay].timeOut = '18:00';
    month[activeDay].workingTime = 615;
    // month[activeDay].overTime = 135;
    sumFunc();


  };
  const setOutTime1830 = () => {
    month[activeDay].timeOut = '18:30';
    month[activeDay].workingTime = 660;
    // month[activeDay].overTime = 180;
    sumFunc();

  };
  const handleClear = () => {
    month[activeDay].workingTime = 0;
    month[activeDay].timeOut = '';
    var id = activeDay + 1;
    
    sumFunc();
    handleClearOnline(id);
    setGoldLocal(goldLocal - 8 * 67300);
  };

  const handlePressYES = () => {
    handleUpdateTotalSalary(3, totalWorkingHour);
    setModalVisible(false);
    setTimeout(() => {
      navigation.navigate("Bottom Tab Main");

    }, 800)

  }

  // console.log(`working min:`, month[activeDay].workingTime / 60);
  // console.log(`display: `, showGoHomeTime);
  // console.log(`march ${activeDay + 1}: `, month[activeDay]);
  // console.log(`total march:`, march);


  const handleUpdateTotalSalary = (id, totalWorkingHour) => {
    fetch(`http://172.18.101.70:4000/monthSum/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        name: "MAR",
        totalHour: 0,
        supportSalary: 1038000,
        salaryTotal: ((totalWorkingHour / 60) * 67300),
        sumTotal: ((totalWorkingHour / 60) * 67300) + 10380000
      })  
    });
  };
  const sumFunc = () => {
    var arrTime = month.map(e => e.workingTime);
    var total = 0;
    for (let i in arrTime) {
      total += arrTime[i]
    }
    setTotalWorkingHour(total);

  };

  console.log(`sumTotal: `, monthSumData[2]["sumTotal"]);
  var totalGold = gold + goldLocal
  const goldSliced1 = totalGold.toString().slice(0, 2);
  const goldSliced2 = totalGold.toString().slice(2, 5);
  const goldSliced3 = totalGold.toString().slice(5, 8);
  const goldDisplay = goldSliced1 + ',' + goldSliced2 + ',' + goldSliced3


  return (
    <View style={styles.grandContainer}>
      <HeaderTop
        backTo={multipleFunc}
        gold={goldDisplay}
      />
      <Text>{currentDate}</Text>

      <View style={styles.displayInfo}>
        <Text>Leaving time: {month[activeDay].timeOut}</Text>
        <Text>Hours/day: {month[activeDay].workingTime / 60}</Text>
        <Text>Hours/month: {totalWorkingHour / 60}</Text>
        <Text>Salary/day: {(month[activeDay].workingTime / 60) * 67300}</Text>

      </View>

      <View style={styles.calContainer}>
        <Text>March</Text>

        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayid={1} timeOut={month[month.length - month.length + 0].timeOut} dayName={month[month.length - month.length + 0].name} onPressIn={handleRec1} activeDay={activeDay} />
          <DayTransporter dayid={2} timeOut={month[month.length - month.length + 1].timeOut} dayName={month[month.length - month.length + 1].name} onPressIn={handleRec2} activeDay={activeDay} />
          <DayTransporter dayid={3} timeOut={month[month.length - month.length + 2].timeOut} dayName={month[month.length - month.length + 2].name} onPressIn={handleRec3} activeDay={activeDay} />
          <DayTransporter dayid={4} timeOut={month[month.length - month.length + 3].timeOut} dayName={month[month.length - month.length + 3].name} onPressIn={handleRec4} activeDay={activeDay} />
          <DayTransporter dayid={5} timeOut={month[month.length - month.length + 4].timeOut} dayName={month[month.length - month.length + 4].name} onPressIn={handleRec5} activeDay={activeDay} />
          <DayTransporter dayid={6} timeOut={month[month.length - month.length + 5].timeOut} dayName={month[month.length - month.length + 5].name} onPressIn={handleRec6} activeDay={activeDay} />
          <DayTransporter dayid={7} timeOut={month[month.length - month.length + 6].timeOut} dayName={month[month.length - month.length + 6].name} onPressIn={handleRec7} activeDay={activeDay} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayid={8} timeOut={month[month.length - month.length + 7].timeOut} dayName={month[month.length - month.length + 7].name} onPressIn={handleRec8} activeDay={activeDay} />
          <DayTransporter dayid={9} timeOut={month[month.length - month.length + 8].timeOut} dayName={month[month.length - month.length + 8].name} onPressIn={handleRec9} activeDay={activeDay} />
          <DayTransporter dayid={10} timeOut={month[month.length - month.length + 9].timeOut} dayName={month[month.length - month.length + 9].name} onPressIn={handleRec10} activeDay={activeDay} />
          <DayTransporter dayid={11} timeOut={month[month.length - month.length + 10].timeOut} dayName={month[month.length - month.length + 10].name} onPressIn={handleRec11} activeDay={activeDay} />
          <DayTransporter dayid={12} timeOut={month[month.length - month.length + 11].timeOut} dayName={month[month.length - month.length + 11].name} onPressIn={handleRec12} activeDay={activeDay} />
          <DayTransporter dayid={13} timeOut={month[month.length - month.length + 12].timeOut} dayName={month[month.length - month.length + 12].name} onPressIn={handleRec13} activeDay={activeDay} />
          <DayTransporter dayid={14} timeOut={month[month.length - month.length + 13].timeOut} dayName={month[month.length - month.length + 13].name} onPressIn={handleRec14} activeDay={activeDay} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayid={15} timeOut={month[month.length - month.length + 14].timeOut} dayName={month[month.length - month.length + 14].name} onPressIn={handleRec15} activeDay={activeDay} />
          <DayTransporter dayid={16} timeOut={month[month.length - month.length + 15].timeOut} dayName={month[month.length - month.length + 15].name} onPressIn={handleRec16} activeDay={activeDay} />
          <DayTransporter dayid={17} timeOut={month[month.length - month.length + 16].timeOut} dayName={month[month.length - month.length + 16].name} onPressIn={handleRec17} activeDay={activeDay} />
          <DayTransporter dayid={18} timeOut={month[month.length - month.length + 17].timeOut} dayName={month[month.length - month.length + 17].name} onPressIn={handleRec18} activeDay={activeDay} />
          <DayTransporter dayid={19} timeOut={month[month.length - month.length + 18].timeOut} dayName={month[month.length - month.length + 18].name} onPressIn={handleRec19} activeDay={activeDay} />
          <DayTransporter dayid={20} timeOut={month[month.length - month.length + 19].timeOut} dayName={month[month.length - month.length + 19].name} onPressIn={handleRec20} activeDay={activeDay} />
          <DayTransporter dayid={21} timeOut={month[month.length - month.length + 20].timeOut} dayName={month[month.length - month.length + 20].name} onPressIn={handleRec21} activeDay={activeDay} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayid={22} timeOut={month[month.length - month.length + 21].timeOut} dayName={month[month.length - month.length + 21].name} onPressIn={handleRec22} activeDay={activeDay} />
          <DayTransporter dayid={23} timeOut={month[month.length - month.length + 22].timeOut} dayName={month[month.length - month.length + 22].name} onPressIn={handleRec23} activeDay={activeDay} />
          <DayTransporter dayid={24} timeOut={month[month.length - month.length + 23].timeOut} dayName={month[month.length - month.length + 23].name} onPressIn={handleRec24} activeDay={activeDay} />
          <DayTransporter dayid={25} timeOut={month[month.length - month.length + 24].timeOut} dayName={month[month.length - month.length + 24].name} onPressIn={handleRec25} activeDay={activeDay} />
          <DayTransporter dayid={26} timeOut={month[month.length - month.length + 25].timeOut} dayName={month[month.length - month.length + 25].name} onPressIn={handleRec26} activeDay={activeDay} />
          <DayTransporter dayid={27} timeOut={month[month.length - month.length + 26].timeOut} dayName={month[month.length - month.length + 26].name} onPressIn={handleRec27} activeDay={activeDay} />
          <DayTransporter dayid={28} timeOut={month[month.length - month.length + 27].timeOut} dayName={month[month.length - month.length + 27].name} onPressIn={handleRec28} activeDay={activeDay} />
        </View>
        <View style={{ flexDirection: "row" }}>
          {
            month.length > 28 ?
              <DayTransporter dayid={29} timeOut={month[month.length - month.length + 28].timeOut} dayName={month[month.length - month.length + 28].name} onPressIn={handleRec29} activeDay={activeDay} />
              : <View></View>

          }
          {
            month.length >= 30 ?
              <DayTransporter dayid={30} timeOut={month[month.length - month.length + 29].timeOut} dayName={month[month.length - month.length + 29].name} onPressIn={handleRec30} activeDay={activeDay} />
              : <View></View>

          }

          {
            month.length >= 31 ?
              <DayTransporter dayid={31} timeOut={month[month.length - month.length + 30].timeOut} dayName={month[month.length - month.length + 30].name} onPressIn={handleRec31} activeDay={activeDay} /> :
              <View></View>
          }

        </View>

      </View>

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


      <View>
        {
          (month[activeDay]["timeOut"] !== "" && month[activeDay]["timeOut"] !== undefined) ? <View style={styles.fingerprint} /> :
            <Pressable
              style={styles.fingerprint}
              onPress={setOutTime1630}
              onPressOut={() => handleUpdateTotalSalary(3, totalWorkingHour)}
            >
              <MaterialIcons name="fingerprint" size={55} color={color.hackingColor} />
            </Pressable>
        }


        {
          (990 <= hoursToMin && hoursToMin < 1020) ?
            <Button
              style={{}}
              title="16:30 PM"
              onPress={setOutTime1630}
            /> : <View></View>
        }

        {
          (1020 <= hoursToMin && hoursToMin < 1050) ?
            <Button
              title="17:00 PM"
              onPress={setOutTime1700}
            /> : <View></View>
        }

        {
          (1050 <= hoursToMin && hoursToMin < 1080) ?
            <Button
              title="17:30 PM"
              onPress={setOutTime1700}
            /> : <View></View>
        }
        {
          (1080 <= hoursToMin && hoursToMin < 1110) ?
            <Button
              title="18:00 PM"
              onPress={setOutTime1700}
            /> : <View></View>

        }
        {
          (1010 <= hoursToMin && hoursToMin < 1140) ?
            <Button
              title="18:30 PM"
              onPress={(setOutTime1830)}
            /> : <View></View>
        }

      </View>

      {
        (month[activeDay]["timeOut"] === "" || month[activeDay]["timeOut"] === undefined) ? <View /> :
          <Button
            title="Clear"
            onPress={handleClear}
          />

      }

      {
        goldLocal === 0 ? <View /> :
          <Button
            title="Update"
            onPress={() => handleUpdateTotalSalary(3, totalWorkingHour)}
          />
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
    borderWidth: 1,
    height: 350,
    width: width - 40,
    backgroundColor: color.PrimeBackground,
    justifyContent: "center",
    paddingLeft: 12,
    borderRadius: 20,

  },
  displayInfo: {
    borderWidth: 1,
    height: 180,
    width: width
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
});