
import { ActivityIndicator,View } from 'react-native';
import { useFonts } from 'expo-font';
import {styles} from "./styles"
import AppNavigator from './navigation';

export default function App() {

  const [loaded]=useFonts({
    "monserrat-regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "monserrat-bold":require("../assets/fonts/Montserrat-Bold.ttf")
  })

  if(!loaded){
    <View style={styles.container}>
    <ActivityIndicator size="large" color="#0F310C"/>
    </View>
  }
  return (
   <AppNavigator/>

  );
}


