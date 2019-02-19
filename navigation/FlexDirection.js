import React from "react";
import { Text, View, StyleSheet } from "react-native";

//https://facebook.github.io/react-native/docs/flexbox
export default class FlexDorectopm extends React.Component {
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
        flexDirection: "row"
    },
    box: {
        width: 50,
        height: 50
    }
});
