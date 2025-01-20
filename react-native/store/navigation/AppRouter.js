import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from '../components/WelcomePage';
import HomagePage from '../pages/HomagePage';


const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen name='welcome' component={WelcomePage} />
        <Stack.Screen name ="home" component={HomagePage}/> 
      </Stack.Navigator>
     </NavigationContainer>
  )
}

export default AppRouter