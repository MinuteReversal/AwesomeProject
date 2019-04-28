import React, { Component } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo";

export default class LinearGradientScreen extends Component {
    state = {
        anim: new Animated.Value(0)
    };
    planAnim = Animated.loop(
        Animated.timing(this.state.anim, {
            toValue: 1,
            duration: 1400
        })
    );
    start() {
        this.planAnim.start();
    }
    componentDidMount() {
        this.start();
    }
    render() {
        const { style } = this.props;
        return (
            <View style={[styles.view, style]}>
                <Animated.View
                    style={[
                        {
                            left: this.state.anim.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["-100%", "100%"]
                            })
                        },
                        styles.inner
                    ]}
                >
                    <LinearGradient
                        style={styles.linearGradient}
                        colors={["#f2f2f2", "#e6e6e6", "#f2f2f2"]}
                        locations={[0.25, 0.37, 0.63]}
                        start={[0, 0.5]}
                        end={[1, 0.5]}
                    />
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        position: "relative",
        backgroundColor: "#f2f2f2",
        width: "100%",
        height: 16
    },
    inner: {
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    linearGradient: {
        flex: 1
    }
});
