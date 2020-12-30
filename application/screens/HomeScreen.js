import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export  default class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../assets/complaint.png")}
                       style={{marginTop: -40, alignSelf: "center", height: 70, width: 70}}/>


                <Text> Welcom to complain box</Text>
            </View>


        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b38e3e",
        flexDirection: "column"
    },
    homeContainer:{
        padding: 10,
        borderBottomColor: 'rgba(255,255,255,.7)',
        borderBottomWidth: 5,
        height: 100,
        width: 100
    }
});
