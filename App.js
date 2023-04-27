import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createStackNavigator();

const App = () => {
    return(
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Categories" component={CategoriesScreen} />
                    <Stack.Screen name="MealsOverviewScreen" component={MealsOverviewScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App;