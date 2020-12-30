import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Alert,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
//import ImagePicker from "react-native-image-picker";
import ImagePicker from "react-native-image-crop-picker"


export default class App extends Component {

    state = {
        pickedImage: null
    };

    reset = () => {
        if (this.state.pickedImage == null){
            Alert.alert("Error","No Image Selected" )

        }
        this.setState({
            pickedImage: null
        });


    };


    resetHandler = () =>{
        this.reset();
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
            console.log('received image', image);
            this.setState({
                pickedImage: {uri: image.path, width: image.width, height: image.height, mime: image.mime}

            });
        }).catch(e => Alert.alert("Camera Error","Error: No Image Selected"));
    }
    renderImage= () => {
        if (this.state.pickedImage != null){
            return (
                <Image source={this.state.pickedImage} style={styles.previewImage} />
            );
        }

    };

    render() {

        return (
            <View style={[styles.container, styles.horizontal]}>
                <Text style={styles.title}> Picture Application</Text>


                {this.renderImage()}


                <View style={styles.vertical}>

                    <TouchableOpacity style={{backgroundColor:'green',margin:10,padding:10}}
                                      onPress={() => this.takePhoto()}>
                        <Text style={{color:'#fff'}}>Take Picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#049ac5',margin:10,padding:10}}
                                      onPress={() => this.resetHandler()}>
                        <Text style={{color:'#fff'}}>Reset Picture</Text>
                    </TouchableOpacity>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center"
    },


    previewImage: {

        height: 180,
        width: 300
    },

    horizontal: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 10
    },

    title:{
        fontSize: 30,
        justifyContent: 'center'


    },
    vertical: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200,
        backgroundColor: 'gray',
    },
    picture:{
        justifyContent : 'center',
        height: 180,
        width: 300
    }
});
