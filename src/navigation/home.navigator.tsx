import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack'
import FeedScreen from '@screens/feed'
import React from 'react'
import { AppRoute } from './app-routes'
import { TabNavProp } from './tab.navigator'

type HomeParamList = {
  [AppRoute.FEED]: undefined
  [AppRoute.PRODUCT]: undefined
}

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation: CompositeNavigationProp<
    TabNavProp<AppRoute.HOME>,
    StackNavigationProp<HomeParamList, T>
  >
  route: RouteProp<HomeParamList, T>
}

const Stack = createStackNavigator<HomeParamList>()

const HomeNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRoute.FEED} component={FeedScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator
