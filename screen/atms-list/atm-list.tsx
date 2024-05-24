import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AtmCard from '../../components/atm-card'
import { CustomButton } from '../../components'
import HomeCard from '../../components/home-card'
import { CircleStackIcon } from 'react-native-heroicons/outline'
import TabMenu from '../../components/tab-manu'
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import AtmCardList from '../../components/atm-card-list'
import { RootStackParamList } from '../../types/navigation'

type AtmListRouteProp = RouteProp<RootStackParamList, 'AtmList'>

const AtmsList = () => {
  const route = useRoute<AtmListRouteProp>()
  const { query } = route.params

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.body}>
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

          {query === 'all' && (
            <View>
              <AtmCardList
                title="Banco Sol"
                location="Golfe 2"
                money={true}
                paper={true}
                system={true}
              />
              <AtmCardList
                title="BFA"
                location="Camama"
                money={false}
                paper={false}
                system={false}
              />
              <AtmCardList
                title="BIC"
                location="Kilamba"
                money={false}
                paper={true}
                system={true}
              />

              <AtmCardList
                title="Banco Sol"
                location="Kilamba"
                money={true}
                paper={true}
                system={true}
              />
            </View>
          )}

          {query === 'money' && (
            <View>
              <AtmCardList
                title="Banco Sol"
                location="Golfe 2"
                money={true}
                paper={true}
                system={true}
              />

              <AtmCardList
                title="Banco Sol"
                location="Kilamba"
                money={true}
                paper={true}
                system={true}
              />
            </View>
          )}

          {query === 'paper' && (
            <View>
              <AtmCardList
                title="Banco Sol"
                location="Golfe 2"
                money={true}
                paper={true}
                system={true}
              />

              <AtmCardList
                title="BIC"
                location="Kilamba"
                money={false}
                paper={true}
                system={true}
              />

              <AtmCardList
                title="Banco Sol"
                location="Kilamba"
                money={true}
                paper={true}
                system={true}
              />
            </View>
          )}

          {query === 'system' && (
            <View>
              <AtmCardList
                title="BFA"
                location="Camama"
                money={false}
                paper={false}
                system={false}
              />
            </View>
          )}
        </View>
      </ScrollView>

      <TabMenu />
    </SafeAreaView>
  )
}

export default AtmsList

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
})
