import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";

//https://reactjs.org/docs/conditional-rendering.html
export default class ConditionPage extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }
    render() {
        let button = (
            <Button
                title="show"
                onPress={() => this.setState({ show: true })}
            />
        );
        if (this.state.show) {
            button = (
                <Button
                    title="hide"
                    onPress={() => this.setState({ show: false })}
                />
            );
        }

        return (
            <View style={styles.container}>
                {button}
                {this.state.show && <Text> textInComponent </Text>}
                {this.state.show ? <Text> textInComponent </Text> : <Text />}
            </View>
        );
    }
}

const styles = StyleSheet.create({ container: {} });
