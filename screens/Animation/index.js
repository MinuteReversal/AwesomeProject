import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { withNavigation } from "react-navigation";

class index extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.animationIndex}>
                <Button
                    title="move"
                    onPress={() => {
                        navigate("AnimationMove");
                    }}
                />
                <Button
                    title="rotate"
                    onPress={() => {
                        navigate("AnimationRotate");
                    }}
                />
                <Button
                    title="scale"
                    onPress={() => {
                        navigate("AnimationScale");
                    }}
                />
                <Button
                    title="TransIn"
                    onPress={() => {
                        navigate("TransIn");
                    }}
                />
            </View>
        );
    }
}
export default withNavigation(index);

const styles = StyleSheet.create({
    animationIndex: {}
});
