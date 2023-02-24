import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default WordPicker = (props) => {

  return (
    <TouchableOpacity
      style={props.status === true ? styles.letterBtn : styles.letterBtnOff}
      onPress={props.pushValue}
    >
      <Text style={props.status === true ? styles.btnText : styles.btnTextOff}>
        {props.value} 
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  letterBtn: {
    height: 45,
    width: 90,
    borderWidth: 2,
    borderColor: color.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    marginVertical: 4,
    backgroundColor: color.PrimeBackground

  },
  btnText: {
    fontSize: 22,
    fontFamily: 'IBMPlexMono-Bold',
    color: color.white
  },
  letterBtnOff: {
    height: 45,
    width: 90,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    marginVertical: 4,
    backgroundColor: '#eeeeee',
    // backgroundColor: '#F194FF'

  },
  btnTextOff: {
    fontSize: 22,
    fontFamily: 'IBMPlexMono-Bold',
    color: color.black
  },

});