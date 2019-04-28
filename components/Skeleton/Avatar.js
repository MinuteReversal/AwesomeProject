import React, { PureComponent } from "react";
import { Text, StyleSheet, View } from "react-native";
import Circle from "./Circle";
import Square from "./Square";

export default class Avatar extends PureComponent {
    render() {
        const { size = 40, shape = "circle" /* circle,square */ } = this.props;
        return (
            <View style={styles.avatar}>
                {shape == "circle" ? (
                    <Circle size={size} />
                ) : (
                    <Square width={size} height={size} />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {}
});
