import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

export default class NetestScroll extends Component {
    viewRef = null;
    state = { info: "" };
    genList(length) {
        const list = [];
        for (let i = 0; i < length; i++) {
            list.push(<Text key={i}>{i}</Text>);
        }
        return list;
    }
    handleScroll() {
        this.viewRef.measureInWindow((x, y, width, height, pageX, pageY) => {
            let info = `width:${width},height:${height},fx:${x},fy:${y},px:${pageX},py:${pageY}`;
            this.setState({ info });
        });
    }
    render() {
        const {
            state: { info }
        } = this;
        return (
            <ScrollView
                style={{ flex: 1 }}
                onScroll={() => {
                    this.handleScroll();
                }}
            >
                <View
                    ref={r => {
                        this.viewRef = r;
                    }}
                >
                    {this.genList(10)}
                </View>
                <View>
                    <Text style={{ backgroundColor: "yellow" }}>{info}</Text>
                    <ScrollView
                        nestedScrollEnabled
                        style={{
                            backgroundColor: "red",
                            height: 200
                        }}
                    >
                        {this.genList(100)}
                    </ScrollView>
                </View>
                {this.genList(100)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({});
