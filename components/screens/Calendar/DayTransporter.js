import React, {useEffect, useState} from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";

export default DayTransporter = (props) => {


  return (
    
    <Pressable
      style={props.activeDay === (props.dayid - 1) ? styles.activeBtn : styles.inActiveBtn}
      onPress={props.onPressed}
      onPressIn={props.onPressIn}
    >
      <Text>
        {props.dayid}
      </Text>
      <Text>
        {props.dayName}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inActiveBtn: {
    borderWidth: 0.5,
    height: 40,
    width: 50,
    borderRadius: 5,
    margin: 1,
    backgroundColor: 'white'

  },
  activeBtn: {
    borderWidth: 0.5,
    height: 40,
    width: 50,
    borderRadius: 5,
    margin: 1,
    backgroundColor: 'green'

  },
  passedDay: {
    borderWidth: 0.5,
    height: 40,
    width: 50,
    borderRadius: 5,
    margin: 1,
    backgroundColor: 'grey'

  },


});