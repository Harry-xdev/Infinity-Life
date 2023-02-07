import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default ItemBar = (props) => {
  return (
    <TouchableOpacity
      style={styles.item.design}
      onPress={props.navigation}
    >
      <Text style={styles.item.text}>{props.itemContent}</Text>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  item: {
    text: {
      color: '#ffff',
      fontSize: 20,
      fontFamily: "IBMPlexMono-Regular",
      // backgroundColor: '#ffff'

    },
    design: {
      borderWidth: 2,
      borderColor: '#ffff',
      height: 50,
      width: 380,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 5
    }
  }

});