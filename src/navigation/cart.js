import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens"

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return (<Stack.Navigator initialRouteName="Cart" screenOptions={{
        headerStyle: { backgroundColor: colors.backgroundPrimaryDark },
        headerTitleAlign: "center",

        headerTintColor: colors.textLight,
        animation: "slide_from_bottom",
        presentation: "card",
        headerBackTitle: ""
    }}>
        <Stack.Screen name="Cart" component={Cart}/> 

    </Stack.Navigator>

    )
}

export default CartNavigator
