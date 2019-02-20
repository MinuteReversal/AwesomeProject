import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class LoopPage extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
    }
    render() {
        let items = this.state.list.map(i => (
            <Text key={i.toString()}>{i.toString()}</Text>
        ));

        return (
            <View style={styles.container}>
                {items}
                <Text>=================分隔线=================</Text>
                {this.state.list.map(i => (
                    <Text key={i.toString()}>{i.toString()}</Text>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {}
});
