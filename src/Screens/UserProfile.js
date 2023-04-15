import React, { useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, Image, StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";
import styles from "../Styles/styles";
import { useNavigation } from "@react-navigation/native";

const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;


const UserProfile = () => {
    navigator = useNavigation();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Name, setName] = useState('');
    const [Hide, setHide] = useState(true);

    const HideButton = () => {
        setHide(!Hide);
    }

    return (
        <SafeAreaView style={styles.background}>
            <View style={[styles.window]}>
                {/* <Text style={styles.TextStyle}>This is Login</Text> */}
                <Image
                    source={require('./../../assets/logoUV.png')}
                    style={[styles.Logo]}
                />
                <Text style={[styles.TextStyle, { alignSelf: "flex-start", margin: mobileW * .05 }]}>User Profile</Text>


            </View>
        </SafeAreaView>
    )
}

export default UserProfile;