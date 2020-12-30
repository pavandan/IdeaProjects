import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Ionicons from "react-native-vector-icons/Ionicons"

import MessageScreen from './screens/MessageScreen'
import NotificationeScreen from './screens/NotificationScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import React from 'react'
import  firebase from 'firebase'
import {ActivityIndicator, StyleSheet, Text, View, Platform, InteractionManager} from 'react-native';


import firebaseConfig from "./classes/config"
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const AppStack = createBottomTabNavigator(
    {
        Home:{
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor}/>
            }
        },

        Post:{
            screen: PostScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-add-circle" size={40} color={tintColor}
                style={{
                    shadowColor: "#b38e3e",
                    shadowOffset: { width: 0, height: 0 },
                    shadowRadius: 10,
                    shadowOpacity: 0.3

                }} />
            }
        },
        Profile:{
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor}/>
            }
        }
    },
    {
        tabBarOptions:{
            activeTintColor: "#b38e3e",
            inactiveTintColor: "#B8BBC4"
        }
    }
);

/*
const TabScreen = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Message: {
            screen: MessageScreen,

        },
        Profile: {
            screen: ProfileScreen,

        }

    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#b38e3e',
            activeBackgroundColor:'#F8F8F8',
            inactiveTintColor: '#F8F8F8',

            style: {
                backgroundColor: '#b38e3e',

            },
            labelStyle: {
                textAlign: 'center',
                fontSize: 20,
            },
            indicatorStyle: {
                borderBottomColor: '#87B56A',
                borderBottomWidth: 2,
            },

        },
    }
)

const AppStack = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#b38e3e',
            },
            headerTintColor: '#FFFFFF',
            title: 'Complaint Box',
        },
    },
});
*/
const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);

const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
// Work around issue `Setting a timer for long time`
// see: https://github.com/firebase/firebase-js-sdk/issues/97
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
        const waitingTime = ttl - Date.now();
        if (waitingTime <= 1) {
            InteractionManager.runAfterInteractions(() => {
                if (!timerFix[id]) {
                    return;
                }
                delete timerFix[id];
                fn(...args);
            });
            return;
        }

        const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
        timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
        if (MAX_TIMER_DURATION_MS < time) {
            const ttl = Date.now() + time;
            const id = '_lt_' + Object.keys(timerFix).length;
            runTask(id, fn, ttl, args);
            return id;
        }
        return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = id => {
        if (typeof id === 'string' && id.startsWith('_lt_')) {
            _clearTimeout(timerFix[id]);
            delete timerFix[id];
            return;
        }
        _clearTimeout(id);
    };
}



