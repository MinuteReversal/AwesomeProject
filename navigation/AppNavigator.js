import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import helloapp from "./HelloWorldApp";
import PositionRelative from "./PositionRelative";
import PositionAbsolute from "./PositionAbsolute";
import PageB from "./PageB";
import FlexDirection from "./FlexDirection";
import JustifyContent from "./JustifyContent";
import AbsoluteCenter from "./AbsoluteCenter";
import StretchItems from "./StretchItems";
import FlexCenter from "./FlexCenter";
import FlexCenterRow from "./FlexCenterRow";
import StretchHorizontal from "./StretchHorizontal";
import StretchVertical from "./StretchVertical";
import BorderRadius from "./BorderRadius";
import HandingInput from './HandingInput'
import VideoPage from './VideoPage'

export default createAppContainer(
    createStackNavigator({
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Main: helloapp,
        PositionRelative,
        PositionAbsolute,
        PageB,
        FlexDirection,
        JustifyContent,
        AbsoluteCenter,
        StretchItems,
        FlexCenter,
        FlexCenterRow,
        StretchHorizontal,
        StretchVertical,
        BorderRadius,
        HandingInput,
        VideoPage
    })
);
