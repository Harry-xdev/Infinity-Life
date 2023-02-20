import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

import ItemBar from "../homeComponents/ItemBar";
import color from "../../colorStore";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Home = ({ navigation }) => {

  return (

    <View style={styles.grandContainer}>

      <HeaderTop
        backTo={() => navigation.navigate('Splash Screen')}
      />

      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Text style={styles.headerTitle}>INFINITY WORKSPACE</Text>
      </View>
      <View style={styles.contentContainer}>


        <ItemBar
          itemContent={'English to Vietnamese'}
          navigation={() => navigation.navigate('Learning Screen')}
        />
        <ItemBar
          itemContent={'Transplate from Vietnamese to English'}
          navigation={() => navigation.navigate('Learning Screen')}
        />

        {/* <ItemBar
          itemContent={'Test Method'}

        />
        <ItemBar
          itemContent={'Achivements'}

        /> */}
        <ItemBar
          itemContent={'New Vocabulary Addition Tool'}
          navigation={() => navigation.navigate('Add New Word')}
        />
        {/* <ItemBar
          itemContent={'Counter Tool'}
          navigation={() => navigation.navigate('Counter Screen')}
        />
        <ItemBar
          itemContent={'Test'}
          navigation={() => navigation.navigate('Test')}
        /> */}


      </View>

    </View>


  );

};

const styles = StyleSheet.create({
  grandContainer: {
    backgroundColor: color.PrimeBackground,
    height: height,
    // justifyContent: "center",


  },
  contentContainer: {
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  headerTitle: {
    color: color.homeHeaderTitle,
    fontSize: 35,
    fontFamily: 'IBMPlexMono-Bold',
    // alignItems: "center"
    justifyContent: "center"
  },
  item: {
    itemText: {
      color: '#ffff',
      fontSize: 20
    },

  }

});