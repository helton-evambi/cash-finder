import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { colorPallet } from '../../constants/colors'
import TabMenu from '../../components/tab-manu'
import AtmCard from '../../components/atm-card'

const Contribuir = () => {
  const [system, setSystem] = useState<boolean>(false)
  const [money, setMoney] = useState<boolean>(false)
  const [paper, setPaper] = useState<boolean>(false)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.body}>
        <Text style={styles.nomeApp}>Cash Finder</Text>
        <Text style={styles.texto}>Os mais próximos de si</Text>
        <View style={styles.cardAtm}>
          <AtmCard location="Belas" />
          <AtmCard location="Kilamba" />
          <AtmCard location="Camama" />
          <AtmCard location="Talatona" />
        </View>
        <Text style={styles.texto}>tem sistema?</Text>
        <View style={styles.caixas}>
          <TouchableOpacity
            style={[
              styles.bloco,
              {
                borderColor: system
                  ? colorPallet.primary
                  : colorPallet.secondary,
              },
            ]}
            onPress={() => setSystem(true)}
          >
            <Text>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.bloco,
              {
                borderColor: system
                  ? colorPallet.secondary
                  : colorPallet.primary,
              },
            ]}
            onPress={() => setSystem(false)}
          >
            <Text>Não</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.texto}>Tem dinheiro?</Text>
        <View style={styles.caixas}>
          <TouchableOpacity
            style={[
              styles.bloco,
              {
                borderColor: money
                  ? colorPallet.primary
                  : colorPallet.secondary,
              },
            ]}
            onPress={() => setSystem(false)}
          >
            <Text>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.bloco,
              {
                borderColor: money
                  ? colorPallet.secondary
                  : colorPallet.primary,
              },
            ]}
          >
            <Text>Não</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.texto}>Tem papel?</Text>
        <View style={styles.caixas}>
          <TouchableOpacity
            style={[
              styles.bloco,
              {
                borderColor: paper
                  ? colorPallet.primary
                  : colorPallet.secondary,
              },
            ]}
          >
            <Text>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.bloco,
              {
                borderColor: paper
                  ? colorPallet.secondary
                  : colorPallet.primary,
              },
            ]}
          >
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
  cardAtm: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    borderRadius: 8,
    backgroundColor: colorPallet.primaryLight,
    borderWidth: 1,
    height: 69,
    width: 71,
    marginRight: 19,
  },
  headr: {
    flexDirection: 'row',
  },
})
