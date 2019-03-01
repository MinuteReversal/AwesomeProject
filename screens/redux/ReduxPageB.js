import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

//https://redux.js.org/basics/usage-with-react
export class ReduxPageB extends Component {
    render() {
        let { count, dispatch } = this.props;
        return (
            <View>
                <Text> PageB </Text>
                <Text> {count}</Text>
                <Button title="add" onPress={() => dispatch("increment")} />
                <Button title="remove" onPress={() => remove()} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = dispatch => {
    return {
        add() {
            dispatch("increment");
        },
        remove() {
            dispatch("decrement");
        }
    };
};

export default connect(
    mapStateToProps    
)(ReduxPageB);
