import React, {useContext} from "react";
import { Text, View, StyleSheet, Dimensions, Button } from "react-native";
import HeaderTop from "../headerTop.js/HeaderTop";
import { GolobalContext } from "../../Global/globalData";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default Base = ({navigation}) => {
  const {val1, setVal1, val2, setVal2, val3, setVal3} = useContext(GolobalContext);

  const handleIncrease = () => {
    setVal1(val1 +1);
    setVal2(val2 +1);
    setVal3(val3 +1);
  };

  return (
    <View style={styles.grandContainer}>
      <HeaderTop backTo={() => navigation.navigate("Home")} />
      <Text>Test Page</Text>
      <Text>{val1}</Text>
      <Text>{val2}</Text>
      <Text>{val3}</Text>

      <Button title="Increase" onPress={handleIncrease} />
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