import { useState } from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/login';
import ClientList from './components/clients/clientList';
import ClientDetails from './components/clients/clientDetails';
import AddClient from './components/clients/addClient';

export default function App() {
  
  const Stack = createNativeStackNavigator()

  return (
    <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Client-List' component={ClientList}/>
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
