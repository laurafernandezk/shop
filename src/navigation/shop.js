import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../constants/themes/colors";
import { Categories, Products, Product, Home } from "../screens"

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: { backgroundColor: colors.backgroundPrimaryDark },
            headerTitleAlign: "center",
        
            headerTintColor: colors.textLight,
            animation: "slide_from_bottom",
            presentation: "card",
            headerBackTitle: ""

        }} >
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Products" component={Products} options={({route})=>({title: route.params.title})}/>
            <Stack.Screen name="Product" component={Product}  options = {({route})=>({title: route.params.title, productId:route.params.id})}/>

        </Stack.Navigator>
    )
}

export default ShopNavigator