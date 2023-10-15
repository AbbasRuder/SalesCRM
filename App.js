import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// -components
import Login from './components/login';
import ClientList from './components/clients/clientList';
import ClientDetails from './components/clients/clientDetails';
import AddClient from './components/clients/addClient';
import SplashScreen from './components/splashScreen';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Splash-Screen'>
            <Stack.Screen name='Splash-Screen' component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Client-List' component={ClientList} options={{headerShown: false}}/>
            <Stack.Screen name='Client-Details' component={ClientDetails}/>
            <Stack.Screen name='Add-Client' component={AddClient}/>
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
