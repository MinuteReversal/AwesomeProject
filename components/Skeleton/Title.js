import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import Square from "./Square";

export default class Title extends PureComponent {
    render() {
        const { width = "38%" } = this.props;
        return (
            <View style={styles.title}>
                <Square width={width} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        
    }
});
