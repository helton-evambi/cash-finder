import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AtmCard from '../../components/atm-card'
import { CustomButton } from '../../components'
import HomeCard from '../../components/home-card'
import { CircleStackIcon } from 'react-native-heroicons/outline'
import TabMenu from '../../components/tab-manu'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { RootStackParamList } from '../../types/navigation'

const Home = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.body}>
        <Text style={{ fontWeight: 600, fontSize: 16 }}>Helton Evambi</Text>
        <Text style={{ marginTop: 40, fontWeight: 500 }}>
          Os mais próximos de si
        </Text>
        <View style={styles.cardAtm}>
          <AtmCard location="Belas" />
          <AtmCard location="Kilamba" />
          <AtmCard location="Camama" />
          <AtmCard location="Talatona" />
        </View>
        <Text style={{ marginTop: 40, fontWeight: 600, fontSize: 16 }}>
          Contribua com informações
        </Text>
        <Text>No Cash Finder o seu contributo é essencial</Text>
        <View style={{ marginVertical: 20 }}>
          <CustomButton
            title="Contribuir"
            onPress={() => navigation.navigate('AtmList', { query: 'all' })}
          />
        </View>
        <View style={styles.homeCard}>
          <HomeCard
            title="Total de Caixas"
            total={4}
            icon={AntDesign}
            iconName="database"
            atmQuery="all"
          />
          <HomeCard
            title="Total de Caixas com Dinheiro"
            total={2}
            icon={FontAwesome}
            iconName="money"
            atmQuery="money"
          />
          <HomeCard
            title="Total de Caixas com Papel"
            total={3}
            icon={Ionicons}
            iconName="newspaper-outline"
            atmQuery="paper"
          />
          <HomeCard
            title="Total de Caixas sem Sistema"
            total={1}
            icon={Ionicons}
            iconName="close-circle-outline"
            atmQuery="system"
          />
        </View>
      </View>
      <TabMenu />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 12,
  },
  cardAtm: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
})
