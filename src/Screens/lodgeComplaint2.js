import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, Image, StyleSheet, Text, PermissionsAndroid, TouchableOpacity, TextInput, View } from "react-native";
import styles from "../Styles/styles";
import { useNavigation } from "@react-navigation/native";
import { launchCamera } from 'react-native-image-picker';

const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;


const L2Complaint = () => {
    navigator = useNavigation();
    const [ImageUri, setImageUri] = useState('./../../assets/logoUV.png');
    const [cameraPhoto, setcameraPhoto] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Name, setName] = useState('');
    const [Hide, setHide] = useState(true);



    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
    };

    const openCamera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options);
            setcameraPhoto(result.assets[0].uri);
            console.log(result.assets[0].uri)
        }
    };




    const gotonextstep = () => {
        navigator.navigate('UserHome');
    }

    return (
        <SafeAreaView style={styles.background}>
            <View style={[styles.window]}>
                {/* <Text style={styles.TextStyle}>This is Login</Text> */}
                <Image
                    source={require('./../../assets/logoUV.png')}
                    style={[styles.Logo]}
                />
                <Text style={[styles.TextStyle, { alignSelf: "center", margin: mobileW * .05 }]}>Uplode Child </Text>
                <Text style={[styles.TextStyle, { alignSelf: "center", margin: mobileW * .05 }]}>Labour Image</Text>
                <TouchableOpacity style={[styles.LoignButton, { width: mobileW * .4 }]} onPress={() => { openCamera() }}>
                    <Text style={[styles.LoignButtonTextStyle]}>Open Camera</Text>
                </TouchableOpacity>
                {
                    cameraPhoto !== '' ? <Image
                        source={{ uri: cameraPhoto }}
                        style={{
                            height: 100,
                            width: 100,
                            borderWidth: 2,
                            borderColor: 'black',
                            alignSelf: "center"
                        }}
                    /> : null
                }
                {
                    cameraPhoto !== '' ? <TouchableOpacity style={[styles.LoignButton,]} onPress={() => { gotonextstep() }}>
                        <Text style={[styles.LoignButtonTextStyle]}>Report</Text>
                    </TouchableOpacity>
                        :
                        null
                }
            </View>
        </SafeAreaView>
    )
}

export default L2Complaint;