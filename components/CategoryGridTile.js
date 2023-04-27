import { View, Text, Pressable} from "react-native";
import styles from "./styles/CategoryGridTileStyles"

const CategoryGridTile = (props) => {
    return(
        <View style={styles.container}>
            <Pressable 
                android_ripple={{color: "#ccc"}} 
                style={(pressed) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress = {props.onClick}
            >
                <View style={[styles.innerContainer, {backgroundColor: props.color}]}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;