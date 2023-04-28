import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin:10,
        borderRadius: 20,
        backgroundColor: "#B7B7B7",
        overflow: "hidden"
    },
    title:{
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    image: {
        height: 200,
        borderRadius: 2
    }
});

export default styles;