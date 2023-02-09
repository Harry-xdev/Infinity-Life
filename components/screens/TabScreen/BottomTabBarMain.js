import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tab1 from "./Home";
import Tab2 from "./Earth";
import Tab3 from "./Settings";
import Home from "../Home";


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';


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
        name="Earth"
        component={Tab2}
        options={{
          tabBarIcon: () => (
            <IonIcons name='earth-sharp' color={'black'} size={30} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Tab3}
        options={{
          tabBarIcon: () => (
            <IonIcons name='md-settings' color={'black'} size={30}/>
          )
        }}
      />


    </Tab.Navigator>
  )
}