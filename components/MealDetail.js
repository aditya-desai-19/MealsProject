import { View,Text } from "react-native";
import styles from "./styles/MealDetailStyles";

const MealDetail = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.description}>{props.duration}</Text>
            <Text style={styles.description}>{props.affordability}</Text>
            <Text style={styles.description}>{props.complexity}</Text>
        </View>
    )
}

export default MealDetail;