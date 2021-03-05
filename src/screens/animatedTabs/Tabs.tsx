import React from 'react'
import { Animated, View } from 'react-native'
import { DIMENTIONS } from '@utils'
import Tab from './Tab'
import { DataType } from '.'

type IndicatorProps = {
  measures: any,
  scrollX: any
}

const Indicator: React.FC<IndicatorProps> = ({ measures, scrollX }) => {
  const inputRange = data.map((_, i) => i * width)

  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width)
  })
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x)
  })

  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 4,
        width: indicatorWidth,
        left: 0,
        backgroundColor: '#fff',
        bottom: -10,
        transform: [{ translateX }]
      }}
    />
  )
}

type TabsProps = {
  scrollX: any
  data: DataType
  onItemPress: any
}

const Tabs: React.FC<TabsProps> = ({ scrollX, data, onItemPress }) => {
  const [measures, setMeasures] = React.useState([])
  const containerRef = React.useRef<View>(null)

  React.useEffect(() => {
    let m: any[] = []

    if (!measures) {
      data.forEach((item) => {
        item?.ref?.current?.measureLayout(
          containerRef.current,
          (x, y, width, height) => {
            m.push({ x, y, width, height })

            if (m.length === data.length) {
              setMeasures(m)
              console.log('asd')
            }
          }
        )
      })
    }
  }, [data, measures])

  return (
    <View
      style={{
        position: 'absolute',
        top: 100,
        width: DIMENTIONS.SCREEN_WITH
      }}
    >
      <View
        ref={containerRef}
        style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}
      >
        {data.map((item: any, index: any) => (
          <Tab
            key={item.key}
            item={item}
            ref={item.ref}
            onItemPress={() => onItemPress(index)}
          />
        ))}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  )
}

export default Tabs
