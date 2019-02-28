import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

//https://redux.js.org/introduction/getting-started
//https://github.com/expo/hello-world-redux/blob/master/main.js

const state = {
    count: 0
};

const reduce = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const ReduxScreen = connect(({ count }) => ({ count }))(
    ({ count, dispatch }) => (
        <View>
            <Text> {count} </Text>
            <Button
                title="增加"
                onPress={() => {
                    dispatch({ type: "increment" });
                }}
            />
            <Button
                title="减少"
                onPress={() => {
                    dispatch({ type: "decrement" });
                }}
            />
        </View>
    )
);

export default class Main extends Component {
    render() {
        return (
            <Provider store={createStore(reduce, state)}>
                <ReduxScreen />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({});
