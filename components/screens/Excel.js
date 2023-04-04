import React, {useContext} from "react";
import { Text, View, StyleSheet, Dimensions, Button } from "react-native";
import HeaderTop from "../headerTop/HeaderTop";
import { GolobalContext } from "../../Global/globalData";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default Excel = ({navigation}) => {


  return (
    <View style={styles.grandContainer}>
      <HeaderTop backTo={() => navigation.navigate("Home")} />
      <Text>Test</Text>


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