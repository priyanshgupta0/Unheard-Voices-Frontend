import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/styles";


const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;


const Splash = () => {
    navigator = useNavigation();

    setTimeout(() => {
        goToLogin();
    }, 3000)

    const goToLogin = () => {
        navigator.navigate('Login');
    }
    return (
        <SafeAreaView style={styles.background}>
            <View >
                <Image
                    source={require('./../../assets/logoUV.png')}
                    style={[styles.Logo, { marginTop: mobileW * .7, }]}
                />
            </View>
        </SafeAreaView>
    )
}


export default Splash;