import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
export default DayTransporter = (props) => {


  return (

    <Pressable
      style={[{ backgroundColor: props.dayName === "SUN" ? 'blue' : 'white' }, props.activeDay === (props.dayid - 1) ? styles.activeBtn : styles.inActiveBtn]}
      onPress={props.onPressed}
      onPressIn={props.onPressIn}
    >
      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style={styles.text}>
          {props.dayid}
        </Text>
        <Text style={styles.text}>
          {props.dayName}
        </Text>
      </View>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  inActiveBtn: {
    // borderWidth: 0.5,
    borderColor: color.white,
    height: 40,
    width: 50,
    borderRadius: 5,
    margin: 1,
    backgroundColor: '#eeeeee'

  },
  activeBtn: {
    // borderWidth: 0.5,
    height: 40,
    width: 50,
    borderRadius: 5,
    margin: 1,
    backgroundColor: color.hackingColor,


  },
  passedDay: {
    borderWidth: 0.5,
    height: 40,
    width: 50,
    borderRadius: 5,
    margin: 1,
    backgroundColor: 'grey'

  },
  text: {
    color: color.PrimeBackground
  }


});