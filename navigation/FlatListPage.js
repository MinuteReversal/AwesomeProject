import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

export default class FlatListPage extends React.Component {
    constructor(props) {
        super(props);
        let list = this.appendTen();
        this.state = { list, loading: false };
    }
    appendTen() {
        let list = [];
        for (let i = 0; i < 100; i++) {
            list.push({ key: i.toString() });
        }
        return list;
    }
    loadMore() {
        let list = this.state.list;
        this.setState({ list: list.concat(this.appendTen()) });
    }
    refresh() {
        let list = this.appendTen();
        this.setState({ loading: true });
        this.setState({ list });
        this.setState({ loading: false });
    }
    render() {
        return (
            <View style={styles.mainBox}>
                <FlatList
                    style={[styles.mainBox]}
                    data={this.state.list}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={this.state.loading}
                    onRefresh={() => this.refresh()}
                    onEndReached={() => this.loadMore()}
                    renderItem={({ item, index }) => (
                        <Text>
                            line: {item.key},index:{index}
                        </Text>
                    )}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    mainBox: {
        flex: 1
    }
});
