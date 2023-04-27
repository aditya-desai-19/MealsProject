import { FlatList, } from "react-native";
import { CATEGORIES } from "../data/dummydata";
import CategoryGridTile from "../components/CategoryGridTile";

//navigation is a prop passed by Stack.Navigator 
const CategoriesScreen = ({navigation}) => {
    
const renderCategoryItem = (itemData) => {
    const PressHandler = () => {
        navigation.navigate("MealsOverviewScreen", {
            categoryId: itemData.item.id
        });
    }

    return (
        <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color} 
            onClick={PressHandler}
        />
    )
};
    return (
            <FlatList
                data={CATEGORIES}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
    )
}

export default CategoriesScreen;