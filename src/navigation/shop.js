import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../constants/themes/colors';
import { Categories, Products, Product} from '../screens';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: colors.backgroundPrimaryDark },
        headerTitleStyle: {fontFamily: "monserrat-bold"},
        headerTitleAlign: 'center',
        headerTintColor: colors.textLight,
        animation: 'slide_from_bottom',
        presentation: 'card',
        headerBackTitle: '',
      }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
