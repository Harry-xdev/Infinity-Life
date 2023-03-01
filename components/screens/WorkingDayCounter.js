import React, {useContext} from "react";
import { Text, View, StyleSheet, Dimensions, Button } from "react-native";
import HeaderTop from "../headerTop/HeaderTop";
import { GolobalContext } from "../../Global/globalData";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default WorkingDayCounter = ({navigation}) => {
  // const {val1, setVal1, val2, setVal2, val3, setVal3} = useContext(GolobalContext);

  return (
    <View style={styles.grandContainer}>
      <HeaderTop backTo={() => navigation.navigate("Bottom Tab Main")} />
      <Text>Test Page</Text>
      <View>
        
      </View>
      {/* <Button title="Increase" onPress={handleIncrease} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    // backgroundColor: color.PrimeBackground,
    backgroundColor: color.SecoundBackground,
    height: height,
  },
  headerTitle: {
    color: color.homeHeaderTitle,
    fontSize: 35,
    fontFamily: 'IBMPlexMono-Bold',
  },
});