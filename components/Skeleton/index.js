import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import Paragraph from "./Paragraph";
import Avatar from "./Avatar";
import Title from "./Title";
import PropTypes from "prop-types";

export default class index extends PureComponent {
    static propTypes = {
        avatar: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
    };
    render() {
        const {
            active = false,
            loading = true,
            avatar,
            paragraph,
            children
        } = this.props;
        return (
            <View style={styles.skeleton}>
                {loading ? (
                    <View style={[styles.inner]}>
                        {avatar && (
                            <View style={styles.avatar}>
                                {"boolean" == typeof avatar ? (
                                    <Avatar />
                                ) : (
                                    <Avatar {...avatar} />
                                )}
                            </View>
                        )}
                        <View style={styles.content}>
                            <Title />
                            <Paragraph {...paragraph} />
                        </View>
                    </View>
                ) : (
                    <View>{children}</View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    skeleton: {},
    inner: {
        flexDirection: "row"
    },
    content: {
        flex: 1
    },
    avatar: {
        paddingRight: 16
    }
});
