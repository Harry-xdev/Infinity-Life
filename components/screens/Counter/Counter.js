import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import HeaderTop from "../../headerTop.js/HeaderTop";
import { useSelector } from "react-redux";

import { valueSelector } from "./CounterSlice";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default LearningScreen = ({navigation}) => {
  const value = useSelector(valueSelector)
  return (
    
    <View style={styles.grandContainer}>
      <HeaderTop backTo={() => navigation.navigate('Home')} />
      <Text style={styles.count}>Counter</Text>
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
  count: {
    fontSize: 32
  }
});