import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles/MealsItemStyles";

const MealItem = (props) => {

    const handlePress = () => {
        console.log("Clicked");
    }

    return(
        <View style={styles.container}>
            <Pressable onPress={handlePress} android_ripple={{color: "#F0F0F0"}}>
                <Image source={{uri: props.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{props.title}</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{props.duration}</Text>
                    <Text style={styles.description}>{props.affordability}</Text>
                    <Text style={styles.description}>{props.complexity}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;