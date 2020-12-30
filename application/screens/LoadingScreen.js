import React from "react";
import {View, Text, StyleSheet, ActivityIndicator } from "react-native";
import  firebase from 'firebase';
import Fire from "../classes/Fire"

export  default class LoadingScreen extends React.Component{
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style={{fontSize: 20}}>Loading...</Text>
                <ActivityIndicator size="large" />
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    }
});
