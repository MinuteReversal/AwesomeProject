import React, { PureComponent } from "react";
import { Text, StyleSheet, View } from "react-native";
import Circle from "./Circle";
import Square from "./Square";

export default class Avatar extends PureComponent {
    render() {
        const {
            size = 40,
            shape = "circle" /* circle,square */,
            active = false
        } = this.props;
        return (
            <View style={styles.avatar}>
                {shape == "circle" ? (
                    <Circle active={active} size={size} />
                ) : (
                    <Square active={active} width={size} height={size} />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {}
});
