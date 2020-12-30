import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import {Camera} from 'react-native-camera'
import Button from 'react-native-simple-button'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        width: 200,
        height: 200,
        backgroundColor: 'gray',
    }
})

class App extends React.Component {
    getInitialState () {
        return {
            image:null,
        };
    }
    capturePhoto() {
        var options = {
            quality: 50,
            allowEdit: true,
            destinationType: {Camera.DestinationType.DATA_URL},
        };
        Camera.getPicture((imageData) => {
            this.setState({image: {uri:'data:image/jpeg;base64,'+imageData}});
        },options);
    }
    capturePhotoEdit() {
        var options = {
            quality: 50,
            allowEdit: true,
            destinationType: Camera.DestinationType.DATA_URL,
        };
        Camera.getPicture((imageData) => {
            this.setState({image: {uri:'data:image/jpeg;base64,'+imageData}});
        }, options);
    }
    getPhoto(source) {
        var options = {
            quality: 50,
            allowEdit: true,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: source,
            encodingType: Camera.EncodingType.PNG,
        };
        Camera.getPicture((imageData) => {
            this.setState({image: {uri:'data:image/png;base64,'+imageData}});
        }, (error) => {
            console.log(error);
        }, options);
    }
    render () {
        return (
            <View style={styles.container}>
                <Button onPress={this.capturePhoto}>
                    Capture Photo
                </Button>
                <Button onPress={this.capturePhotoEdit}>
                    Capture Editable Photo
                </Button>
                <Button onPress={this.getPhoto.bind(null, Camera.PictureSourceType.PHOTOLIBRARY)}>
                    From Photo Library
                </Button>
                <Button onPress={this.getPhoto.bind(null, Camera.PictureSourceType.SAVEDPHOTOALBUM)}>
                    From Photo Album Editable
                </Button>
                <Image
                    resizeMode='stretch'
                    source={this.state.image}
                    style={styles.image}/>
            </View>
        );
    }
}

export default App
