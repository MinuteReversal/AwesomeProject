import React from "react";
import { Text, View, Button } from "react-native";

export default class PageB extends React.Component {
    static navigationOptions = { header: null };
    render() {
        //https://reactnavigation.org/docs/en/params.html
        let { navigation } = this.props;
        let id = navigation.getParam("id");
        let name = navigation.getParam("name");
        return (
            <View>
                <Text>This is Relative Page</Text>
                <Text>{id}</Text>
                <Text>{name}</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="返回"
                />
            </View>
        );
    }
}
