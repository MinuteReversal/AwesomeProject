import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import helloapp from "~/screens/HelloWorldApp";
import PositionRelative from "~/screens/PositionRelative";
import PositionAbsolute from "~/screens/PositionAbsolute";
import PageB from "~/screens/PageB";
import FlexDirection from "~/screens/FlexDirection";
import JustifyContent from "~/screens/JustifyContent";
import AbsoluteCenter from "~/screens/AbsoluteCenter";
import StretchItems from "~/screens/StretchItems";
import FlexCenter from "~/screens/FlexCenter";
import FlexCenterRow from "~/screens/FlexCenterRow";
import StretchHorizontal from "~/screens/StretchHorizontal";
import StretchVertical from "~/screens/StretchVertical";
import BorderRadius from "~/screens/BorderRadius";
import HandingInput from "~/screens/HandingInput";
import VideoPage from "~/screens/VideoPage";
import ScrollViewPage from "~/screens/ScrollViewPage";
import FlatListPage from "~/screens/FlatListPage";
import SectionListPage from "~/screens/SectionListPage";
import NetworkingPage from "~/screens/NetworkingPage";
import ConditionPage from "~/screens/ConditionPage";
import LoopPage from "~/screens/LoopPage";
import WebViewPage from "~/screens/WebViewPage";
import WebViewHtml from "~/screens/WebViewHtml";

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
        VideoPage,
        ScrollViewPage,
        FlatListPage,
        SectionListPage,
        NetworkingPage,
        ConditionPage,
        LoopPage,
        WebViewPage,
        WebViewHtml
    })
);
