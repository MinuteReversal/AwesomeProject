import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import helloapp from "./HelloWorldApp";
import PositionRelative from "./PositionRelative";
import PositionAbsolute from "./PositionAbsolute";
import PageB from "./PageB";
import FlexDirection from "./FlexDirection";

export default createAppContainer(
    createStackNavigator({
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Main: helloapp,
        PositionRelative,
        PositionAbsolute,
        PageB,
        FlexDirection
    })
);
