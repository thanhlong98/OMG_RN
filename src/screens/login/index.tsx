import { AppRoute } from '@navigation/app-routes'
import { AuthNavProps } from '@navigation/auth.navigator'
import { login } from '@store'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

type LoginProps = {} & AuthNavProps<AppRoute.LOGIN>

const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  const dispatch = useDispatch()

  return (
    <View>
      <Text>Login</Text>
      <Button
        onPress={() => {
          dispatch(login({}))
        }}
        title='Click me'
      />
      <Button
        onPress={() => {
          navigation.navigate(AppRoute.REGISTER)
        }}
        title='Register'
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
