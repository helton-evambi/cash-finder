import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'

import { CustomButton, CustomInput } from '../../components'
import { colorPallet } from '../../constants/colors'
import TabMenu from '../../components/tab-manu'

const Pesquisar = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.body}>
        <Text style={styles.nomeApp}>Cash Finder</Text>
        <Text style={{ textAlign: 'left', alignItems: 'flex-start' }}>
          Pesquise por ATMs
        </Text>
        <CustomInput placeholder="Introduza o nome do local..." />
        <View style={styles.mapa}></View>
        <View>
          <Text style={styles.titulo1}>
            Cash <Text style={styles.titulo2}>Finder</Text>
          </Text>
        </View>
      </View>
      <TabMenu />
    </SafeAreaView>
  )
}

export default Pesquisar

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingTop: 54,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  mapa: {
    height: 323,
    width: '100%',
    marginTop: 17,
    marginLeft: 26,
    marginRight: 23,
    marginBottom: 61,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
  },
  rodape: {
    width: '100%',
    height: 79,
    backgroundColor: '#D9D9D9',
    marginTop: 98,
  },
  nomeApp: {
    fontSize: 16,
    marginTop: 33,
    marginBottom: 32,
    fontWeight: 'bold',
  },
  titulo1: {
    fontSize: 40,
  },
  titulo2: {
    fontSize: 40,
    color: colorPallet.primary,
  },
})
