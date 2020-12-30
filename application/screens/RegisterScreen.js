import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity,  Image, ScrollView} from 'react-native';
import  firebase from 'firebase'
import Ionicons from "react-native-vector-icons/Ionicons"
import ImagePicker from "react-native-image-crop-picker"
export  default class RegisterScreen extends React.Component{
    static navigationOptions={
        headerShown: false
    };
    state= {

        name: "",
        email: "",
        password: "",
        avatar: "",

        errorMessage: null

    };

    handleSignUp= () => {

        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name,
                    avatar: this.state.avatar.uri

                });
            })
            .catch(error => this.setState({errorMessage: error.message}));


    };

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

            this.setState({
                avatar:  {uri: image.path}

            });
            console.log(avatar.toJSON);

        }).catch(e => console.log(e));
    }

    /*
                    <TouchableOpacity style={styles.avatarPlaceholder}> onPress={this.takePhoto()}
                        <Image source={{uri: this.state.user.avatar}} style={styles.avatar}/>
                        <Ionicons
                            name="ios-add"
                            size={46}
                            color="#161F3D"
                            style={{ marginTop: 6, marginLeft: 2}}
                        />
                    </TouchableOpacity>
*//*
    renderImage= () => {
        if (this.state.avatar != null){
            console.log(this.state.avatar);
            return (

                <Image source={this.state.avatar} style={styles.avatar} />
            );
        }

    };
    */
    render() {
        return (
            <ScrollView>
            <View style = {styles.container}>
                <Image source={require("../assets/complaint.png")}
                       style={{marginTop: 10, alignSelf: "center", height: 70, width: 70}}/>

                <View>
                    <Text style={styles.greeting}>Register</Text>

                </View>
                <TouchableOpacity style={styles.avatarPlaceholder} onPress={() => this.takePhoto()}>

                    <Image source={this.state.avatar} style={styles.avatar} />
                    <Ionicons
                        name="ios-add"
                        size={46}
                        color="#161F3D"
                        style={{ marginTop: 6, marginLeft: 2}}
                    />
                </TouchableOpacity>


                <View style={styles.errorMessage}>
                    <Text style={styles.error}>{this.state.errorMessage}</Text>
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Name</Text>
                        <TextInput style={styles.input} onChangeText={name => this.setState({name})} value={this.state.name}/>
                    </View>
                    <View style={{marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput style={styles.input} onChangeText={email => this.setState({email})} value={this.state.email}/>
                    </View>
                    <View style={{marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}/>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp} >
                    <Text style={{textAlign: "center", color: "#FFF", fontWeight: "500", fontSize: 20}}>Sign Up</Text>
                </TouchableOpacity>

            </View>
            </ScrollView>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting:{
        marginTop: 20,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage:{
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
        marginTop: -20
    },
    form:{
        marginBottom: 48,
        marginHorizontal: 30,
        marginTop: -30
    },
    inputTitle:{
        color: "#8A8F9E",
        fontSize: 10,
        textTransform : "uppercase"
    },
    input:{
        borderBottomColor: "#8A8F9E",
        borderRadius: 5,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        backgroundColor: 'rgba(255,255,255,.5)'
    },
    error:{
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    button:{
        marginHorizontal:30,
        backgroundColor: "#b38e3e",
        borderRadius: 8,
        padding: 15,
        height: 52,
        alignItems: "center",
        justifyContent: "center"

    },
    avatarPlaceholder:{
        width: 100,
        height: 100,
        backgroundColor: "#e1e2e6",
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 130,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: 50
    }

});
