import React, { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Button, Touchable, TouchableOpacity } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

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
  const { monthData, monthLocal } = useContext(GolobalContext);
  console.log('month data children:', monthData);

  // console.log(march.length);
  const [currentDate, setCurrentDate] = useState(0);
  const [currentDay, setCurrentDay] = useState(0);
  const [hours, setHours] = useState(0);
  const hoursToMin = hours * 60;

  const workingTime = 555;
  const id = 5;


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
    setCurrentDay(date);
    setHours(hours);
  }, []);

  const [month, setMonth] = useState(monthData);
  const [activeDay, setActiveDay] = useState(0);
  const [showGoHomeTime, setShowGoHomeTime] = useState();

  const [totalWorkingHour, setTotalWorkingHour] = useState(0);
  const supportSalary = 4920000 + 5460000;
  const [overTimeMin, setOverTimeMin] = useState(0);
  const [gold, setGold] = useState((totalWorkingHour / 60) * 67300);


  const handleDayPicker = () => {
    setShowGoHomeTime(month[activeDay].timeOut);
  };
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

  const putOutTime = (id, workingTime) => {
    var dayName = month[id - 1]["name"];
    fetch(`${monthLocal}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        name: dayName,
        workingTime: workingTime,
      })

    });
  }
  const setOutTime1630 = () => {
    month[activeDay].timeOut = '16:30';
    month[activeDay].workingTime = 480;
    month[activeDay].overTime = 0;
    setShowGoHomeTime('16:30');
    sumFunc();

  };
  const setOutTime1700 = () => {
    month[activeDay].timeOut = '17:00';
    month[activeDay].workingTime = 525;
    month[activeDay].overTime = 45;
    setShowGoHomeTime('17:00');
    sumFunc();


  };
  const setOutTime1730 = () => {
    month[activeDay].timeOut = '17:30';
    month[activeDay].workingTime = 570;
    month[activeDay].overTime = 90;
    setShowGoHomeTime('17:30');
    sumFunc();


  };
  const setOutTime1800 = () => {
    month[activeDay].timeOut = '18:00';
    month[activeDay].workingTime = 615;
    month[activeDay].overTime = 135;
    setShowGoHomeTime('18:00');
    sumFunc();


  };
  const setOutTime1830 = () => {
    month[activeDay].timeOut = '18:30';
    month[activeDay].workingTime = 660;
    month[activeDay].overTime = 180;
    setShowGoHomeTime('18:30');
    sumFunc();

  };
  const handleClear = () => {
    month[activeDay].workingTime = 0;
    month[activeDay].timeOut = '';
    setShowGoHomeTime('');
    sumFunc();
  };

  // console.log(`working min:`, month[activeDay].workingTime / 60);
  // console.log(`display: `, showGoHomeTime);
  // console.log(`march ${activeDay + 1}: `, month[activeDay]);
  // console.log(`total march:`, march)

  const sumFunc = () => {
    var arrTime = month.map(e => e.workingTime);
    var total = 0;
    for (let i in arrTime) {
      total += arrTime[i]
    }
    setTotalWorkingHour(total);
    setGold(total / 60 * 67300);

  };
  // console.log(`active day newwwwww: `, activeDay);
  var totalGold = gold + supportSalary
  const goldSliced1 = totalGold.toString().slice(0, 2);
  const goldSliced2 = totalGold.toString().slice(2, 5);
  const goldSliced3 = totalGold.toString().slice(5, 8);
  const goldDisplay = goldSliced1 + ',' + goldSliced2 + ',' + goldSliced3
  // console.log(goldSliced1);
  // console.log(goldSliced2);
  // console.log(goldSliced3);



  return (
    <View style={styles.grandContainer}>
      <HeaderTop
        backTo={() => navigation.navigate("Bottom Tab Main")}
        gold={goldDisplay}
      />
      <Text>{currentDate}</Text>

      <View style={styles.displayInfo}>
        <Text>Go home at: {showGoHomeTime}</Text>
        {
          month[activeDay].workingTime !== undefined ?
            <Text>Working hours: {month[activeDay].workingTime / 60}</Text>
            : <Text>Working hour: </Text>
        }
        <Text>Total working hour in month: {totalWorkingHour / 60}</Text>
        <Text>Salary/Day: {(month[activeDay].workingTime / 60) * 67300}</Text>
        <Text>Salary/Month: {(totalWorkingHour / 60) * 67300 + supportSalary}</Text>



      </View>


      <View style={styles.calContainer}>
        <Text>March</Text>


        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayid={1} dayName={month[month.length - month.length + 0].name} onPressed={handleDayPicker} onPressIn={handleRec1} activeDay={activeDay} />
          <DayTransporter dayid={2} dayName={month[month.length - month.length + 1].name} onPressed={handleDayPicker} onPressIn={handleRec2} activeDay={activeDay} />
          <DayTransporter dayid={3} dayName={month[month.length - month.length + 2].name} onPressed={handleDayPicker} onPressIn={handleRec3} activeDay={activeDay} />
          <DayTransporter dayid={4} dayName={month[month.length - month.length + 3].name} onPressed={handleDayPicker} onPressIn={handleRec4} activeDay={activeDay} />
          <DayTransporter dayid={5} dayName={month[month.length - month.length + 4].name} onPressed={handleDayPicker} onPressIn={handleRec5} activeDay={activeDay} />
          <DayTransporter dayid={6} dayName={month[month.length - month.length + 5].name} onPressed={handleDayPicker} onPressIn={handleRec6} activeDay={activeDay} />
          <DayTransporter dayid={7} dayName={month[month.length - month.length + 6].name} onPressed={handleDayPicker} onPressIn={handleRec7} activeDay={activeDay} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayid={8} dayName={month[month.length - month.length + 7].name} onPressed={handleDayPicker} onPressIn={handleRec8} activeDay={activeDay} />
          <DayTransporter dayid={9} dayName={month[month.length - month.length + 8].name} onPressed={handleDayPicker} onPressIn={handleRec9} activeDay={activeDay} />
          <DayTransporter dayid={10} dayName={month[month.length - month.length + 9].name} onPressed={handleDayPicker} onPressIn={handleRec10} activeDay={activeDay} />
          <DayTransporter dayid={11} dayName={month[month.length - month.length + 10].name} onPressed={handleDayPicker} onPressIn={handleRec11} activeDay={activeDay} />
          <DayTransporter dayid={12} dayName={month[month.length - month.length + 11].name} onPressed={handleDayPicker} onPressIn={handleRec12} activeDay={activeDay} />
          <DayTransporter dayid={13} dayName={month[month.length - month.length + 12].name} onPressed={handleDayPicker} onPressIn={handleRec13} activeDay={activeDay} />
          <DayTransporter dayid={14} dayName={month[month.length - month.length + 13].name} onPressed={handleDayPicker} onPressIn={handleRec14} activeDay={activeDay} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayid={15} dayName={month[month.length - month.length + 14].name} onPressed={handleDayPicker} onPressIn={handleRec15} activeDay={activeDay} />
          <DayTransporter dayid={16} dayName={month[month.length - month.length + 15].name} onPressed={handleDayPicker} onPressIn={handleRec16} activeDay={activeDay} />
          <DayTransporter dayid={17} dayName={month[month.length - month.length + 16].name} onPressed={handleDayPicker} onPressIn={handleRec17} activeDay={activeDay} />
          <DayTransporter dayid={18} dayName={month[month.length - month.length + 17].name} onPressed={handleDayPicker} onPressIn={handleRec18} activeDay={activeDay} />
          <DayTransporter dayid={19} dayName={month[month.length - month.length + 18].name} onPressed={handleDayPicker} onPressIn={handleRec19} activeDay={activeDay} />
          <DayTransporter dayid={20} dayName={month[month.length - month.length + 19].name} onPressed={handleDayPicker} onPressIn={handleRec20} activeDay={activeDay} />
          <DayTransporter dayid={21} dayName={month[month.length - month.length + 20].name} onPressed={handleDayPicker} onPressIn={handleRec21} activeDay={activeDay} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayid={22} dayName={month[month.length - month.length + 21].name} onPressed={handleDayPicker} onPressIn={handleRec22} activeDay={activeDay} />
          <DayTransporter dayid={23} dayName={month[month.length - month.length + 22].name} onPressed={handleDayPicker} onPressIn={handleRec23} activeDay={activeDay} />
          <DayTransporter dayid={24} dayName={month[month.length - month.length + 23].name} onPressed={handleDayPicker} onPressIn={handleRec24} activeDay={activeDay} />
          <DayTransporter dayid={25} dayName={month[month.length - month.length + 24].name} onPressed={handleDayPicker} onPressIn={handleRec25} activeDay={activeDay} />
          <DayTransporter dayid={26} dayName={month[month.length - month.length + 25].name} onPressed={handleDayPicker} onPressIn={handleRec26} activeDay={activeDay} />
          <DayTransporter dayid={27} dayName={month[month.length - month.length + 26].name} onPressed={handleDayPicker} onPressIn={handleRec27} activeDay={activeDay} />
          <DayTransporter dayid={28} dayName={month[month.length - month.length + 27].name} onPressed={handleDayPicker} onPressIn={handleRec28} activeDay={activeDay} />
        </View>
        <View style={{ flexDirection: "row" }}>
          {
            month.length > 28 ?
              <DayTransporter dayid={29} dayName={month[month.length - month.length + 28].name} onPressed={handleDayPicker} onPressIn={handleRec29} activeDay={activeDay} />
              : <View></View>

          }
          {
            month.length >= 30 ?
              <DayTransporter dayid={30} dayName={month[month.length - month.length + 29].name} onPressed={handleDayPicker} onPressIn={handleRec30} activeDay={activeDay} />
              : <View></View>

          }

          {
            month.length >= 31 ?
              <DayTransporter dayid={31} dayName={month[month.length - month.length + 30].name} onPressed={handleDayPicker} onPressIn={handleRec31} activeDay={activeDay} /> :
              <View></View>
          }

        </View>

      </View>
      <View>

        <TouchableOpacity
          style={{ width: 80, borderWidth: 1, backgroundColor: 'pink', borderRadius: 3 }}
          onPress={setOutTime1630}
        >
          <Text>16:30 PM</Text>
        </TouchableOpacity>

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


      <Button
        title="TOTAL"
        onPress={sumFunc}
      />
      <Button
        title="Clear"
        onPress={handleClear}
      />

      <Button
        title="Test"
        onPress={() => putOutTime(id, workingTime)}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    // backgroundColor: color.PrimeBackground,
    backgroundColor: color.SecoundBackground,
    height: height,
  },
  headerTitle: {
    color: color.homeHeaderTitle,
    fontSize: 35,
    fontFamily: 'IBMPlexMono-Bold',
  },
  calContainer: {
    borderWidth: 1,
    height: 250,
    width: width
  },
  displayInfo: {
    borderWidth: 1,
    height: 120,
    // backgroundColor: color.black
  },
  activeBtn: {
    borderWidth: 0.5,
    height: 40,
    width: 50,
    borderRadius: 5,
    margin: 1
  }
});