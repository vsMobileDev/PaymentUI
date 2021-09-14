import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./app/screens/Login";
import GameScreen from "./app/screens/Game";


export default createNativeStackNavigator(
  {
    Login: LoginScreen,
    Game: GameScreen
  },
  {
    initialRouteName: "Login"
  }
);