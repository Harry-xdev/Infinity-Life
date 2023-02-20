import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

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

      <View style={[styles.scoreContainer, {borderWidth: props.borderWidth} ]}>
        <View>
          <Text style={styles.scoreText}>{props.scoreLabel}</Text>
        </View>
        <View>
          <Text style={{color: 'red', fontSize: 25, fontFamily: 'IBMPlexMono-Bold'}}>{props.score}</Text>
        </View>

      </View>

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
    marginLeft: 10

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