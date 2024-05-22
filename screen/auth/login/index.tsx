import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { CustomButton, CustomInput } from '../../../components'

const Login = () => {
  return (
    <SafeAreaView style={styles.body}>
      <CustomInput placeholder="telefone" />
      <CustomInput placeholder="senha" />
      <CustomButton title="Entrar" />
      <Text>Ainda nao tenho uma conta</Text>
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
