import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default class NetworkingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { data: undefined };
    }
    async loadData() {
        let response = await fetch(
            "http://220.165.143.68:11111/api/services/app/albumData/GetAlbumDetail?albumId=198"
        );
        let json = await response.json();
        this.setState({ data: json.result });
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title="获取数据" onPress={() => this.loadData()} />
                {this.state.data && <Text>服务器返回内容如下：</Text>}
                <Text> {JSON.stringify(this.state.data)} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
