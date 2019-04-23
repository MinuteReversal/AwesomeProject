import React, { Component } from "react";
import { Button, Animated, StyleSheet, Easing, View } from "react-native";

export default class transIn extends Component {
    state = {
        anim: new Animated.Value(0)
    };
    show() {
        Animated.timing(this.state.anim, {
            toValue: 1,
            easing: Easing.linear,
            duration: 200
        }).start();
    }
    hide() {
        Animated.timing(this.state.anim, {
            toValue: 0,
            easing: Easing.linear,
            duration: 200
        }).start();
    }
    render() {
        const { anim } = this.state;
        const a = anim.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, 0]
        });

        return (
            <View style={styles.mainBox}>
                <Button
                    title="show"
                    onPress={() => {
                        this.show();
                    }}
                />
                <Button
                    title="hide"
                    onPress={() => {
                        this.hide();
                    }}
                />
                <View style={styles.container}>
                    <Animated.View
                        style={[
                            styles.box,
                            {
                                transform: [{ translateY: a }]
                            }
                        ]}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainBox: {
        flex: 1
    },
    container: {
        position: "relative",
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
