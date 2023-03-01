import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Dimensions, Button } from "react-native";
import HeaderTop from "../../headerTop/HeaderTop";
import { GolobalContext } from "../../../Global/globalData";
import DayTransporter from "./DayTransporter"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const march = [
  {
    'mark': 1,
    'name': 'WED'
  },
  {
    'mark': 2,
    'name': 'THU'
  },
  {
    'mark': 3,
    'name': 'FRI'
  },
  {
    'mark': 4,
    'name': 'SAT'
  },
  {
    'mark': 5,
    'name': 'SUN'
  },
  {
    'mark': 6,
    'name': 'MON'
  },
  {
    'mark': 7,
    'name': 'TUE'
  },
  {
    'mark': 8,
    'name': 'WED'
  },
  {
    'mark': 9,
    'name': 'THU'
  },
  {
    'mark': 10,
    'name': 'FRI'
  },
  {
    'mark': 11,
    'name': 'SAT'
  },
  {
    'mark': 12,
    'name': 'SUN'
  },
  {
    'mark': 13,
    'name': 'MON'
  },
  {
    'mark': 14,
    'name': 'TUE'
  },
  {
    'mark': 15,
    'name': 'WED'
  },
  {
    'mark': 16,
    'name': 'THU'
  },
  {
    'mark': 17,
    'name': 'FRI'
  },
  {
    'mark': 18,
    'name': 'SAT'
  },
  {
    'mark': 19,
    'name': 'SUN'
  },
  {
    'mark': 20,
    'name': 'MON'
  },
  {
    'mark': 21,
    'name': 'TUE'
  },
  {
    'mark': 22,
    'name': 'WED'
  },
  {
    'mark': 23,
    'name': 'THU'
  },
  {
    'mark': 24,
    'name': 'FRI'
  },
  {
    'mark': 25,
    'name': 'SAT'
  },
  {
    'mark': 26,
    'name': 'SUN'
  },
  {
    'mark': 27,
    'name': 'MON'
  },
  {
    'mark': 28,
    'name': 'TUE'
  },
  {
    'mark': 29,
    'name': 'WED'
  },
  {
    'mark': 30,
    'name': 'THU'
  },
  {
    'mark': 31,
    'name': 'FRI'
  }
];
const april = [
  {
    'mark': 1,
    'name': 'WED'
  },
  {
    'mark': 2,
    'name': 'THU'
  },
  {
    'mark': 3,
    'name': 'FRI'
  },
  {
    'mark': 4,
    'name': 'SAT'
  },
  {
    'mark': 5,
    'name': 'SUN'
  },
  {
    'mark': 6,
    'name': 'MON'
  },
  {
    'mark': 7,
    'name': 'TUE'
  },
  {
    'mark': 8,
    'name': 'WED'
  },
  {
    'mark': 9,
    'name': 'THU'
  },
  {
    'mark': 10,
    'name': 'FRI'
  },
  {
    'mark': 11,
    'name': 'SAT'
  },
  {
    'mark': 12,
    'name': 'SUN'
  },
  {
    'mark': 13,
    'name': 'MON'
  },
  {
    'mark': 14,
    'name': 'TUE'
  },
  {
    'mark': 15,
    'name': 'WED'
  },
  {
    'mark': 16,
    'name': 'THU'
  },
  {
    'mark': 17,
    'name': 'FRI'
  },
  {
    'mark': 18,
    'name': 'SAT'
  },
  {
    'mark': 19,
    'name': 'SUN'
  },
  {
    'mark': 20,
    'name': 'MON'
  },
  {
    'mark': 21,
    'name': 'TUE'
  },
  {
    'mark': 22,
    'name': 'WED'
  },
  {
    'mark': 23,
    'name': 'THU'
  },
  {
    'mark': 24,
    'name': 'FRI'
  },
  {
    'mark': 25,
    'name': 'SAT'
  },
  {
    'mark': 26,
    'name': 'SUN'
  },
  {
    'mark': 27,
    'name': 'MON'
  },
  {
    'mark': 28,
    'name': 'TUE'
  },
  {
    'mark': 29,
    'name': 'WED'
  },
  {
    'mark': 30,
    'name': 'THU'
  },
  {
    'mark': 31,
    'name': 'FRI'
  }
];

