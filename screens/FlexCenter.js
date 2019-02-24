import React from "react";
import { Text, View, StyleSheet } from "react-native";

//https://facebook.github.io/react-native/docs/flexbox
export default class FlexCenter extends React.Component {
    render() {
        return (
            <View style={styles.mainBox}>
                <View style={styles.alginCenter}>
                    <View style={[styles.box, { backgroundColor: "yellow" }]} />
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "red"
    },
    alginCenter: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "blue"
    },
    box: {
        width: 50,
        height: 50
    }
});
