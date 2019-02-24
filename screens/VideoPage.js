import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Video } from "expo";

export default class VideoPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Video
                    source={require("~/assets/mp4/PepaPig.mp4")}
                    rate={1.0}
                    volume={1.0}
                    resizeMode="cover"
                    shouldPlay
                    style={styles.videoPlayer}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    videoPlayer: {
        height: 200
    }
});
