import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createStackNavigator();

const App = () => {
    return(
        <>
            <NavigationContainer>
                <Stack.Navigator
                    // This is used if we want to apply styling for more than one screen
                    screenOptions={{
                        headerStyle: { backgroundColor: "#19376D"} ,
                        headerTintColor: "white"
                    }}>
                    <Stack.Screen 
                        name="Categories" 
                        component={CategoriesScreen} 
                        // It is used to apply custom styling
                        options={{
                                title: "All Categories"
                        }}
                    />
                    <Stack.Screen 
                        name="MealsOverviewScreen" 
                        component={MealsOverviewScreen} 
                        // setting options dynamically
                        // options={({ route, navigation}) => {
                        //     const catId = route.params.categoryId;
                        //     return{
                        //         title:catId
                        //     }
                        // }}
                    />
                    <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App;