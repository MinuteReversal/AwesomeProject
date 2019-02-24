import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default class ScrollViewPage extends React.Component {
    render() {
        let items = [];
        for (let i = 0; i < 100; i++) {
            items.push(<Text key={i}>line: {i}</Text>);
        }

        return <ScrollView>{items}</ScrollView>;
    }
}
