import React, { Component } from "react";
import { Text, View, Image, Button } from "react-native";

export default class HelloWorldApp extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }
    add() {
        let s = this.state.seconds;
        s++;
        this.setState({ seconds: s });
    }
    render() {
        let { navigate } = this.props.navigation;
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>{this.state.seconds}</Text>
                <Text>Hello world! &nbsp; &lt; &gt; </Text>
                <Image
                    source={require("~/assets/images/robot-dev.png")}
                    style={{ width: 122, height: 114 }}
                />
                <Text>
                    On iOS, a React Native ScrollView uses a native
                    UIScrollView. On Android, it uses a native ScrollView. On
                    iOS, a React Native Image uses a native UIImageView. On
                    Android, it uses a native ImageView. React Native wraps the
                    fundamental native components, giving you the performance of
                    a native app using the APIs of React.
                </Text>
                <View
                    style={{
                        flexDirection: "row"
                    }}
                >
                    <Button title="添加" onPress={() => this.add()} />
                    <Button
                        title="跳转到B页面"
                        onPress={() =>
                            navigate("PageB", { id: 1, name: "zhy" })
                        }
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Button
                        title="相对定位"
                        onPress={() => navigate("PositionRelative")}
                    />
                    <Button
                        title="绝对定位"
                        onPress={() => navigate("PositionAbsolute")}
                    />
                    <Button
                        title="row"
                        onPress={() => navigate("FlexDirection")}
                    />
                    <Button
                        title="colum"
                        onPress={() => navigate("JustifyContent")}
                    />
                    <Button
                        title="stretch"
                        onPress={() => navigate("StretchItems")}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Button
                        title="绝对居中"
                        onPress={() => navigate("AbsoluteCenter")}
                    />
                    <Button
                        title="弹性居中"
                        onPress={() => navigate("FlexCenter")}
                    />
                    <Button
                        title="弹性居中2"
                        onPress={() => navigate("FlexCenterRow")}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Button
                        title="左右固定中间拉伸flex"
                        onPress={() => navigate("StretchHorizontal")}
                    />
                    <Button
                        title="上下固定中间拉伸flex"
                        onPress={() => navigate("StretchVertical")}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Button
                        title="圆角"
                        onPress={() => navigate("BorderRadius")}
                    />
                    <Button
                        title="文本框"
                        onPress={() => navigate("HandingInput")}
                    />
                    <Button title="mp4" onPress={() => navigate("VideoPage")} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Button
                        title="滚动视图"
                        onPress={() => navigate("ScrollViewPage")}
                    />
                    <Button
                        title="FlatList"
                        onPress={() => navigate("FlatListPage")}
                    />
                    <Button
                        title="FlatChangeColumn"
                        onPress={() => navigate("ChangeColumn")}
                    />
                    <Button
                        title="SectionList"
                        onPress={() => navigate("SectionListPage")}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Button
                        title="网络请求"
                        onPress={() => navigate("NetworkingPage")}
                    />
                    <Button
                        title="WebView"
                        onPress={() => navigate("WebViewPage")}
                    />
                    <Button
                        title="条件渲染"
                        onPress={() => navigate("ConditionPage")}
                    />
                    <Button
                        title="循环渲染"
                        onPress={() => navigate("LoopPage")}
                    />
                    <Button
                        title="渲染html"
                        onPress={() => navigate("WebViewHtml")}
                    />
                    <Button
                        title="外部传入对象初始化组件"
                        onPress={() => navigate("PassModel")}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Button
                        title="引用组件"
                        onPress={() => navigate("RefsScreen")}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Button
                        title="Redux"
                        onPress={() => navigate("ReduxScreen")}
                    />
                    <Button
                        title="ReduxPageA"
                        onPress={() => navigate("ReduxPageA")}
                    />
                    <Button
                        title="ReduxPageB"
                        onPress={() => navigate("ReduxPageB")}
                    />
                    <Button
                        title="ReduxAsync"
                        onPress={() => navigate("ReduxAsync")}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Button title="Fall" onPress={() => navigate("FlexFall")} />
                </View>
            </View>
        );
    }
}
