import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Skeleton from "../components/Skeleton";

export default class SkeletonScreen extends Component {
    state = {
        loading: true
    };
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ loading: false });
        // }, 3000);
    }
    render() {
        const { loading } = this.state;
        return (
            <View style={styles.skeletonScreen}>
                <Skeleton loading={loading}>
                    <View>
                        <Text>
                            hello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello word
                        </Text>
                    </View>
                </Skeleton>
                <Skeleton avatar loading={loading}>
                    <View>
                        <Text>
                            hello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello word
                        </Text>
                    </View>
                </Skeleton>
                <Skeleton avatar loading={loading} paragraph={{ rows: 2 }}>
                    <View>
                        <Text>
                            hello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello word
                        </Text>
                    </View>
                </Skeleton>
                <Skeleton
                    avatar
                    active
                    loading={loading}
                    paragraph={{ rows: 5 }}
                >
                    <View>
                        <Text>
                            hello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello wordhello wordhello
                            wordhello wordhello wordhello word
                        </Text>
                    </View>
                </Skeleton>
                <Text>After After After</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    skeletonScreen: {}
});
