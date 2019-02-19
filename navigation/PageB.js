import React from "react";
import { Text, View, Button } from "react-native";

export default class PageB extends React.Component {
    static navigationOptions = { header: null };
    render() {
        return (
            <View>
                <Text>This is Relative Page</Text>
                <Text>{JSON.stringify(this.props)}</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="返回"
                />
            </View>
        );
    }
}
