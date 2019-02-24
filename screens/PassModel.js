import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import InitComponent from "~/components/InitComponent";

export default class PassModel extends Component {
    state = {
        text: "ok"
    };
    render() {
        let { state } = this;
        return (
            <View>
                <InitComponent model={state} />
            </View>
        );
    }
}

const styles = StyleSheet.create({});
