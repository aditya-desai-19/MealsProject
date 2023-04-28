import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    sv: {
        backgroundColor: "#ECF2FF",
        // marginHorizontal:20
    },
    image: {
        height: 300,
        width: 300,
        margin: 20,
        borderRadius: 20,
        alignSelf: "center"
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    },
    ingreditentTitle: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20
    },
    ingredients: {
        height: 20,
        width: 300,
        borderRadius: 20,
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
        margin: 5,
        backgroundColor: "#95BDFF",
        justifyContent: "center",
        alignSelf: "center",
        color: "white"
    },
    stepsTitle: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20
    },
    steps: {
        height: 30,
        width: 300,
        borderRadius: 20,
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
        margin: 5,
        backgroundColor: "#95BDFF",
        justifyContent: "center",
        alignSelf: "center",
        color: "white"
    }
});

export default styles;