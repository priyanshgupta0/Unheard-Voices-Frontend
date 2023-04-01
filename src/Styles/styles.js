import { Dimensions, StyleSheet } from "react-native";

const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1,
    },
    TextStyle: {
        color: 'black',
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20,
        margin: mobileW * .05
    },
})

export default styles;