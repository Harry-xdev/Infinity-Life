import React, {useContext} from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

import ItemBar from "../homeComponents/ItemBar";
import color from "../../colorStore";
import { GolobalContext } from "../../Global/globalData";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Home = ({ navigation }) => {
  const { userData } = useContext(GolobalContext);
  const oldTotalScore = userData[0]['score'];
  return (

    <View style={styles.grandContainer}>

      <HeaderTop
        backTo={() => navigation.navigate('Splash Screen')}
        score={oldTotalScore}
        borderWidth={2}
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
          itemContent={'Vietnamese to English'}
          navigation={() => navigation.navigate('Vietnamese To English')}
        />

        {/* <ItemBar
          itemContent={'Test Method'}

        />
        <ItemBar
          itemContent={'Achivements'}

        /> */}
        <ItemBar
          itemContent={'Add New Vocabulary'}
          navigation={() => navigation.navigate('Add New Word')}
        />
        <ItemBar
          itemContent={'Working Day Counter'}
          navigation={() => navigation.navigate('Working Day Counter')}
        />
        {/* <ItemBar
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