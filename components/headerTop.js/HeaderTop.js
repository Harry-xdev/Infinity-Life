import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import color from "../../colorStore";

export default HeaderTop = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.BackBtn}
        onPress={props.backTo}
      >
        <Text><FontAwesome5 name={'angle-double-left'} size={25} color={color.hackingColor} /></Text>
      </TouchableOpacity>


    </View>
  )
};

const styles = StyleSheet.create({

  BackBtn: {
    height: 40,
    width: 60,
    borderWidth: 2,
    borderColor: color.hackingColor,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"

  }
})