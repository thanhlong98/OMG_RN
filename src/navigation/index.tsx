import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '@screens/splash'
import { RootState } from '@store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppRoute } from './app-routes'
import AppNavigator from './app.navigator'
import AuthNavigator from './auth.navigator'

type RootPramList = {
  [AppRoute.APP]: undefined
  [AppRoute.AUTH]: undefined
}

const RootStack = createStackNavigator<RootPramList>()

const Navigation = () => {
  const auth = useSelector((state: RootState) => state.auth)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return <SplashScreen />
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode='none'>
        {auth.username ? (
          <RootStack.Screen name={AppRoute.APP} component={AppNavigator} />
        ) : (
          <RootStack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
