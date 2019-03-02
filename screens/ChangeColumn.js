import React, { Component } from "react";
import { FlatList, Text, StyleSheet, View, Button } from "react-native";

export default class ChangeColumn extends Component {
    state = {
        list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        loading: false,
        numColumns: 1
    };
    change() {
        let { numColumns } = this.state;
        if (numColumns == 1) this.setState({ numColumns: 2 });
        else this.setState({ numColumns: 1 });
    }
    render() {
        let { list, loading, numColumns } = this.state;
        return (
            <View>
                <View>
                    <Text>Change column</Text>
                    <Button onPress={() => this.change()} title="toggle" />
                </View>
                <FlatList
                    data={list}
                    key={numColumns}
                    numColumns={numColumns}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.item}>
                            <Text>{index.toString()}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    }
});
