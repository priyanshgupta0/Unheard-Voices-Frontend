import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, Image, StyleSheet, Text, PermissionsAndroid, TouchableOpacity, TextInput, View } from "react-native";
import styles from "../Styles/styles";
import { useNavigation } from "@react-navigation/native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;


const L2Complaint = () => {
    navigator = useNavigation();
    const [ImageUri, setImageUri] = useState('./../../assets/logoUV.png');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Name, setName] = useState('');
    const [Hide, setHide] = useState(true);

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const gotonextstep = () => {
        navigator.navigate('UserHome');
    }

    const options = {
        title: 'Pick an Image',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    const HandelCamera = () => {
        requestCameraPermission();
        let options = {
            storageOptions: {
                path: 'images',
                skipBackup: true,
            },
        };
        launchCamera(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User Cancled');
            } else if (response.error) {
                console.log('ReImage Picker Error = ', response.error);
            } else {
                const source = { uri: response.uri }
                console.log('response', JSON.stringify(response));
                this.setState({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri,
                    // setImageUri('data:image/jpeg;base64')
                });
            }
        })
    }

    const HandelDevice = () => {
        launchImageLibrary(options, (response) => {
            // Same code as in above section!
            let source = { uri: response.data };
            setImageUri(source);
            if (response.data) {
                if (clickedPage == 'report') {
                    this.props.addressActions.addImage({ res: response.data });
                } else {
                    this.props.accountActions.addImage({ res: response.data });
                }
            }

        });
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
                <TouchableOpacity style={[styles.LoignButton, { width: mobileW * .4 }]} onPress={() => { HandelCamera() }}>
                    <Text style={[styles.LoignButtonTextStyle]}>Open Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.LoignButton, { width: mobileW * .4 }]} onPress={() => { HandelDevice() }}>
                    <Text style={[styles.LoignButtonTextStyle]}>From Device</Text>
                </TouchableOpacity>

                <Image
                    source={require('./../../assets/null.png')}
                    style={{
                        height: 100,
                        width: 100,
                        borderWidth: 2,
                        borderColor: 'black',
                        alignSelf: "center"
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default L2Complaint;