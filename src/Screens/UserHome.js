import React, { useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, Image, StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";
import styles from "../Styles/styles";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import UserProfile from "./UserProfile";
import LComplaint from "./lodgeComplaint";
import Policy from "./Policy";

const Tab = createBottomTabNavigator();
const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;

const UserHome = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="LComplaint" component={LComplaint} options={{
                headerShown: false, title: "Report", tabBarIcon: () => {
                    return (
                        <MaterialIcons name='report-problem' size={25} color="black" />
                    );
                }
            }} />
            <Tab.Screen name="Policy" component={Policy} options={{
                headerShown: false, title: "Policy", tabBarIcon: () => {
                    return (
                        <MaterialIcons name='policy' size={25} color="black" />
                    );
                }
            }} />
            <Tab.Screen name="UserProfile" component={UserProfile} options={{
                headerShown: false, title: "User", tabBarIcon: () => {
                    return (
                        <FontAwesome name='user-circle-o' size={25} color="black" />
                    );
                }
            }} />
        </Tab.Navigator>
    );
}

export default UserHome;