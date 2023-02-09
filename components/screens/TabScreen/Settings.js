import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default Tab3 = () => {
  return (
    <View style={styles.grandContainer}>
      <Text>Settings</Text>
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