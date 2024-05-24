import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import React from 'react'
import { colorPallet } from '../constants/colors'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'

type Props = {
  title: string
  location: string
  money: boolean
  paper: boolean
  system: boolean
} & TouchableOpacityProps

const AtmCardList = ({ title, location, money, paper, system }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <View style={{ width: '100%', flexDirection: 'row', gap: 5 }}>
      <TouchableOpacity style={styles.card}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <MaterialCommunityIcons
              name="bank-outline"
              size={16}
              color={colorPallet.primaryLight}
            />
            <Text
              style={{
                color: colorPallet.primaryLight,
                fontSize: 16,
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              {title}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Entypo
              name="location"
              size={16}
              color={colorPallet.primaryLight}
            />
            <Text
              style={{
                color: colorPallet.primaryLight,
                fontSize: 16,
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              {location}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <FontAwesome
            name="money"
            color={money ? colorPallet.primaryLight : '#808080'}
            size={30}
          />
          <Ionicons
            name="newspaper-outline"
            color={paper ? colorPallet.primaryLight : '#808080'}
            size={30}
          />
          <Ionicons
            name="close-circle-outline"
            color={!system ? colorPallet.primaryLight : '#808080'}
            size={30}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Contribuir')}
      >
        <Entypo
          name="chevron-right"
          size={24}
          color={colorPallet.primaryLight}
        />
      </TouchableOpacity>
    </View>
  )
}

export default AtmCardList

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '80%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderRadius: 8,
    borderColor: '#00000',
    borderWidth: 1,
    backgroundColor: colorPallet.primary,
    paddingHorizontal: 24,
    marginTop: 12,
  },

  button: {
    width: '20%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    borderColor: '#00000',
    borderWidth: 1,
    backgroundColor: colorPallet.primary,
    paddingHorizontal: 24,
    marginTop: 12,
  },
})
