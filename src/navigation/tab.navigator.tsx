import { DemoIcon, HomeIcon, ProfileIcon, SettingIcon } from '@assets/icons'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import ProfileScreen from '@screens/profile'
import SettingScreen from '@screens/setting'
import React from 'react'
import { AppRoute } from './app-routes'
import { AppParamList } from './app.navigator'
import DemoNavigator from './demo.navigator'
import HomeNavigator from './home.navigator'

type TabParamList = {
  [AppRoute.HOME]: undefined
  [AppRoute.SETTING]: undefined
  [AppRoute.DEMO]: undefined
  [AppRoute.PROFILE]: undefined
}

export type TabNavProp<T extends keyof TabParamList> = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, T>,
  StackNavigationProp<AppParamList, AppRoute.TAB>
>

export type TabRouteProp<T extends keyof TabParamList> = RouteProp<
  TabParamList,
  T
>

export type TabNavProps<T extends keyof TabParamList> = {
  navigation: TabNavProp<T>
  route: TabRouteProp<T>
}

const Tab = createBottomTabNavigator<TabParamList>()

const AppTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#3498db',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen
        name={AppRoute.HOME}
        component={HomeNavigator}
        options={{
          tabBarIcon: HomeIcon
        }}
      />
      <Tab.Screen
        name={AppRoute.DEMO}
        component={DemoNavigator}
        options={{
          tabBarIcon: DemoIcon
        }}
      />
      <Tab.Screen
        name={AppRoute.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileIcon
        }}
      />
      <Tab.Screen
        name={AppRoute.SETTING}
        component={SettingScreen}
        options={{
          tabBarIcon: SettingIcon
        }}
      />
    </Tab.Navigator>
  )
}

export default AppTabNavigator
