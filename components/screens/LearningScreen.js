import React from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import HeaderTop from "../headerTop.js/HeaderTop";
import MultipleQuest from '../learningComponents/multipleQuest';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default LearningScreen = ({ navigation }) => {
  return (
    <View style={styles.grandContainer}>
      <HeaderTop backTo={() => navigation.navigate('Bottom Tab Main')} />
      <Text style={{ color: '#ffff' }}>Learning Page</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Bottom Tab Main')} > 
        <Text style={{color: '#ffff'}} >Back to main page</Text>
      </TouchableOpacity>
      
      <MultipleQuest />


    </View>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    backgroundColor: color.PrimeBackground,
    height: height,
  },
  headerTitle: {
    color: color.homeHeaderTitle,
    fontSize: 35,
    fontFamily: 'IBMPlexMono-Bold',
  },
});