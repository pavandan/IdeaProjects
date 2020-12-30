import React, { Component } from 'react';
import { Text, View } from 'react-native';

import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';
export default class HelloWorldApp extends Component {
    getUserLocationHandler = () =>{
        navigator.geolocation
        console.log("Pressed the button")
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <FetchLocation onGetLocation={this.getUserLocationHandler()}/>
                <UsersMap/>
            </View>
        );
    }
}
