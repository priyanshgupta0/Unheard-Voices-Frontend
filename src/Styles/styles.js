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
        fontSize: mobileW * .075,
        margin: mobileW * .05
    },
    window: {
        width: mobileW,
        height: mobileh,
        backgroundColor: 'white',
    },
    Logo: {
        width: mobileW * .8,
        height: mobileW * .3,
        alignSelf: "center",
        margin: mobileW * .05,
    },
    Box: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: mobileW * .005,
        marginLeft: mobileW * .1,
        marginRight: mobileW * .1,
        marginTop: mobileW * .05,
    },
})

export default styles;