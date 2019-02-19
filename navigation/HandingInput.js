import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export default class HandingInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }
    render() {
        return (
            <View>
                <Text>{this.state.text}</Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={text => this.setState({ text })}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    inputBox: {
        width: 120,
        height: 50,
        backgroundColor: "red",
        borderRadius: 10
    }
});
