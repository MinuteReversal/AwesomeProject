import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

export default class Square extends PureComponent {
    render() {
        const { height = 16, width = "100%", style } = this.props;
        return <View style={[styles.square, style, { height, width }]} />;
    }
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: "#f2f2f2",
        marginTop: 16
    }
});
