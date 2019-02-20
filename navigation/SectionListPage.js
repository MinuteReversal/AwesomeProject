import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
export default class SectionListPage extends React.Component {
    constructor(props) {
        super(props);
        let sections = this.append();
        this.state = { sections };
    }
    append() {
        return [
            { title: "D", data: ["Devin"] },
            {
                title: "J",
                data: [
                    "Jackson",
                    "James",
                    "Jillian",
                    "Jimmy",
                    "Joel",
                    "John",
                    "Julie"
                ]
            }
        ];
    }
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.state.sections}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.sectionHeader}>
                            {section.title}
                        </Text>
                    )}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>{item}</Text>
                    )}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: "rgba(247,247,247,1.0)"
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
});
