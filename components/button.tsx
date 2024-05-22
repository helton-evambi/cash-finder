import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'
import React from 'react'
import { colorPallet } from '../constants/colors'

type Props = { title: string } & TouchableOpacityProps

export const CustomButton = ({ title, ...props }: Props) => {
  return (
    <TouchableOpacity style={styles.body} {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorPallet.primary,
    width: '100%',
    paddingVertical: 6,
    borderRadius: 8,
  },
  title: { color: '#FFF', fontWeight: '600' },
})
