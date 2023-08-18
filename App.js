import { useState } from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/login';
import Clients from './components/clients';

export default function App() {
  
  const Stack = createNativeStackNavigator()

  return (
    <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Clients' component={Clients}/>
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
