import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import  firebase from 'firebase';
import ImagePicker from "react-native-image-crop-picker";
export default class ProfileScreen extends React.Component{
    static navigationOptions={
        headerShown: false
    };
    state={
        email:"",
        displayName:"",
        avatar: null
    };
    componentDidMount(): void {
        const { email, displayName, avatar} = firebase.auth().currentUser;
        this.setState({email, displayName, avatar});
        console.log(avatar)
    }
    render(){
        return(
            <View style={styles.container}>
                   <View>
                       <View>
                           <Image source={this.state.avatar} />
                       </View>
                       <View>
                           <Text style={styles.inputTitle}>Name: {this.state.displayName} </Text>

                       </View>
                       <View style={{marginTop: 32 }}>
                           <Text style={styles.inputTitle}>Email Address: {this.state.email}</Text>

                       </View>

                       <TouchableOpacity style={styles.button} onPress={() => firebase.auth().signOut()}>
                           <Text style={{textAlign: "center", color: "#FFF", fontWeight: "500", fontSize: 20}}>Logout</Text>
                       </TouchableOpacity>
                   </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    homeContainer:{
        padding: 10,
        borderBottomColor: 'rgba(255,255,255,.7)',
        borderBottomWidth: 5
    },
    avatarPlaceholder:{
        width: 100,
        height: 100,
        backgroundColor: "#e1e2e6",
        borderRadius: 50,
        justifyContent: "center",
        marginTop:-300,
        alignItems: "center"
    },
    avatar: {
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: 50
    },
    inputTitle:{
        color: "#8A8F9E",
        fontSize: 20,
        textTransform : "uppercase"
    },
    button:{
        marginHorizontal:80,
        marginTop: 70,
        backgroundColor: "#b38e3e",
        borderRadius: 8,
        padding: 15,
        height: 40,
        width: 150,
        alignItems: "center",
        justifyContent: "center"

    }
});
