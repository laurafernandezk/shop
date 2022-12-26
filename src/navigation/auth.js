import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AuthSingIn, AuthSingUp, Home} from "../screens"

const Stack = createNativeStackNavigator();

const AuthNavigator =()=>{
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name= "AuthSingUp" component={AuthSingUp}/>
            <Stack.Screen name= "AuthSingIn" component={AuthSingIn}/>
        </Stack.Navigator>
    )
}

export default AuthNavigator;