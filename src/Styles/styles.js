import { Dimensions, StyleSheet } from "react-native";

const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1,
    },
    Warning: {
        marginTop: mobileW * .01,
        marginLeft: mobileW * .1,
        marginRight: mobileW * .1,
        color: 'red',
        fontSize: mobileW * .03,
        fontWeight: '400'
    },
    TextStylenormal: {
        color: 'black',
        fontWeight: "600",
        alignSelf: "center",
        fontSize: mobileW * .05,
        margin: mobileW * .05
    },
    TextStyle: {
        marginLeft: mobileW * .1,
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
        borderRadius: 5,
    },
    LoignButton: {
        backgroundColor: '#ff6162',
        height: mobileW * .1,
        width: mobileW * .2,
        borderRadius: mobileW * .05,
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        alignItems: 'center',
        alignSelf: 'center',
        margin: mobileW * .04
    },
    LoignButtonTextStyle: {
        fontWeight: '700',
        fontSize: mobileW * .04,
        color: 'black'
    },
})

export default styles;