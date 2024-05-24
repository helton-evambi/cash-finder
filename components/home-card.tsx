import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import React, { SVGProps } from 'react'
import { colorPallet } from '../constants/colors'
import { NavigationProp, useNavigation } from '@react-navigation/native'

type Props = {
  title: string
  total: number
  icon: any
  iconName?: string
} & TouchableOpacityProps

type RootStackParamList = {
  Home: undefined
  Login: undefined
  Contribuir: undefined
  Pesquisar: undefined
  AtmList: undefined
}

const HomeCard = ({ title, total, icon: Icon, iconName }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <TouchableOpacity
      style={styles.body}
      onPress={() => navigation.navigate('AtmList')}
    >
      <Icon name={iconName} color={colorPallet.primaryLight} size={40} />
      <Text
        style={{
          color: colorPallet.primaryLight,
          fontSize: 14,
          fontWeight: 600,
          textAlign: 'center',
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
