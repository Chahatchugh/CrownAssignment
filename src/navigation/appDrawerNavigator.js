import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AllScreenTabNavigator } from "./appTabNavigator";
import SettingScreen from "../screens/setting";

// createDrawerNavigator helps to make a drawer 
const Drawer = createDrawerNavigator();


const AllDrawerNavigation = () => (
    <Drawer.Navigator initialRouteName='Profile'>
        <Drawer.Screen component={AllScreenTabNavigator} name='Home' />
        <Drawer.Screen component={SettingScreen} name='Settings' />
    </Drawer.Navigator>
)

export default AllDrawerNavigation;