import React from 'react'
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View
} from 'react-native'
import { images } from './data'
import Tabs from './Tabs'

const { width, height } = Dimensions.get('screen')

const data = images.map((i) => ({
  key: i.name,
  title: i.name,
  image: i.image,
  ref: React.createRef<View>()
}))

export type DataType = typeof data

const AnimatedTabsScreen = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current
  const ref = React.useRef<FlatList>(null)

  const onItemPress = React.useCallback((indexItem) => {
    ref?.current?.scrollToOffset({
      offset: indexItem * width
    })
  }, [])

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={ref}
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false } // transform and opacity
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width,
                height
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ flex: 1, resizeMode: 'cover' }}
              />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  { backgroundColor: 'rgba(0, 0, 0, 0.3)' }
                ]}
              />
            </View>
          )
        }}
      />
      <Tabs data={data} scrollX={scrollX} onItemPress={onItemPress} />
    </View>
  )
}

export default AnimatedTabsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
