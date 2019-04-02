import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Modal } from "react-native";

export default class ModalScreen extends Component {
    state = { visible: false };
    render() {
        let { visible } = this.state;
        return (
            <View>
                <Button
                    title="show"
                    onPress={() => {
                        this.setState({ visible: true });
                    }}
                />
                <Modal
                    style={styles.mask}
                    animationType="fade"
                    visible={visible}
                    transparent={true}
                    onRequestClose={() => {}}
                >
                    <Text>hello</Text>
                    <Button
                        title="close"
                        onPress={() => {
                            this.setState({ visible: false });
                        }}
                    />
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mask: {
        backgroundColor: "rgba(0,0,0,0.5)"
    }
});
