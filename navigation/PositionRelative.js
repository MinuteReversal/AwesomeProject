import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

//https://facebook.github.io/react-native/docs/layout-props#position
export default class positionRelative extends Component {
    render() {
        let styles = StyleSheet.create({
            mainBox: {
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            box: {
                position: "relative",
                width: 40,
                height: 40,
                backgroundColor: "#ff0000",
                borderWidth: 1,
                borderColor: "#000000"
            }
        });
        return (
            <View style={styles.mainBox}>
                <View style={[styles.box, { top: 0, left: 0 }]} />
                <View style={[styles.box, { top: 0, right: 0 }]} />
                <View style={[styles.box, { bottom: 0, right: 0 }]} />
                <View style={[styles.box, { bottom: 0, left: 0 }]} />
            </View>
        );
    }
}
