import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles/MealsItemStyles";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetail";

const MealItem = (props) => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('MealDetailsScreen', {
            mealId: props.id
        });
    }

    const dur = props.duration;
    const aff = props.affordability;
    const com = props.complexity;

    return(
        <View style={styles.container}>
            <Pressable onPress={handlePress} android_ripple={{color: "#F0F0F0"}}>
                <Image source={{uri: props.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{props.title}</Text>
                <MealDetail 
                    duration={dur}
                    affordability={aff}
                    complexity={com}
                />
            </Pressable>
        </View>
    )
}

export default MealItem;