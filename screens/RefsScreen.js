import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";
import moduleName from "~/components/AddComponent";
import AddComponent from "../components/AddComponent";

export default class RefsScreen extends Component {
    ac = null;
    render() {
        return (
            <View>
                <AddComponent
                    ref={ac => {
                        this.ac = ac;
                    }}
                />
                <Button
                    title="add"
                    onPress={() => {
                        this.ac.add();
                    }}
                />
                <Button
                    title="subtract"
                    onPress={() => {
                        this.ac.subtract();
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});
