import React, { useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "../Styles/styles";


const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;

const Login = () => {
    return (
        <SafeAreaView style={styles.background}>

            <Text style={styles.TextStyle}>This is Login</Text>

        </SafeAreaView>
    )
}


export default Login;