import { RouteProp } from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack'
import LoginScreen from '@screens/login'
import RegisterScreen from '@screens/register'
import React from 'react'
import { AppRoute } from './app-routes'

type AuthParamList = {
  [AppRoute.LOGIN]: undefined
  [AppRoute.REGISTER]: undefined
}

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>
  route: RouteProp<AuthParamList, T>
}

const AuthStack = createStackNavigator<AuthParamList>()

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName={AppRoute.LOGIN} headerMode='none'>
      <AuthStack.Screen name={AppRoute.LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={AppRoute.REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator
