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
import PassModel from "~/screens/PassModel";
import RefsScreen from "~/screens/RefsScreen";
import ReduxScreen from "~/screens/ReduxScreen";
import ReduxPageA from "~/screens/redux/ReduxPageA";
import ReduxPageB from "~/screens/redux/ReduxPageB";
import FlexFall from "../screens/FlexFall";
import ReduxAsync from "../screens/redux/ReduxAsync";
import ChangeColumn from "../screens/ChangeColumn";
import ModalScreen from "../screens/ModalScreen";
import AnimationScreen from "../screens/Animation";
import AnimationMove from "../screens/Animation/move";
import AnimationRotate from "../screens/Animation/rotate";
import AnimationScale from "../screens/Animation/scale";
import ImagePreviewer from "../screens/ImagePreviewer";
import TransIn from "../screens/Animation/transIn";
import NetestScroll from "../screens/NetestScroll"
import SkeletonScreen from '../screens/SkeletonScreen'

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
        WebViewHtml,
        PassModel,
        RefsScreen,
        ReduxScreen,
        ReduxPageA,
        ReduxPageB,
        FlexFall,
        ReduxAsync,
        ChangeColumn,
        ModalScreen,
        AnimationScreen,
        AnimationMove,
        AnimationRotate,
        AnimationScale,
        ImagePreviewer,
        TransIn,
        NetestScroll,
        SkeletonScreen
    })
);
