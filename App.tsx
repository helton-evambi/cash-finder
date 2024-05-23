import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Logo } from './assets'
import { CustomButton, CustomInput } from './components'
import AtmCard from './components/atm-card'
import { NavigationContainer } from '@react-navigation/native'
import Login from './screen/auth/login'
import Home from './screen/home'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
