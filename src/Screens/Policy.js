import React, { useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, Image, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";
import styles from "../Styles/styles";
import { useNavigation } from "@react-navigation/native";

const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;


const Policy = () => {
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
            <ScrollView>
                <View style={[styles.window]}>
                    {/* <Text style={styles.TextStyle}>This is Login</Text> */}
                    <Image
                        source={require('./../../assets/logoUV.png')}
                        style={[styles.Logo]}
                    />
                    <Text style={[styles.TextStyle, { alignSelf: "flex-start", margin: mobileW * .05 }]}>Policies Regarding Child Labour</Text>
                    <Text style={[styles.TextStylepolicy]} >Legislative Policy adopted by Government for eradication of Child Labour following
                        steps have been taken </Text>
                    <Text style={[styles.TextStylepolicy]}>Prevention:</Text>
                    <Text style={[styles.normalTextStylepolicy]}>Child Labour (Prohibition & Regulation) Act, 1986 prohibits employment of children
                        below the age of 14 years in 18 occupations and 65 processes. </Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Policy;