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

const Contribuir = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.body}>
        <Text style={styles.nomeApp}>Cash Finder</Text>
        <Text style={styles.texto}>Os mais próximos de si</Text>
        <View style={styles.caixas}>
          <TouchableOpacity style={styles.bloco}>
            <Text>Belas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bloco}>
            <Text>Belas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bloco}>
            <Text>Belas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bloco}>
            <Text>Sim</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.texto}>tem sistema?</Text>
        <View style={styles.caixas}>
          <TouchableOpacity style={styles.bloco}>
            <Text>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bloco}>
            <Text>Não</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.texto}>Tem dinheiro?</Text>
        <View style={styles.caixas}>
          <TouchableOpacity style={styles.bloco}>
            <Text>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bloco}>
            <Text>Não</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.texto}>Tem papel?</Text>
        <View style={styles.caixas}>
          <TouchableOpacity style={styles.bloco}>
            <Text>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bloco}>
            <Text>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TabMenu />
    </SafeAreaView>
  )
}

export default Contribuir

const styles = StyleSheet.create({
  central: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    gap: 8,
    paddingTop: 54,
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: 'white',
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
    marginBottom: 33,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  caixas: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bloco: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: colorPallet.primaryLight,
    height: 69,
    width: 71,
    marginRight: 19,
  },
  headr: {
    flexDirection: 'row',
  },
})
