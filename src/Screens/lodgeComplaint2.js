import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, Image, StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";
import styles from "../Styles/styles";
import { useNavigation } from "@react-navigation/native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;


const L2Complaint = () => {
    navigator = useNavigation();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Name, setName] = useState('');
    const [Hide, setHide] = useState(true);


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
                <Text style={[styles.TextStyle, { alignSelf: "center", margin: mobileW * .05 }]}>Report Complaint</Text>
                <Text style={[styles.TextStyle, { alignSelf: "center", margin: mobileW * .05 }]}>Second Step</Text>
                <TouchableOpacity style={[styles.LoignButton, { width: mobileW * .4 }]} onPress={() => { }}>
                    <Text style={[styles.LoignButtonTextStyle]}>Get Location</Text>
                </TouchableOpacity>
                <Text style={[styles.TextStylenormal]}>Your Current Cordiantes</Text>
                <TouchableOpacity style={[styles.LoignButton, { width: mobileW * .3 }]} onPress={() => { gotonextstep() }}>
                    <Text style={[styles.LoignButtonTextStyle]}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default L2Complaint;