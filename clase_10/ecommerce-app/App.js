import { ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });


  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return(
    <TabNavigator />
  )
}

