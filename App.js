import "react-native-gesture-handler";
import React, {useEffect} from 'react';
import {Provider} from "react-redux";
import SplashScreen from 'react-native-splash-screen';  // Helps to hide splashscreen
import store  from "./src/redux/store";  // Passed to Provider child name store
import RootNavigator from "./src/navigation/index";  //navigation(stack , tab , drawer)

// Functional Component
export default function App() {

  // Hooks ---> UseEffect
  useEffect(() => {
    SplashScreen.hide()  // Component Did Mount
  },[])
  
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
