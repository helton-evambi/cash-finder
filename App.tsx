import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Logo } from './assets'
import { CustomButton, CustomInput } from './components'
import AtmCard from './components/atm-card'

const Login = () => {
  return (
    <SafeAreaView style={styles.body}>
      <AtmCard />
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingTop: 54,
    paddingHorizontal: 24,
  },
})