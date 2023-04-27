import { Platform } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        // To see the shadow effect background color is necessary for ios
        backgroundColor: 'white',
        // ios setting
        overflow: Platform.OS === "android" ? 'hidden': null,
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default styles;