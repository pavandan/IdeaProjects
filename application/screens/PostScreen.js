/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView} from 'react-native';
import * as firebase from 'firebase';
import Ionicons from "react-native-vector-icons/Ionicons"
import ImagePicker from "react-native-image-crop-picker"
import{Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';


export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            message: '',
            messages: [],
            email: '',
            displayName: 'names',
            pickedImage: null,
            department: ""
        };
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {
        const { email, displayName} = firebase.auth().currentUser;
        this.setState({email, displayName});

        firebase
            .database()
            .ref("Complaints").child(this.state.displayName)
            .on("value", snapshot => {
                const data = snapshot.val()

                if (data){
                    const initMessages = [];
                    Object
                        .keys(data)
                        .forEach(message => initMessages.push(data[message].message));
                    console.log(data[message]);
                    this.setState({
                        messages: initMessages
                    })
                }
            });

        firebase
            .database()
            .ref("Complaints")
            .child(this.state.displayName)
            .on("child_added", snapshot => {
                const data = snapshot.val();
                console.log(data);
                if (data) {
                    this.setState(prevState => ({
                        messages: [data, ...prevState.messages]
                    }))
                }
            })
    }
    addItem() {
        if (!this.state.message) return;
        if (!this.state.department) return Alert.alert("Error","Please Select Department");
        if (!this.state.pickedImage) return Alert.alert("Error","No Picture selected");
        const newMessage = firebase.database().ref("Complaints").child(this.state.displayName);
        newMessage.push({
            text: this.state.message,
            email: this.state.email,
            Image: this.state.pickedImage.uri,
            Department: this.state.department
        }, () => this.setState({message: '', pickedImage: '', department: ''}));

        Alert.alert("Success", "Complaint Sent Successfully")
    }
    takePhoto() {
        ImagePicker.openCamera({
            cropping: true,
            avoidEmptySpaceAroundImage: true,
            hideBottomControls: true,
            freeStyleCropEnabled: true,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType: 'photo',
        }).then(image => {
            console.log('received image', image);
            console.log(image.uri);
            this.setState({
                pickedImage: {uri: image.path }

            });
        }).catch(e => console.log("Camera Error: No Image Selected"));
    }
    renderImage= () => {
        if (this.state.pickedImage != null){
            return (
                    <Image source={this.state.pickedImage} style={styles.previewImage} />

            );
        }

    };

    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>

                    <TouchableOpacity onPress={this.addItem}>
                        <Text style={{fontWeight: "500"}}>Post</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.msgBox}>
                    <TextInput placeholder='Type your complaint here'
                               value={this.state.message}
                               onChangeText={(text) => this.setState({message: text})}
                               style={styles.txtInput}
                                numberOfLines={5}
                                multiline={true}/>

                </View>
                <MenuProvider style={{flexDirection: "column", padding: 30, marginHorizontal: 80}}>
                    <Menu onSelect={value => this.setState({department: value})}>
                        <MenuTrigger style={styles.menuTrigger}>
                            <Text style={styles.headerText}>Selected Department: { this.state.department}</Text>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption value={"Health"}>
                                <Text style={styles.menuContent}>Health</Text>
                            </MenuOption>
                            <MenuOption value={"Police"}>
                                <Text style={styles.menuContent}>Police</Text>
                            </MenuOption>
                            <MenuOption value={"Transit"}>
                                <Text style={styles.menuContent}>Transit</Text>
                            </MenuOption>
                            <MenuOption value={"Waste Management"}>
                                <Text style={styles.menuContent}>Waste Management</Text>
                            </MenuOption>
                        </MenuOptions>

                    </Menu>
                </MenuProvider>


                <TouchableOpacity style={styles.button} onPress={() => this.takePhoto()} >
                    <Text style={{textAlign: "center", color: "#FFF", fontWeight: "500", fontSize: 20}}>Take Photo</Text>
                </TouchableOpacity>
                {this.renderImage()}

            </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    header:{
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1
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
    },
    previewImage: {
        height: 180,
        width: 300,
        marginHorizontal: 30
    },
    button:{
        marginHorizontal:100,
        backgroundColor: "#b38e3e",
        borderRadius: 8,
        padding: 10,
        width: 150,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100

    },
    menuTrigger:{
        borderWidth: 1,
        borderColor: "#b38e3e",
        alignItems: "center",
        width: 170,
        marginHorizontal: -20,
        height: 50
    },
    headerText:{
        fontSize: 16
    },
    menuContent:{
        height: 20
    }
});
