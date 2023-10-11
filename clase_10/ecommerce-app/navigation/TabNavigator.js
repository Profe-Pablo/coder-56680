import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ShopNavigator from "./ShopNavigator"
import CartNavigator from "./CartNavigator"
import { StyleSheet, View } from "react-native"
import { colors } from "../global/colors"
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen 
                name="ShopStack" 
                component={ShopNavigator} 
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <View>  
                                <Entypo name="shop" 
                                    size={24} 
                                    color={focused?"#fff":colors.primaryDeep}
                                />
                            </View>
                        );
                    }
                }}
            />
            <Tab.Screen 
                name="CartStack" 
                component={CartNavigator} 
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <View>  
                                <FontAwesome name="opencart" 
                                    size={24} 
                                    color={focused?"#fff":colors.primaryDeep}
                                />
                            </View>
                        );
                    }
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.primary,
        shadowColor: "#ccc",
        elevation:1,
        position: "absolute",
        bottom:25,
        left:20,
        right:20,
        borderRadius: 20,
        height: 90,
    }
})