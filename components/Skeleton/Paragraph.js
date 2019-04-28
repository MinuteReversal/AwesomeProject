import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import Square from "./Square";

export default class Paragraph extends PureComponent {
    render() {
        const { rows = 3, width = "61%", active = false } = this.props;
        let lines = [];
        for (let i = 0; i < rows; i++) {
            let w = width;
            if (width instanceof Array) {
                w = width[i];
            }
            if (typeof width == "string" || typeof width == "number") {
                w = rows - 1 == i ? width : "100%";
            }

            lines.push(
                <Square
                    active={active}
                    key={i}
                    width={w}
                    style={{ marginTop: i == 0 ? 0 : 16 }}
                />
            );
        }
        return <View style={styles.paragraph}>{lines}</View>;
    }
}

const styles = StyleSheet.create({
    paragraph: {
        marginTop: 28
    }
});
