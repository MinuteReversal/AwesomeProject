import React, { Component } from "react";
import { Image, StyleSheet, View, ScrollView } from "react-native";

export default class FlexFall extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require("../assets/images/1.jpg")} style={styles.image} />
                    <Image source={require("../assets/images/2.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/3.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/4.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/5.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/6.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/7.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/8.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/9.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/11.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/12.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/13.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/14.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/15.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/16.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/17.jpg")} style={styles.image}/>
                    <Image source={require("../assets/images/18.jpg")} style={styles.image}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        flexDirection: "row"        
    },
    image:{        
        flexShrink:0.5,
        flexGrow:1,
        margin: 2
    }
});
