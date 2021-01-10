import {
  CompositeNavigationProp,
  getFocusedRouteNameFromRoute,
  RouteProp
} from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack'
import CarouselScreen from '@screens/carousel'
import CountdownScreen from '@screens/countdown'
import ListDemoScreen from '@screens/listDemo'
import TravelScreen from '@screens/travel'
import TravelDetailScreen from '@screens/travelDetail'
import React, { useLayoutEffect } from 'react'
import { AppRoute } from './app-routes'
import { TabNavProp, TabNavProps } from './tab.navigator'

export type DemoParamList = {
  [AppRoute.LIST_DEMO]: undefined
  [AppRoute.COUNTDOWN]: undefined
  [AppRoute.CAROUSEL]: undefined
  [AppRoute.TRAVEL]: undefined
  [AppRoute.TRAVEL_DETAIL]: {
    item: any
  }
}

export type DemoNavProps<T extends keyof DemoParamList> = {
  navigation: CompositeNavigationProp<
    TabNavProp<AppRoute.DEMO>,
    StackNavigationProp<DemoParamList, T>
  >
  route: RouteProp<DemoParamList, T>
}

const Stack = createStackNavigator<DemoParamList>()

const DemoNavigator: React.FC<TabNavProps<AppRoute.DEMO>> = ({
  navigation,
  route
}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route)
    if (routeName !== AppRoute.LIST_DEMO) {
      navigation.setOptions({ tabBarVisible: false })
    } else {
      navigation.setOptions({ tabBarVisible: true })
    }
  }, [navigation, route])

  return (
    <Stack.Navigator initialRouteName={AppRoute.LIST_DEMO} headerMode='none'>
      <Stack.Screen name={AppRoute.LIST_DEMO} component={ListDemoScreen} />
      <Stack.Screen name={AppRoute.COUNTDOWN} component={CountdownScreen} />
      <Stack.Screen name={AppRoute.CAROUSEL} component={CarouselScreen} />
      <Stack.Screen name={AppRoute.TRAVEL} component={TravelScreen} />
      <Stack.Screen
        name={AppRoute.TRAVEL_DETAIL}
        component={TravelDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default DemoNavigator
