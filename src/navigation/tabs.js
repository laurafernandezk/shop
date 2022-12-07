import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cart, Order } from "../screens";
import ShopNavigator from "./shop";
import { Ionicons, f } from "@expo/vector-icons"
import { colors } from "../constants/themes/colors";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottomTab.Navigator initialRouteName="ShopTab" screenOptions={{ headerShown: false, tabBarLabelStyle: { size: 12, fontFamily: "monserrat-regular", color: colors.textDark }, tabBarActiveTintColor: colors.textDark }}>
            <BottomTab.Screen name="ShopTab" component={ShopNavigator} options={{ title: "Shop", tabBarIcon: ({ focused }) => (<Ionicons name={focused ? "home" : "home-outline"} size={24} color={colors.textDark} />) }} />
            <BottomTab.Screen name="CartTab" component={Cart} options={{ title: "Cart", tabBarIcon: ({ focused }) => (<Ionicons name={focused ? "cart" : "cart-outline"} size={24} color={colors.textDark} />) }} />
            <BottomTab.Screen name="OrderTab" component={Order} options={{ title: "Orders", tabBarIcon: ({ focused }) => (<Ionicons name={focused ? "file-tray-full" : "file-tray-full-outline"} size={24} color={colors.textDark} />) }} />

        </BottomTab.Navigator>
    )
}

export default Tabs