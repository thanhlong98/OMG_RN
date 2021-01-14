import {
  CompositeNavigationProp,
  getFocusedRouteNameFromRoute,
  RouteProp
} from '@react-navigation/native'
import {
  StackNavigationOptions,
  StackNavigationProp
} from '@react-navigation/stack'
import CarouselScreen from '@screens/carousel'
import Carousel2Screen from '@screens/carousel2'
import CountdownScreen from '@screens/countdown'
import ListDemoScreen from '@screens/listDemo'
import TravelScreen from '@screens/travel'
import TravelDetailScreen from '@screens/travelDetail'
import React, { useLayoutEffect } from 'react'
import { enableScreens } from 'react-native-screens'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { AppRoute } from './app-routes'
import { TabNavProp, TabNavProps } from './tab.navigator'

export type DemoParamList = {
  [AppRoute.LIST_DEMO]: undefined
  [AppRoute.COUNTDOWN]: undefined
  [AppRoute.CAROUSEL]: undefined
  [AppRoute.CAROUSEL2]: undefined
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

enableScreens()
const Stack = createSharedElementStackNavigator<DemoParamList>()

const options: StackNavigationOptions = {
  headerShown: false
}

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
    <Stack.Navigator initialRouteName={AppRoute.LIST_DEMO}>
      <Stack.Screen
        name={AppRoute.LIST_DEMO}
        component={ListDemoScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Danh sách demo'
        }}
      />
      <Stack.Screen
        name={AppRoute.COUNTDOWN}
        component={CountdownScreen}
        options={options}
      />
      <Stack.Screen
        name={AppRoute.CAROUSEL}
        component={CarouselScreen}
        options={options}
      />
      <Stack.Screen
        name={AppRoute.CAROUSEL2}
        component={Carousel2Screen}
        options={options}
      />
      <Stack.Screen
        name={AppRoute.TRAVEL}
        component={TravelScreen}
        options={options}
      />
      <Stack.Screen
        name={AppRoute.TRAVEL_DETAIL}
        component={TravelDetailScreen}
        sharedElementsConfig={(routes, otherRoute, showing) => {
          const { item } = routes.params

          return [
            {
              id: `travel.${item.key}.photo`
            },
            {
              id: `travel.${item.key}.location`
            }
          ]
        }}
        options={options}
      />
    </Stack.Navigator>
  )
}

export default DemoNavigator
