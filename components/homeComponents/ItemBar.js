import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

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
      // height: 50,
      width: width - 30,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 3,
      paddingVertical: 10
    }
  }

});