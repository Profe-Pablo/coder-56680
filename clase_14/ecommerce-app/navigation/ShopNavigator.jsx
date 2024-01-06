import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Categories from '../screens/Categories';
import ProductsByCategory from '../screens/ProductsByCategory';
import ProductDetail from '../screens/ProductDetail';
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
            <Stack.Navigator
                initialRouteName="Categorías"
                screenOptions={
                    ({ navigation, route }) => ({
                        header: () => <Header title={route.name} navigation={navigation}/>,
                        
                    })
                }
            >
                <Stack.Screen
                    name="Categorías"
                    component={Categories}
                />
                <Stack.Screen
                    name="Productos"
                    component={ProductsByCategory}
                />
                <Stack.Screen
                    name="Detalles"
                    component={ProductDetail}
                />
            </Stack.Navigator>
    )
}

export default ShopNavigator