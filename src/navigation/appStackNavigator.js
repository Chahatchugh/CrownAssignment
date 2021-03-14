import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from '../screens/profile';
import HomeScreen from '../screens/home';
import SongsDetailScreen from '../screens/songsDetail';

// createStackNavigator helps to make a stack 
const StackNavigator = createStackNavigator();

const MainStackNavigator = () => (
    <StackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00A2ED",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <StackNavigator.Screen component={HomeScreen} name="Home" />
      <StackNavigator.Screen component={ProfileScreen} name="Profile" />
      <StackNavigator.Screen component={SongsDetailScreen} name="Song Detail" />
    </StackNavigator.Navigator>
  );
  
  export default MainStackNavigator;