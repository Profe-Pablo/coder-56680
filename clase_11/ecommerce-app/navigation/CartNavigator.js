import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
            <Stack.Navigator
                initialRouteName="Carrito"
                screenOptions={
                    ({ navigation, route }) => ({
                        header: () => <Header title={route.name} navigation={navigation}/>,
                        
                    })
                }
            >
                <Stack.Screen
                    name="Carrito"
                    component={Cart}
                />
            </Stack.Navigator>
    )
}

export default CartNavigator

