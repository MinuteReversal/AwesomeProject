import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

export class ReduxPageA extends Component {
    render() {
        let { count, add, remove } = this.props;
        return (
            <View>
                <Text> PageA </Text>
                <Text> {count}</Text>
                <Button title="add" onPress={() => add()} />
                <Button title="remove" onPress={() => remove()} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    add() {
        dispatch({type:'increment'});
    },
    remove() {
        dispatch({type:"decrement"});
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxPageA);
