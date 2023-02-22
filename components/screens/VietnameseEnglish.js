import React, {useContext, useEffect} from "react";
import { Text, View, StyleSheet, Dimensions, Button } from "react-native";
import HeaderTop from "../headerTop/HeaderTop";
import { GolobalContext } from "../../Global/globalData";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default VietnameseToEnglish = ({navigation}) => {
  const {vietNamAnswer, setVietNamAnswer} = useContext(GolobalContext)


  return (
    <View style={styles.grandContainer}>
      <HeaderTop backTo={() => navigation.navigate("Home")} />
      <View>
        <Text>Please translate to English:</Text>
      </View>
      <View style={styles.screenSection}>
        <Text>Screen Box</Text>

      </View>
      <View style={styles.answerSection}>
        <Text>Answer Section</Text>
      </View>
      <View style={styles.wordsPicker}>
        <Text>Answer Section</Text>
      </View>
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
  screenSection: {
    height: 180,
    width: width - 20,
    borderWidth: 1,

  },
  answerSection: {
    height: 100,
    width: width - 20,
    borderWidth: 1,
  },
  wordsPicker: {
    height: 150,
    width: width - 20,
    borderWidth: 1,
  }
});