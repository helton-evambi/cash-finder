import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Logo } from './assets'
import { CustomButton, CustomInput } from './components'
import AtmCard from './components/atm-card'
import { NavigationContainer } from '@react-navigation/native'
import Login from './screen/auth/login'
import Home from './screen/home'
import Contribuir from './screen/contribuir/contribuir'
import Pesquisar from './screen/pesquisa/pesquisa'
import AtmsList from './screen/atms-list/atm-list'

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
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contribuir"
          component={Contribuir}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pesquisar"
          component={Pesquisar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AtmList"
          component={AtmsList}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
