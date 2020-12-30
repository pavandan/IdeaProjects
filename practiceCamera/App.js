import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity} from 'react-native'

import CameraComponent from './camera/cameraComponent'

export default class App extends Component {
    takePhoto() {
        <CameraComponent></CameraComponent>
    }
    render() {

        return (
            <View style={[styles.container, styles.horizontal]}>
                <Text style={styles.title}> Picture Application</Text>
                <View style={styles.picture}>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='}}
                    />
                </View>


                <View style={styles.vertical}>

                    <TouchableOpacity style={{backgroundColor:'green',margin:10,padding:10}}
                                      onPress={() => this.takePhoto()}>
                        <Text style={{color:'#fff'}}>Take Picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#049ac5',margin:10,padding:10}}
                                      onPress={() => Alert.alert('Picture Reset')}>
                        <Text style={{color:'#fff'}}>Reset Picture</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center'
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
        justifyContent : 'center'
    }
})
