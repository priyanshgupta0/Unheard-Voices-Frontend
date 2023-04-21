import React, { useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, Image, StyleSheet, Text, TouchableOpacity, TextInput, View, Alert } from "react-native";
import styles from "../Styles/styles";
import { useNavigation } from "@react-navigation/native";

const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;

const Login = () => {

    navigator = useNavigation();


    let url = `http://10.0.2.2:8080/auth/login`;
    const handelLoginUser = () => {
        fetch(url, {
            method: 'POST',
            headers: {
                // Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: Email,
                password: Password
            })
        })
            .then((Response) => Response.json())
            .then((json) => {
                console.log(json.token);
                console.log(json.userId);
                console.log(json.message);
                if (json.token) {
                    goToUserHome();
                }
                if (json.message) {
                    if (Email == '') {
                        setEResult('* Email can not be empty')
                    } else {
                        setEResult('')
                    }
                    if (Password == '') {
                        setPResult('* Password can not be empty')
                    } else {
                        setPResult('* Invalid Email or Password')
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }


    const goToUserReg = () => {
        navigator.navigate('UserReg');
    }
    const goToNgoReg = () => {
        navigator.navigate('NgoReg');
    }
    const goToUserHome = () => {
        navigator.navigate('UserHome');
    }

    const [Email, setEmail] = useState('');
    const [EResult, setEResult] = useState('');
    const [Password, setPassword] = useState('');
    const [PResult, setPResult] = useState('');
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
                <Text style={[styles.Warning]}>{EResult}</Text>
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
                <Text style={[styles.Warning]}>{PResult}</Text>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', marginLeft: mobileW * .1,
                    marginRight: mobileW * .1,
                }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    <View>
                        <Text style={[styles.TextStylenormal]}>Login as</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </View>
                <View style={{
                    flexDirection: "row", alignItems: "center", marginLeft: mobileW * .1,
                    marginRight: mobileW * .1, alignSelf: "center",
                }}>
                    <TouchableOpacity style={[styles.LoignButton]} onPress={() => { handelLoginUser() }}>
                        <Text style={[styles.LoignButtonTextStyle]}>User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.LoignButton]} onPress={() => { }}>
                        <Text style={[styles.LoignButtonTextStyle]}>NGO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.LoignButton]} onPress={() => { }}>
                        <Text style={[styles.LoignButtonTextStyle]}>Admin</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', marginLeft: mobileW * .1,
                    marginRight: mobileW * .1,
                }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    <View>
                        <Text style={[styles.TextStylenormal]}>Register as</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </View>
                <View style={{
                    flexDirection: "row", alignItems: "center", marginLeft: mobileW * .1,
                    marginRight: mobileW * .1, alignSelf: "center",
                }}>
                    <TouchableOpacity style={[styles.LoignButton]} onPress={() => goToUserReg()}>
                        <Text style={[styles.LoignButtonTextStyle]}>User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.LoignButton]} onPress={() => goToNgoReg()}>
                        <Text style={[styles.LoignButtonTextStyle]}>NGO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default Login;