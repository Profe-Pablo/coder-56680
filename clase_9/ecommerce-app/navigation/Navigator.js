import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Categories from '../screens/Categories';
import ProductsByCategory from '../screens/ProductsByCategory';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Categorias"
                    component = {Categories}
                />
                <Stack.Screen
                    name="Productos"
                    component = {ProductsByCategory}
                />
                <Stack.Screen
                    name="Detalles"
                    component = {ProductDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator