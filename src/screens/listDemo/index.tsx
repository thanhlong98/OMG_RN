import { AppRoute } from '@navigation/app-routes'
import { DemoNavProps } from '@navigation/demo.navigator'
import React from 'react'
import { Button, Text, View } from 'react-native'

const ListDemoScreen: React.FC<DemoNavProps<AppRoute.LIST_DEMO>> = ({
  navigation
}) => {
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 20
        }}
      >
        Dannh sách demo
      </Text>
      <Button
        title='Carousel'
        onPress={() => navigation.push(AppRoute.CAROUSEL)}
      />
      <Button
        title='Countdown'
        onPress={() => navigation.push(AppRoute.COUNTDOWN)}
      />
      <Button title='Travel' onPress={() => navigation.push(AppRoute.TRAVEL)} />
    </View>
  )
}

export default ListDemoScreen
