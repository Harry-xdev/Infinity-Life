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
    height: 45,
    width: 90,
    // borderWidth: 0.5,
    borderColor: color.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    marginVertical: 4
    

  },
  btnText: {
    fontSize: 22,
    fontFamily: 'IBMPlexMono-Bold',
    borderColor: color.white,
    color: color.white



  }
});