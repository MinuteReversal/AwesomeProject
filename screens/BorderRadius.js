import React from "react";
import { View, StyleSheet } from "react-native";

export default class BorderRadius extends React.Component {
    render() {
        return <View style={styles.box} />;
    }
}

let styles = StyleSheet.create({
    box: {
        width: 50,
        height: 50,
        backgroundColor: "red",
        borderRadius: 10
    }
});
