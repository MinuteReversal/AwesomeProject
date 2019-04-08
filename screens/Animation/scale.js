import React, { Component } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

export default class scale extends Component {
    state = {
        animation: new Animated.Value(0)
    };
    componentDidMount() {
        Animated.timing(this.state.animation, {
            toValue: 300,
            easing: Easing.linear,
            duration: 10000
        }).start();
    }
    render() {
        let { animation } = this.state;
        return (
            <View style={styles.animationScale}>
                <Animated.View
                    style={[
                        styles.box,
                        { height: animation, width: animation }
                    ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    animationScale: {
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
