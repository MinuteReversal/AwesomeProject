import React from "react";
import { View, StyleSheet } from "react-native";

export default class StretchVertical extends React.Component {
    render() {
        return (
            <View style={[styles.mainBox]}>
                <View
                    style={[styles.box, { height: 50, backgroundColor: "red" }]}
                />
                <View
                    style={[styles.box, { flex: 1, backgroundColor: "green" }]}
                />
                <View
                    style={[styles.box, { height: 50, backgroundColor: "blue" }]}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        flexDirection: "column",
        alignItems:"flex-end"
    },
    box: {
        width: 50
    }
});
