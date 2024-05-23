import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import React, { SVGProps } from 'react'
import { colorPallet } from '../constants/colors'

type Props = {
  title: string
  total: number
  icon: any
} & TouchableOpacityProps

const HomeCard = ({ title, total, icon: Icon }: Props) => {
  return (
    <TouchableOpacity style={styles.body}>
      <Icon color={colorPallet.primaryLight} size={40} />
      <Text
        style={{
          color: colorPallet.primaryLight,
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: colorPallet.primaryLight,
          fontSize: 20,
          fontWeight: 900,
        }}
      >
        {total}
      </Text>
    </TouchableOpacity>
  )
}

export default HomeCard

const styles = StyleSheet.create({
  body: {
    width: '48%',
    height: 155,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderRadius: 8,
    borderColor: '#00000',
    borderWidth: 1,
    backgroundColor: colorPallet.primary,
    paddingHorizontal: 24,
    marginTop: 12,
  },
})
