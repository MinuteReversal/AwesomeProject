import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class AddComponent extends Component {
    state = { count: 0 };
    add() {
        let { count } = this.state;
        count++;
        this.setState({ count });
    }
    subtract() {
        let { count } = this.state;
        count--;
        this.setState({ count });
    }
    render() {
        let { state } = this;
        return (
            <View>
                <Text> {state.count} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
