import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Button } from "react-native";
import HeaderTop from "../../headerTop/HeaderTop";
import { useSelector } from "react-redux";

import { valueSelector } from "./CounterSlice";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default LearningScreen = ({navigation}) => {
  const value = useSelector(valueSelector);
  const [data, setData] = useState(0);
  const handleRefesh = () => {
    setData(data + 1);
  };
  console.log(data);


  return (
    
    <View style={styles.grandContainer}>
      <HeaderTop backTo={() => navigation.navigate('Bottom Tab Main')} />
      <Text style={styles.count}>{data}</Text>
      <Button title={'Refesh'} onPress={handleRefesh} />

      
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