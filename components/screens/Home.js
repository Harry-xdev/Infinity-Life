import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

import ItemBar from "../homeComponents/ItemBar";
import color from "../../colorStore";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Home = ({ navigation }) => {

  return (

    <View style={styles.grandContainer}>

      <HeaderTop backTo={() => navigation.navigate('Splash Screen')} />

      <View>
        <Text style={styles.headerTitle}>INFINITY WORKSPACE</Text>
      </View>

      <ItemBar
        itemContent={'Smart Learning'}
        navigation={() => navigation.navigate('Learning Screen')}
      />

      <ItemBar
        itemContent={'Test Method'}

      />
      <ItemBar
        itemContent={'Achivements'}

      />
      <ItemBar
        itemContent={'New Vocabulary Addition Tool'}

      />
      <ItemBar
        itemContent={'Counter Tool'}
        navigation={() => navigation.navigate('Counter Screen')}
      />

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
    fontFamily: 'IBMPlexMono-Bold'
  },
  item: {
    itemText: {
      color: '#ffff',
      fontSize: 20
    },
    itemDesign: {

    }
  }

});