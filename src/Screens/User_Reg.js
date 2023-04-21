import React, { useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, Image, StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";
import styles from "../Styles/styles";
import { useNavigation } from "@react-navigation/native";


const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;

const UserReg = () => {


    const HandelSignUp = () => {
        let email = Email;
        let password = Password;
        let count = 0;
        let regx = /^([a-z A-Z 0-9 \. -]+)@([a-z A-Z 0-9 -]+).([a-z]{2,20})$/;
        let regy = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (email.match(regx)) {
            setREmail('');
            count++;
        } else if (email == '') {
            setREmail('* E-mail can not be empty');
        } else {
            setREmail('* Invalid E-mail ID');
        }
        if (password.match(regy)) {
            setRPassword('');
            count++;
        } else if (password == '') {
            setRPassword('* Password can not be empty')
        } else {
            setRPassword('* Password must be like Ex: Abc@123$')
        }
        if (Mobile.length == 10) {
            setRMobile('')
            count++;
        } else if (Mobile.length == 0) {
            setRMobile('* Mobile Number can not be empty')
        } else {
            setRMobile('* Enter a valid mobile number')
        }
        if (Name == '') {
            setRName('* Name can not be empty')
        } else if (Name.length < 3) {
            setRName('* Enter a valid name')
        } else {
            setRName('')
            count++;
        }
        if (count == 4) {
            signUpApi();
        }
    }

    navigator = useNavigation();
    let url = `http://10.0.2.2:8080/auth/signup`;
    const signUpApi = () => {
        fetch(url, {
            method: 'POST',
            headers: {
                // Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: Name,
                email: Email,
                password: Password
            })
        })
            .then((Response) => Response.json())
            .then((json) => {
                console.log(json.message);
                console.log(json.userId);
                console.log(json.data);
                if (json.data) {
                    setREmail(json.data[0].msg);
                }
                if (json.userId) {
                    goToLogin();
                }
            })
            .catch((error) => {
                console.log(error);
            })
        // goToUserHome();
    }

    const goToLogin = () => {
        navigator.navigate('Login');
    }

    const [Name, setName] = useState('');
    const [RName, setRName] = useState('');
    const [Email, setEmail] = useState('');
    const [REmail, setREmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [RMobile, setRMobile] = useState('');
    const [Password, setPassword] = useState('');
    const [RPassword, setRPassword] = useState('');
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
                <Text style={[styles.TextStyle, { alignSelf: "flex-start", margin: mobileW * .05 }]}>Register as USER</Text>
                <View style={[styles.Box]}>
                    <Image
                        source={require('./../../assets/user.png')}
                        style={{ width: mobileW * .08, height: mobileW * .08, margin: mobileW * .02, flex: 1 }}
                    />
                    <TextInput
                        color={'black'}
                        placeholderTextColor={'black'}
                        value={Name}
                        onChangeText={(Name) => setName(Name)}
                        placeholder={'Enter Your Name'}
                        style={{
                            flex: 8
                        }} />
                </View>
                <Text style={[styles.Warning]}>{RName}</Text>
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
                <Text style={[styles.Warning]}>{REmail}</Text>
                <View style={[styles.Box]}>
                    <Image
                        source={require('./../../assets/cell.png')}
                        style={{ width: mobileW * .08, height: mobileW * .08, margin: mobileW * .02, flex: 1 }}
                    />
                    <TextInput
                        color={'black'}
                        placeholderTextColor={'black'}
                        value={Mobile}
                        keyboardType="numeric"
                        maxLength={10}
                        onChangeText={(Mobile) => setMobile(Mobile)}
                        placeholder={'Enter Your Mobile No.'}
                        style={{
                            flex: 8
                        }} />
                </View>
                <Text style={[styles.Warning]}>{RMobile}</Text>
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
                <Text style={[styles.Warning]}>{RPassword}</Text>
                <TouchableOpacity style={[styles.LoignButton, { width: mobileW * .4 }]} onPress={() => { HandelSignUp() }}>
                    <Text style={[styles.LoignButtonTextStyle]}>Register Now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default UserReg;