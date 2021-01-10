import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AppRoute } from './app-routes'
import TabNavigator from './tab.navigator'

export type AppParamList = {
  [AppRoute.TAB]: undefined
}

const AppStack = createStackNavigator<AppParamList>()

const AppNavigator = () => {
  return (
    <AppStack.Navigator headerMode='none'>
      <AppStack.Screen name={AppRoute.TAB} component={TabNavigator} />
    </AppStack.Navigator>
  )
}

export default AppNavigator
