import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import HeaderTop from "../headerTop.js/HeaderTop";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default LearningScreen = () => {
  return (
    <View style={styles.grandContainer}>
      <HeaderTop />
      <Text>Learning Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    backgroundColor: color.PrimerBackground,
    height: height,
  },
  headerTitle: {
    color: color.homeHeaderTitle,
    fontSize: 35,
    fontFamily: 'IBMPlexMono-Bold',
  },
});