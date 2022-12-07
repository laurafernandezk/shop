import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Order } from "../screens"

const Stack = createNativeStackNavigator()

const OrderNavigator = () => {
    return (<Stack.Navigator initialRouteName="Order" screenOptions={{
        headerStyle: { backgroundColor: colors.backgroundPrimaryDark },
        headerTitleAlign: "center",

        headerTintColor: colors.textLight,
        animation: "slide_from_bottom",
        presentation: "card",
        headerBackTitle: ""
    }}>
        <Stack.Screen name="Order" component={Order}/> 

    </Stack.Navigator>

    )
}

export default OrderNavigator
