import { logout } from '@store'
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { HomeNavProps } from '@navigation/home.navigator'
import { AppRoute } from '@navigation/app-routes'

const FeedScreen: React.FC<HomeNavProps<AppRoute.FEED>> = ({ navigation }) => {
  const dispatch = useDispatch()
  const [data, setData] = useState('')
  const inputRef = useRef<React.RefObject<TextInput>>()

  return (
    <View>
      <Text>Feed Screen</Text>
      <TextInput value={data} onChangeText={setData} />
      <Button
        title='logout'
        onPress={() => {
          dispatch(logout({}))
        }}
      />
    </View>
  )
}

export default FeedScreen
