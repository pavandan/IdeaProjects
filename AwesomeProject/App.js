import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { LoginRoute } from './src/routes';

export default function() {
    return (
        <Navigator
            initialRoute={LoginRoute}
            renderScene={(route, navigator) => <route.Component navigator={navigator}/>}
        />
    );
}
