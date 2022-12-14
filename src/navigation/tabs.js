import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Cart, Order, Catalog } from '../screens';
import ShopNavigator from './shop';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/themes/colors';
import { useSelector } from 'react-redux';
import { sumItems } from '../utils/functions';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerTitleStyle: {fontFamily: "monserrat-bold"},
        tabBarLabelStyle: { size: 12, fontFamily: 'monserrat-regular', color: colors.textDark },
        tabBarActiveTintColor: colors.textDark,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          headerShown:false,
          title: 'Shop',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={colors.textDark} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={Cart}
        options={{
          title: 'Cart',
          headerShown: true,
          headerStyle: { backgroundColor: colors.backgroundPrimaryDark },
          headerTitleAlign: 'center',
           headerTintColor: colors.textLight,
          animation: 'slide_from_bottom',
          presentation: 'card',
          headerBackTitle: '',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={24} color={colors.textDark} />
          ),
          tabBarBadge: sumItems(cart) === 0 ? null : sumItems(cart),
          tabBarBadgeStyle: { backgroundColor: colors.textDark },
        }}
      />
      <BottomTab.Screen
        name="OrderTab"
        component={Order}
        options={{
          title: 'Orders',
          headerShown: true,
          headerStyle: { backgroundColor: colors.backgroundPrimaryDark,  },
          headerTitleAlign: 'center',
           headerTintColor: colors.textLight,
          animation: 'slide_from_bottom',
          presentation: 'card',
          headerBackTitle: '',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray-full' : 'file-tray-full-outline'}
              size={24}
              color={colors.textDark}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CatalogTab"
        component={Catalog}
        options={{
          title: 'Catalog',
          headerShown: true,
          headerStyle: { backgroundColor: colors.backgroundPrimaryDark} ,
          headerTitleAlign: 'center',
           headerTintColor: colors.textLight,
          animation: 'slide_from_bottom',
          presentation: 'card',
          headerBackTitle: '',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'images' : 'images-outline'}
              size={24}
              color={colors.textDark}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
