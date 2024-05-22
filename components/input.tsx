import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import { colorPallet } from '../constants/colors'

type Props = TextInputProps

export const CustomInput: React.FC<Props> = ({ placeholder, ...props }) => {
  return (
    <TextInput
      style={styles.container}
      {...props}
      placeholder={placeholder}
      placeholderTextColor={colorPallet.secondary}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    paddingHorizontal: 8,
    backgroundColor: colorPallet.primaryLight,
    borderColor: colorPallet.secondary,
    borderWidth: 1,
    borderRadius: 8,
  },
})
