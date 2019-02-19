import React from "react";
import { View, StyleSheet } from "react-native";

export default class JustifyContent extends React.Component {
    render() {
        return (
            <View style={styles.mainBox}>
                <View style={[styles.box, { backgroundColor: "powderblue" }]} />
                <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                <View style={[styles.box, { backgroundColor: "steelblue" }]} />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    box: {
        width: 50,
        height: 50
    }
});
