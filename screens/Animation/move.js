import React, { Component } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

export default class move extends Component {
    state = {
        moveAnim: new Animated.ValueXY(0, 0)
    };
    componentDidMount() {
        Animated.timing(this.state.moveAnim, {
            toValue: { x: 200, y: 300 },
            easing: Easing.linear,
            duration: 10000
        }).start();
    }
    render() {
        let { moveAnim } = this.state;
        return (
            <View style={styles.animationMove}>
                <Animated.View
                    style={[
                        styles.box,
                        {
                            left: moveAnim.x,
                            top: moveAnim.y
                        }
                    ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    animationMove: {
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
