import { useLayoutEffect } from "react";
import { Text, Image, ScrollView} from "react-native";
import { MEALS } from "../data/dummydata";
import MealDetail from "../components/MealDetail";
import styles from "../components/styles/MealDetailsScreenStyles";
import IconButton from "../components/IconButton";

const MealDetailsScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const handleButtonPress = () => {
        console.log("Pressed");
    }
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onClick={handleButtonPress} />;
            }
        })
    },[navigation, handleButtonPress]);

    return(
        <ScrollView style={styles.sv}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetail 
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
            />
            <Text style={styles.ingreditentTitle}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => <Text id={ingredient} style={styles.ingredients}>{ingredient}</Text>)}
            <Text style={styles.stepsTitle}>Steps</Text>
            {selectedMeal.steps.map((step) => <Text id={step} style={styles.steps}>{step}</Text>)}
        </ScrollView>
    )
}

export default MealDetailsScreen;