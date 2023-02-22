
// import React from 'react';
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider } from 'react-redux';
import store from './store';
import { ContextProvider } from './Global/globalData';

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
import LearningSreen from './components/screens/EnglishVietnamese'
import Counter from './components/screens/Counter/Counter';
import BottomTabBarMain from './components/screens/TabScreen/BottomTabBarMain';
import AddNewWord from './components/screens/AddNewWord';
import VietnameseToEnglish from './components/screens/VietnameseEnglish';


const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Slash Screen'>
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{ headerShown: false }}

          />
          <Stack.Screen
            name="Bottom Tab Main"
            component={BottomTabBarMain}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Vietnamese To English"
            component={VietnameseToEnglish}
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
          <Stack.Screen
            name="Add New Word"
            component={AddNewWord}
            options={{ headerShown: false }}

          />


        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
