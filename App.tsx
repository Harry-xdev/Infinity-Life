
// import React from 'react';
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './components/screens/Home';
import SplashScreen from './components/screens/Splash';
import LearningSreen from './components/screens/LearningScreen'
import Counter from './components/screens/Counter/Counter';
const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Learning Screen"
            component={LearningSreen}
            options={{ headerShown: false }}

          />
          <Stack.Screen
            name="Counter Screen"
            component={Counter}
            options={{ headerShown: false }}

          />





        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
