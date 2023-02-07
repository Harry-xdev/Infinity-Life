import { React } from "react";
import { Dimensions, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

import color from "../../colorStore";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default SplashScreen = ({ navigation }) => {

  return (
    <View style={styles.grandContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.greetingText}>
          Hi! Harry!
        </Text>
        <Text style={styles.titleText}>
          Welcome to infinity world!
        </Text>

      </View>
      <Text style={styles.descriptionText}>
        I'm Cell! Your virtual assistant! Nice to see you!
      </Text>
      <Text style={[styles.descriptionText, { backgroundColor: '#0000' }]}>
        This magical application would summarize your whole beautiful life where can explore surprises!
      </Text>
      <View style={{ alignItems: "center", width: width - 30 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={{ color: 'red', fontFamily: 'IBMPlexMono-Bold', fontSize: 20 }}>
            Start To Explore!
          </Text>
        </TouchableOpacity>
      </View>

    </View>

  )

};

const styles = StyleSheet.create({

  grandContainer: {
    backgroundColor: color.PrimeBackground,
    height: height,
    width: width,
    justifyContent: "center",
    paddingHorizontal: 15

  },
  headerContainer: {
    alignItems: "center",
  },
  greetingText: {
    fontFamily: 'monospace',
    color: '#63e9f8',
    fontSize: 45,
    fontWeight: '800',
    paddingBottom: 20

  },
  titleText: {
    color: '#ffff',
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'IBMPlexMono-Bold',
    paddingBottom: 20

  },
  descriptionText: {
    color: '#23ff2c',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'IBMPlexMono-Regular',
    marginBottom: 15
  },
  button: {
    height: 50,
    width: 250,
    borderWidth: 2,
    borderColor: color.btnBorder,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: "center",
    marginVertical: 20


  }

});