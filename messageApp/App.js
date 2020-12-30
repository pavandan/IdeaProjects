/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
    Text,
    TextInput,
    Button,
    FlatList
} from 'react-native';
import * as firebase from 'firebase';
//import {TextInput} from 'react-native-gesture-handler';
/*
const firebaseConfig = {
    apiKey: "AIzaSyDYhgAFFavtEb5toA_dTOtKuziquc27DZ8",
    authDomain: "messageapp-9ee6c.firebaseapp.com",
    databaseURL: "https://messageapp-9ee6c.firebaseio.com",
    projectId: "messageapp-9ee6c",
    storageBucket: "messageapp-9ee6c.appspot.com",
    messagingSenderId: "556738494937",
    appId: "1:556738494937:web:f60be60074ae1c69fbd9c8",
    measurementId: "G-D71DP7GPWF"
};
*/
const firebaseConfig = {

    apiKey: "AIzaSyAz9u65ZX2F5Tr1gCfKHHf-vce0gSgfyC8",
    authDomain: "complaint-70e3e.firebaseapp.com",
    databaseURL: "https://complaint-70e3e.firebaseio.com",
    projectId: "complaint-70e3e",
    storageBucket: "complaint-70e3e.appspot.com",
    messagingSenderId: "493586310101",
    appId: "1:493586310101:web:eb16044882a51a764cd35c"

};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message: '',
            messages: []
        };
        this.addItem = this.addItem.bind(this);
    }
    componentDidMount() {
        firebase
            .database()
            .ref("Complains")
            .child("text")
            .on("value", snapshot => {
                const data = snapshot.val()
                if (data){
                    const initMessages = [];
                    Object
                        .keys(data)
                        .forEach(message => initMessages.push(data[message]));
                    this.setState({
                        messages: initMessages
                    })
                }
            });
        firebase
            .database()
            .ref("Complains")
            .child("text")
            .on("child_added", snapshot => {
                const data = snapshot.val();
                if (data) {
                    this.setState(prevState => ({
                        messages: [data, ...prevState.messages]
                    }))
                }
            })
    }
    addItem() {
        if (!this.state.message) return;
        const newMessage = firebase.database().ref("Complains")
            .child("text")
            .push();
        newMessage.set(this.state.message, () => this.setState({message: ''}));
    }
    render(){
        return(

            <View style={styles.container}>
                <View style={styles.msgBox}>
                    <TextInput placeholder='Enter your message'
                               value={this.state.message}
                    onChangeText={(text) => this.setState({message: text})}
                    style={styles.txtInput}/>
                    <Button title='Send' onPress={this.addItem}/>
                </View>
                <FlatList data={this.state.messages}
                          keyExtractor={(x) =>x.message}
                renderItem={
                    ({item}) =>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.listItem}>
                                {item}
                            </Text>
                        </View>
                }/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    msgBox: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#fff'
    },
    txtInput: {
        flex: 1
    },
    listItemContainer: {
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 5
    },
    listItem: {
        fontSize: 20,
        padding: 10
    }
});
