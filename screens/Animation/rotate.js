import React, { Component } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

export default class rotate extends Component {
    state = {
        animationRotate: new Animated.Value(0)
    };
    componentDidMount() {
        Animated.timing(this.state.animationRotate, {
            toValue: 1,
            easing: Easing.linear,
            duration: 10000
        }).start();
    }
    render() {
        let { animationRotate } = this.state;
        const spin = animationRotate.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"]
        });
        return (
            <View style={styles.animationMove}>
                <Animated.View
                    style={[styles.box, { transform: [{ rotate: spin }] }]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    animationRotate: {
        flex: 1
    },
    box: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 50,
        height: 50,
        backgroundColor: "red"
    }
});