export default WorkingDayCounter = ({ navigation, props }) => {
  // const {val1, setVal1, val2, setVal2, val3, setVal3} = useContext(GolobalContext);

  // console.log(march.length);
  const [month, setMonth] = useState(march);
  const [activeDay, setActiveDay] = useState(0);
  const [displayDetail, setDisplay] = useState(['a']);
  const [outTime, setOutTime] = useState(0);

  console.log(`out time:`, outTime);
  console.log(`active day:`, activeDay);

  const [rec1, setRec1] = useState(month[0].mark);
  const [rec2, setRec2] = useState(month[1].mark);
  const [rec3, setRec3] = useState(month[2].mark);
  const [rec4, setRec4] = useState(month[3].mark);
  const [rec5, setRec5] = useState(month[4].mark);
  const [rec6, setRec6] = useState(month[5].mark);
  const [rec7, setRec7] = useState(month[6].mark);

  const [rec8, setRec8] = useState(month[7].mark);
  const [rec9, setRec9] = useState(month[8].mark);
  const [rec10, setRec10] = useState(month[9].mark);
  const [rec11, setRec11] = useState(month[10].mark);
  const [rec12, setRec12] = useState(month[11].mark);
  const [rec13, setRec13] = useState(month[12].mark);
  const [rec14, setRec14] = useState(month[13].mark);

  const [rec15, setRec15] = useState(month[14].mark);
  const [rec16, setRec16] = useState(month[15].mark);
  const [rec17, setRec17] = useState(month[16].mark);
  const [rec18, setRec18] = useState(month[17].mark);
  const [rec19, setRec19] = useState(month[18].mark);
  const [rec20, setRec20] = useState(month[19].mark);
  const [rec21, setRec21] = useState(month[20].mark);

  const [rec22, setRec22] = useState(month[21].mark);
  const [rec23, setRec23] = useState(month[22].mark);
  const [rec24, setRec24] = useState(month[23].mark);
  const [rec25, setRec25] = useState(month[24].mark);
  const [rec26, setRec26] = useState(month[25].mark);
  const [rec27, setRec27] = useState(month[26].mark);
  const [rec28, setRec28] = useState(month[27].mark);

  const [rec29, setRec29] = useState(month[28].mark);
  const [rec30, setRec30] = useState(month[29].mark);
  const [rec31, setRec31] = useState(month[30].mark);
  // const [rec32, setRec32] = useState();
  // const [rec33, setRec33] = useState();
  // const [rec34, setRec34] = useState();
  // const [rec35, setRec35] = useState();

  const month31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const month30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const month28 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
  const month29 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
  const dayName = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'DEC', 'NOV'];
  
  const handlePress = () => {
    setDisplay([month[activeDay].name]);
  };
  const handleRec1 = () => {
    setActiveDay(0);

  }
  const handleRec2 = () => {
    setActiveDay(1);

  }

  const setOutTimeFunc = () => {
    setOutTime('16:30')
  };
  console.log(displayDetail);

  return (
    <View style={styles.grandContainer}>
      <HeaderTop backTo={() => navigation.navigate("Bottom Tab Main")} />
      <Text>Test Page</Text>

      <View style={styles.displayInfo}>
        <Text>{displayDetail}</Text>
      </View>


      <View style={styles.calContainer}>
        <Text>March</Text>
        {/* <View style={{ flexDirection: "row" }}>
          <DayTransporter dayName={dayName[0]} />
          <DayTransporter dayName={dayName[1]} />
          <DayTransporter dayName={dayName[2]} />
          <DayTransporter dayName={dayName[3]} />
          <DayTransporter dayName={dayName[4]} />
          <DayTransporter dayName={dayName[5]} />
          <DayTransporter dayName={dayName[6]} />

        </View> */}

        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayMark={rec1} dayName={month[month.length - month.length + 0].name} onPressed={handlePress} onPressIn={handleRec1} />
          <DayTransporter dayMark={rec2} dayName={month[month.length - month.length + 1].name} onPressed={handlePress} onPressIn={handleRec2} />
          <DayTransporter dayMark={rec3} dayName={month[month.length - month.length + 2].name} />
          <DayTransporter dayMark={rec4} dayName={month[month.length - month.length + 3].name} />
          <DayTransporter dayMark={rec5} dayName={month[month.length - month.length + 4].name} />
          <DayTransporter dayMark={rec6} dayName={month[month.length - month.length + 5].name} />
          <DayTransporter dayMark={rec7} dayName={month[month.length - month.length + 6].name} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayMark={rec8} dayName={month[month.length - month.length + 7].name} />
          <DayTransporter dayMark={rec9} dayName={month[month.length - month.length + 8].name} />
          <DayTransporter dayMark={rec10} dayName={month[month.length - month.length + 9].name} />
          <DayTransporter dayMark={rec11} dayName={month[month.length - month.length + 10].name} />
          <DayTransporter dayMark={rec12} dayName={month[month.length - month.length + 11].name} />
          <DayTransporter dayMark={rec13} dayName={month[month.length - month.length + 12].name} />
          <DayTransporter dayMark={rec14} dayName={month[month.length - month.length + 13].name} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayMark={rec15} dayName={month[month.length - month.length + 14].name} />
          <DayTransporter dayMark={rec16} dayName={month[month.length - month.length + 15].name} />
          <DayTransporter dayMark={rec17} dayName={month[month.length - month.length + 16].name} />
          <DayTransporter dayMark={rec18} dayName={month[month.length - month.length + 17].name} />
          <DayTransporter dayMark={rec19} dayName={month[month.length - month.length + 18].name} />
          <DayTransporter dayMark={rec20} dayName={month[month.length - month.length + 19].name} />
          <DayTransporter dayMark={rec21} dayName={month[month.length - month.length + 20].name} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayMark={rec22} dayName={month[month.length - month.length + 21].name} />
          <DayTransporter dayMark={rec23} dayName={month[month.length - month.length + 22].name} />
          <DayTransporter dayMark={rec24} dayName={month[month.length - month.length + 23].name} />
          <DayTransporter dayMark={rec25} dayName={month[month.length - month.length + 24].name} />
          <DayTransporter dayMark={rec26} dayName={month[month.length - month.length + 25].name} />
          <DayTransporter dayMark={rec27} dayName={month[month.length - month.length + 26].name} />
          <DayTransporter dayMark={rec28} dayName={month[month.length - month.length + 27].name} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DayTransporter dayMark={rec29} dayName={month[month.length - month.length + 28].name} />
          <DayTransporter dayMark={rec30} dayName={month[month.length - month.length + 29].name} />
          <DayTransporter dayMark={rec31} dayName={month[month.length - month.length + 30].name} />
          {/* <DayTransporter dayMark={rec4} dayName={month[month.length - month.length + 31].name} /> */}
          {/* <DayTransporter dayMark={rec5} dayName={month[month.length - month.length + 4].name} />
          <DayTransporter dayMark={rec6} dayName={month[month.length - month.length + 5].name} />
          <DayTransporter dayMark={rec7} dayName={month[month.length - month.length + 6].name} /> */}
        </View>

      </View>



      {/* <View><Text>{days["name"]}</Text></View>
      <View><Text>{days["mark"]}</Text></View> */}
      <Button
        title="16:30 PM"
        onPress={() => setOutTime(1630)}
      />
      <Button
        title="17:00 PM"
        onPress={() => setOutTime(1700)}
      />
      <Button
        title="17:30 PM"
        onPress={() => setOutTime(1730)}
      />
      <Button
        title="18:00 PM"
        onPress={() => setOutTime(1800)}
      />
      <Button
        title="18:30 PM"
        onPress={() => setOutTime(1830)}
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
    height: 220,
    // backgroundColor: color.black
  }
});