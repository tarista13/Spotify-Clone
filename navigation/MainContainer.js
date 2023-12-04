import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import MusicScreen from "./Screens/MusicScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle: {
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            shadowOpacity: 4,
            shadowRadius: 4,
            elevation: 4,
            shadowOffset: {
                width: 0,
                height: -4,
            },
            borderTop: 0,
        }
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon:({focused}) =>
            focused? (
                <Entypo name="home" size={24} color="white" />
            ) : (
                <AntDesign name="home" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
      name="Music"
      component={MusicScreen}
      options={{
        tabBarLabel: "Music",
        headerShown: false,
        tabBarLabelStyle: { color: "white" },
        tabBarIcon:({focused}) =>
          focused? (
            <MaterialCommunityIcons name="music-box-multiple" size={24} color="white" />
          ) : (
            <MaterialCommunityIcons name="music-box-multiple-outline" size={24} color="white" />
          ),
      }}
      />
      <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        headerShown: false,
        tabBarLabelStyle: { color: "white" },
        tabBarIcon:({focused}) =>
          focused? (
            <Ionicons name="person" size={24} color="white" />
          ) : (
            <Ionicons name="person-outline" size={24} color="white" />
          ),
      }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}} />
                <Stack.Screen name="Music" component={BottomTabs} options={{headerShown:false}} />
                <Stack.Screen name="Profile" component={BottomTabs} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;