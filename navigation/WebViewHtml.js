import React, { Component } from "react";
import { WebView, StyleSheet, View } from "react-native";

export default class WebViewHtml extends Component {
    onMessage(event) {
        alert(event.nativeEvent.data);
    }
    render() {
        let html =
            '<div style="color:red;">hello world</div>' +
            '<button onclick="window.postMessage(`hello`);">弹出信息</button>';
        return (
            <View style={styles.container}>
                <WebView
                    onMessage={event => this.onMessage(event)}
                    source={{ html }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
