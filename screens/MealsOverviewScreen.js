import { View, Text, FlatList } from "react-native";
import styles from "../components/styles/MealsOverviewStyles";
import { MEALS } from "../data/dummydata";
import MealItem from "../components/MealItem";

//route is a prop passed from CategoriesScreen  
const MealsOverViewScreen = ({route}) => {
    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem) => {
        return  mealItem.categoryIds.indexOf(catId) >= 0; 
    })

    const renderMeals = (itemData) => {
        return(
            <MealItem 
                title={itemData.item.title} 
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                renderItem={renderMeals}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default MealsOverViewScreen;