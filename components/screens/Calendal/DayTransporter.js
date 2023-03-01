import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default DayTransporter = (props) => {

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={props.onPressed}
      onPressIn={props.onPressIn}
    >
      <Text>
        {props.dayMark}
      </Text>
      <Text>
        {props.dayName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    height: 40,
    width: 50,
    borderRadius: 5,
    margin: 1

  }
});