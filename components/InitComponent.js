import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class InitComponent extends Component {
    state = { text: "hello" };
    componentDidMount() {
        let { model } = this.props;
        if (model) {
            this.setState({ ...model });
        }
    }
    render() {
        let { state } = this;
        return (
            <View>
                <Text> {state.text} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
