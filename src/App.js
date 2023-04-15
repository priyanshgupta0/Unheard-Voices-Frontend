import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import UserReg from './Screens/User_Reg';
import NgoReg from './Screens/NgoReg';
import UserHome from './Screens/UserHome';
// import { AsyncStorageStatic } from '@react-native-async-storage/async-storage'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="UserReg"
          component={UserReg}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="NgoReg"
          component={NgoReg}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="UserHome"
          component={UserHome}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;