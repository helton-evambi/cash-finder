import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { colorPallet } from '../constants/colors'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'

const TabMenu = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.menuItens}
        onPress={() => navigation.navigate('Home')}
      >
        <AntDesign name="home" size={24} color={colorPallet.primaryLight} />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItens}
        onPress={() => navigation.navigate('Pesquisar')}
      >
        <AntDesign name="search1" size={24} color={colorPallet.primaryLight} />
        <Text style={styles.text}>Pesquisar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItens}>
        <AntDesign name="question" size={24} color={colorPallet.primaryLight} />
        <Text style={styles.text}>Faq</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItens}>
        <MaterialIcons
          name="roundabout-right"
          size={24}
          color={colorPallet.primaryLight}
        />
        <Text style={styles.text}>Sobre</Text>
      </TouchableOpacity>
    </View>
  )
}
export default TabMenu

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2,
    paddingHorizontal: 24,
    backgroundColor: colorPallet.secondary,
  },

  menuItens: {
    alignItems: 'center',
  },

  text: {
    color: colorPallet.primaryLight,
  },
})
