import React, {Component } from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {RNCamera} from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob'
export default class componentName extends Component {
    render(){
        return (
            <View style={styles.container}>
                <RNCamera
                    ref = {ref=>{
                    this.camera=ref;
                    }}
                    style = {styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode = {RNCamera.Constants.FlashMode.on}


                >
                </RNCamera>
                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity onPress = {this.takePicture.bind(this)} style = {styles.capture}>
                        <Text style={{fontSize:14}}>
                            Capture
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    takePicture = async ()=>{
        if(this.camera){
            const options = {quality:0.5, base64:true};
            const data = await this.camera.takePictureAsync(options);
            const path = '${RNFetchBlob.fs.dirs.CacheDir}/test.png';
            try{
                RNFetchBlob.fs.writeFile(path.data.base64,'base64');

            }
            catch(error){
                console.log(error.message);
            }
        }
    };
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    capture:{
        flex:0,
        backgroundColor: "#fff",
        borderRadius:5,
        padding:15,
        paddingHorizontal:20,
        alignSelf:'center',
        margin:20
    }

})
