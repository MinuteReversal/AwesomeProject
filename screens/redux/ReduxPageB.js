import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

//https://redux.js.org/basics/usage-with-react
const ReduxPageB = connect(({ count }) => ({ count }))(
    ({ count, dispatch }) => (
        <View>
            <Text> PageB </Text>
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
export default ReduxPageB;
