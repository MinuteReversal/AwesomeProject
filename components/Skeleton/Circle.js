import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

export default class Circle extends PureComponent {
    render() {
        const { style, size = 40 } = this.props;
        return (
            <View
                style={[
                    styles.circle,
                    style,
                    { width: size, height: size, borderRadius: size / 2 }
                ]}
            />
        );
    }
}

const styles = StyleSheet.create({
    circle: {
        backgroundColor: "#f2f2f2"
    }
});
