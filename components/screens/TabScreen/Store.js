import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default Strore = () => {
  return (
    <View style={styles.grandContainer}>

      <Text>STORE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    backgroundColor: color.PrimerBackground,
    height: height,
    flex : 1
  },
  headerTitle: {
    color: color.homeHeaderTitle,
    fontSize: 35,
    fontFamily: 'IBMPlexMono-Bold',
  },
});