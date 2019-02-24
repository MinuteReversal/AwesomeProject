import React, { Component } from "react";
import { TextInput, Button, StyleSheet, View, WebView } from "react-native";

//https://medium.com/@andrei.pfeiffer/reset-react-native-webview-to-initial-url-b57aad9442a0
export default class WebViewPage extends Component {
    state = { text: "", uri: "http://www.google.com" };
    go() {
        this.setState({ uri: this.state.text });
        this.webview.goBack();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.urlBox}>
                    <TextInput
                        keyboardType="web-search"
                        placeholder="请输入网址"
                        onChangeText={text => this.setState({ text })}
                        style={styles.innerBox}
                    />
                    <Button title="Go" onPress={() => this.go()} />
                </View>
                <WebView
                    ref={r => (this.webview = r)}
                    source={{ uri: this.state.uri }}
                    style={styles.webView}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    urlBox: {
        flexDirection: "row",
        height: 40
    },
    innerBox: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1
    },
    goBtn: {
        width: 40
    },
    webView: {
        flex: 1
    }
});
