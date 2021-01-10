import { ArrowLeft } from '@assets/icons'
import { AppRoute } from '@navigation/app-routes'
import { DemoNavProps } from '@navigation/demo.navigator'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')
const s = width * 0.68
const ITEM_WIDTH = s
const ITEM_HEIGHT = s * 1.5
const RADIUS = 18
const SPACING = 12
const FULL_SIZE = s + SPACING * 2

const TravelDetailScreen: React.FC<DemoNavProps<AppRoute.TRAVEL_DETAIL>> = ({
  navigation,
  route
}) => {
  const { item } = route.params

  return (
    <View style={{ flex: 1 }}>
      <ArrowLeft
        size={24}
        color='#333'
        style={{
          paddingHorizontal: SPACING,
          position: 'absolute',
          top: 50,
          left: 10,
          zIndex: 2
        }}
        onPress={() => {
          navigation.goBack()
        }}
      />
      <View style={[StyleSheet.absoluteFillObject]}>
        <Image
          source={{ uri: item.image }}
          style={[
            StyleSheet.absoluteFillObject,
            {
              resizeMode: 'cover'
            }
          ]}
        />
      </View>
      <Text style={[styles.location]}>{item.location}</Text>
    </View>
  )
}

export default TravelDetailScreen

const styles = StyleSheet.create({
  location: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    width: ITEM_WIDTH * 0.8,
    textTransform: 'uppercase',
    position: 'absolute',
    top: 120,
    left: SPACING * 2
  }
})
