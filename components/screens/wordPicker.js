import React from "react";
import { Touchable, TouchableOpacity, StyleSheet, Text} from "react-native";

export default WordPicker = (props) => {

  return (
    <TouchableOpacity 
    style={styles.letterBtn}
    onPress={props.pushValue}
    >
      <Text style={ styles.btnText}>
        {props.value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  letterBtn: {
    height: 38,
    width: 120,
    borderWidth: 1,
    borderColor: color.white
    

  },
  btnText: {
    fontSize: 22,
    fontFamily: 'IBMPlexMono-Bold',
    borderColor: color.white,
    color: color.white



  }
});