import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, ImageBackground } from "react-native";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import color from "../../colorStore";

export default HeaderTop = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.BackBtn}
        onPress={props.backTo}
      >
        <Text><FontAwesome5 name={'angle-double-left'} size={25} color={color.black} /></Text>
      </TouchableOpacity>
      <View><Text style={styles.headerTitle}>{props.headerTitle}</Text></View>

      <TouchableOpacity
        style={[styles.scoreContainer, { borderWidth: props.borderWidth }]}
        onPress={props.goldBtn}
      >
        <ImageBackground
          style={{ height: 30, width: 30, marginRight: 5, justifyContent: "center" }}
          source={require('../../images/item/stock-vector-one-coin-white-background.png')}>
        </ImageBackground>
        <View>
          <Text style={{ color: 'red', fontSize: 21, fontFamily: 'IBMPlexMono-Bold' }}>{props.score}</Text>
        </View>
        <View>
          <Text style={{ color: 'red', fontSize: 21, fontFamily: 'IBMPlexMono-Bold' }}>{props.gold}</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: color.width,
    borderWidth: 0,
    // borderBottomColor: '#ffff',
    backgroundColor: color.white,
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    justifyContent: 'space-between',
    // marginBottom: 5


  },

  BackBtn: {
    height: 40,
    width: 60,
    borderWidth: 2,
    borderColor: color.black,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: color.hackingColor
  },
  scoreContainer: {
    flexDirection: "row",
    marginRight: 10,
    // borderWidth: 2,
    // width: 140,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,


  },
  scoreText: {
    fontFamily: 'IBMPlexMono-Bold',
    color: '#000000',
    fontSize: 25

  },
  headerTitle: {
    fontSize: 30,
    fontFamily: 'IBMPlexMono-Bold',
    color: 'gray'
  },
})