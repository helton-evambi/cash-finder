import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AtmCard from '../../components/atm-card'
import { CustomButton } from '../../components'
import HomeCard from '../../components/home-card'
import { CircleStackIcon } from 'react-native-heroicons/outline'
const Home = () => {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={{ fontWeight: 600, fontSize: 16 }}>Helton Evambi</Text>
      <Text style={{ marginTop: 40, fontWeight: 500 }}>
        Os mais próximos de si
      </Text>
      <View style={styles.cardAtm}>
        <AtmCard />
        <AtmCard />
        <AtmCard />
        <AtmCard />
      </View>
      <Text style={{ marginTop: 40, fontWeight: 600, fontSize: 16 }}>
        Contribua com informações
      </Text>
      <Text>No Cash Finder o seu contributo é essencial</Text>
      <View style={{ marginVertical: 20 }}>
        <CustomButton title="Contribuir" />
      </View>
      <View style={styles.homeCard}>
        <HomeCard title="Total de caixas" total={200} icon={CircleStackIcon} />
        <HomeCard title="Total de caixas" total={200} icon={CircleStackIcon} />
        <HomeCard title="Total de caixas" total={200} icon={CircleStackIcon} />
        <HomeCard title="Total de caixas" total={200} icon={CircleStackIcon} />
      </View>
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
