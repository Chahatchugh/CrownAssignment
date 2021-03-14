import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import AllDrawerNavigation from "./appDrawerNavigator";

// Initial is Drawer Navigator
const RootNavigator = () => (
  <NavigationContainer>
    <AllDrawerNavigation/>
  </NavigationContainer>
);
export default RootNavigator;