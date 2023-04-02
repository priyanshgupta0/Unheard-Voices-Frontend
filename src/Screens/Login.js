import React, { useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, Image, StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";
import styles from "../Styles/styles";


const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;

const Login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Hide, setHide] = useState(true);

    const HideButton = () => {
        setHide(!Hide);
    }
    
    return (
        <SafeAreaView style={styles.background}>
            <View style={[styles.window]}>
                {/* <Text style={styles.TextStyle}>This is Login</Text> */}
                <Image
                    source={require('./../../assets/logo.png')}
                    style={[styles.Logo]}
                />
                <Text style={[styles.TextStyle, { alignSelf: "flex-start", margin: mobileW * .05 }]}>Login</Text>
                <View style={[styles.Box]}>
                    <Image
                        source={require('./../../assets/email.png')}
                        style={{ width: mobileW * .08, height: mobileW * .08, margin: mobileW * .02, flex: 1 }}
                    />
                    <TextInput
                        color={'black'}
                        placeholderTextColor={'black'}
                        value={Email}
                        onChangeText={(Email) => setEmail(Email)}
                        placeholder={'Enter Your Email'}
                        style={{
                            flex: 8
                        }} />
                </View>
                <View style={[styles.Box]}>
                    <Image
                        source={require('./../../assets/padlock.png')}
                        style={{ width: mobileW * .08, height: mobileW * .08, margin: mobileW * .02, flex: 1 }}
                    />
                    <TextInput
                        color={'black'}
                        placeholderTextColor={'black'}
                        value={Password}
                        secureTextEntry={Hide}
                        onChangeText={(Password) => setPassword(Password)}
                        placeholder={'Enter Your Password'}
                        style={{
                            flex: 7
                        }} />
                    <TouchableOpacity onPress={HideButton}><Image
                        source={require('./../../assets/hide.png')}
                        style={{ width: mobileW * .08, height: mobileW * .08, margin: mobileW * .02, flex: 1 }}
                    /></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default Login;