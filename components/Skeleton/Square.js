import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import AnimationBlock from "./AnimationBlock";

export default class Square extends PureComponent {
    render() {
        const {
            height = 16,
            width = "100%",
            active = false,
            style
        } = this.props;
        return (
            <AnimationBlock
                active={active}
                style={[styles.square, style, { height, width }]}
            />
        );
    }
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: "#f2f2f2",
        marginTop: 16
    }
});
