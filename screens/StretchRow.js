import React from "react";
import { View, StyleSheet } from "react-native";

//https://facebook.github.io/react-native/docs/flexbox
export default class StretchItems extends React.Component {
    render() {
        return (
            <View style={styles.mainBox}>
                <View
                    style={[
                        styles.box,
                        { backgroundColor: "powderblue", width: 50 }
                    ]}
                />
                <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                <View
                    style={[
                        styles.box,
                        { backgroundColor: "steelblue", height: 100 }
                    ]}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent:"center"
    },
    box: {
        height: 50
    }
});
