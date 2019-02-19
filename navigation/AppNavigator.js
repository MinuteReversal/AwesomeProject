import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import helloapp from "./HelloWorldApp";
import PositionRelative from "./PositionRelative";

export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: helloapp,
  PositionRelative:PositionRelative
}));