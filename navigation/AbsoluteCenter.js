import React from "react";
import { View, StyleSheet } from "react-native";

export default class AbsoluteCenter extends React.Component {
    render() {
        return (
            <View style={[styles.mainBox, { backgroundColor: "yellow" }]}>
                <View style={[styles.box, { backgroundColor: "red" }]} />
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
        position: "absolute",
        width: 50,
        height: 50,
        marginTop: -25,
        marginLeft: -25,
        top: "50%",
        left: "50%"
    }
});
