import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, Image, StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";
import styles from "../Styles/styles";
import { useNavigation } from "@react-navigation/native";
import Geolocation from '@react-native-community/geolocation';


const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;


const LComplaint = ({ route }) => {
    navigator = useNavigation();

    const [long, setlong] = useState('');
    const [lat, setlat] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Name, setName] = useState('');
    const [Hide, setHide] = useState(true);

    const HideButton = () => {
        setHide(!Hide);
    }

    const gotonextstep = () => {
        navigator.navigate('L2page', { long: long, lat: lat });
    }

    const CurrentPosition = () => {
        Geolocation.getCurrentPosition(info => {
            console.log(info.coords.latitude);
            console.log(info.coords.longitude);
            setlong(info.coords.longitude);
            setlat(info.coords.latitude);
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
                <Text style={[styles.TextStyle, { alignSelf: "center", margin: mobileW * .05 }]}>Report Complaint</Text>
                <TouchableOpacity style={[styles.LoignButton, { width: mobileW * .4 }]} onPress={() => { CurrentPosition() }}>
                    <Text style={[styles.LoignButtonTextStyle]}>Get Location</Text>
                </TouchableOpacity>
                <Text style={[styles.TextStylenormal]}>Your Current Cordiantes</Text>
                <Text style={[styles.TextStylenormal]}>Longitude : {long}</Text>
                <Text style={[styles.TextStylenormal]}>Latitude : {lat}</Text>
                {
                    long !== '' ? <TouchableOpacity style={[styles.LoignButton, { width: mobileW * .3 }]} onPress={() => { gotonextstep() }}>
                        <Text style={[styles.LoignButtonTextStyle]}>Next</Text>
                    </TouchableOpacity> : null
                }
            </View>
        </SafeAreaView>
    )
}

export default LComplaint;