import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
export default DayTransporter = (props) => {


  return (

    <Pressable
      style={props.activeDay === (props.dayid - 1) ? styles.activeBtn : styles.inActiveBtn}
      onPress={props.onPressed}
      onPressIn={props.onPressIn}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={props.activeDay === (props.dayid - 1) ? styles.textOn : styles.textOff}>
          {props.dayid}
        </Text>
        <Text style={props.activeDay === (props.dayid - 1) ? styles.textOn : styles.textOff}>
          {props.dayName}
        </Text>
        <Text style={{fontSize: 10, color: 'lightcoral'}}>{props.timeOut}</Text>
      </View>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  inActiveBtn: {
    // borderWidth: 0.5,
    borderColor: color.white,
    height: 65,
    width: 50,
    borderRadius: 8,
    margin: 1,
    backgroundColor: 'transparent'

  },
  activeBtn: {
    // borderWidth: 0.5,
    height: 65,
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