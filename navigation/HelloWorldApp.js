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
                    source={require("app/assets/images/robot-dev.png")}
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
                    <Button title="row" onPress={()=>navigate("FlexDirection")}/>
                </View>
            </View>
        );
    }
}
