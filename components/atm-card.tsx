import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { colorPallet } from '../constants/colors'

type Prop = {
  location: string
}

const AtmCard = ({ location }: Prop) => {
  return (
    <View
      style={{
        backgroundColor: colorPallet.primaryLight,
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 4,
        paddingVertical: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colorPallet.primary,
        width: 80,
      }}
    >
      <Entypo name="location" size={25} color={colorPallet.primary} />

      <Text style={{ fontSize: 12, fontWeight: '500' }}>{location}</Text>
    </View>
  )
}

export default AtmCard

const styles = StyleSheet.create({})
