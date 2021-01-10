import { AppRoute } from '@navigation/app-routes'
import { DemoNavProps } from '@navigation/demo.navigator'
import React from 'react'
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

const { width, height } = Dimensions.get('window')
const s = width * 0.68
const ITEM_WIDTH = s
const ITEM_HEIGHT = s * 1.5
const RADIUS = 18
const SPACING = 12
const FULL_SIZE = s + SPACING * 2

const data = [
  {
    key: 1,
    numberOfDays: 9,
    color: '#2ecc71',
    location: 'Bregenz, Austria',
    image:
      'https://images.unsplash.com/photo-1606417393724-2ccf02791b8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    key: 2,
    numberOfDays: 2,
    color: '#2980b9',
    location: 'Civita Castellana, VT, Italy',
    image:
      'https://images.unsplash.com/photo-1610060301937-9ccfc5cd41ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    key: 3,
    numberOfDays: 1,
    color: '#2c3e50',
    location: 'Rheinschlucht, Versam, Switzerland',
    image:
      'https://images.unsplash.com/photo-1609354940664-7f6fb036364d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    key: 4,
    numberOfDays: 5,
    color: '#e74c3c',
    location: 'Cuilápam de Guerrero, Oax., México',
    image:
      'https://images.unsplash.com/photo-1609610677350-efeaa2c21219?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    key: 5,
    numberOfDays: 3,
    color: '#8e44ad',
    location: ' Val Marie, SK, Canada',
    image:
      'https://images.unsplash.com/photo-1608241174775-d1174fabf441?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    key: 6,
    numberOfDays: 3,
    color: '#f1c40f',
    location: 'San Francisco, United States',
    image:
      'https://images.unsplash.com/photo-1589636827967-6e160cd51272?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
  }
]

const TravelScreen: React.FC<DemoNavProps<AppRoute.TRAVEL>> = ({
  navigation
}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        decelerationRate='fast'
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * FULL_SIZE,
            index * FULL_SIZE,
            (index + 1) * FULL_SIZE
          ]

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH]
          })

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.1, 1]
          })

          return (
            <TouchableOpacity
              onPress={() => {
                navigation.push(AppRoute.TRAVEL_DETAIL, { item })
              }}
              style={styles.itemContainer}
            >
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  { overflow: 'hidden', borderRadius: RADIUS }
                ]}
              >
                <Animated.Image
                  source={{ uri: item.image }}
                  style={[
                    StyleSheet.absoluteFillObject,
                    {
                      // width: '100%',
                      // height: '100%',
                      resizeMode: 'cover',
                      transform: [{ scale }]
                    }
                  ]}
                />
              </View>

              <Animated.Text
                style={[
                  styles.location,
                  {
                    transform: [{ translateX }]
                  }
                ]}
              >
                {item.location}
              </Animated.Text>
              <View style={styles.days}>
                <Text style={styles.daysValue}>{item.numberOfDays}</Text>
                <Text style={styles.daysLabel}>day</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default TravelScreen

const styles = StyleSheet.create({
  itemContainer: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    margin: SPACING
  },
  location: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    width: ITEM_WIDTH * 0.8,
    textTransform: 'uppercase',
    position: 'absolute',
    top: SPACING,
    left: SPACING
  },
  days: {
    position: 'absolute',
    bottom: SPACING,
    left: SPACING,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center'
  },
  daysValue: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18
  },
  daysLabel: {
    color: '#fff',
    fontSize: 10
  }
})
