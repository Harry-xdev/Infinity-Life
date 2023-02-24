import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Store from "./Store";
import Setting from "./Settings";
import Home from "../Home";


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

export default BottomTabBarMain = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name='home' color={'black'} size={28} />
          )
        }}
      />
      <Tab.Screen
        name="Store Center"
        component={Store}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name='local-grocery-store' color={'black'} size={30} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: () => (
            <IonIcons name='md-settings' color={'black'} size={30}/>
          )
        }}
      />


    </Tab.Navigator>
  )
}