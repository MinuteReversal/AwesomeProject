import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { delayMethods } from "~/actions";

export class ReduxAsync extends Component {
    render() {
        let { count, asyncMethods } = this.props;
        return (
            <View>
                <Text> Redux Async </Text>
                <Text> {count} </Text>
                <Button title="asyncMethods" onPress={() => asyncMethods()} />
            </View>
        );
    }
}

const mapStateToProps = state => ({ count: state.count });

const mapDispatchToProps = dispatch => ({
    asyncMethods() {
        dispatch(delayMethods());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxAsync);
