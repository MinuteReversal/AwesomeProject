import React, { Component } from "react";
import { Text, View, Image, Button } from "react-native";

export default class PositionAbSolute extends Component {
    render() {
        return (
            <View>
                <Text>this is positon absolute.</Text>

                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="返回"
                />
            </View>
        );
    }
}
