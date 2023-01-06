import { ActivityIndicator, View } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from './styles';
import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store';
import { init } from '../src/db/index';

export default function App() {
  const [loaded] = useFonts({
    'monserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'monserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!loaded) {
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0F310C" />
    </View>;
  }

  init()
    .then(() =>{
      console.log('Initialized database')
    })
    .catch((error) =>{
      console.log(error)
      console.log("Initializing database failed")
    })

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
