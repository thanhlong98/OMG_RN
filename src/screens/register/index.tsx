import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthNavProps } from '@navigation/auth.navigator'
import { AppRoute } from '@navigation/app-routes'

type RegisterProps = {} & AuthNavProps<AppRoute.REGISTER>

const RegisterScreen: React.FC<RegisterProps> = () => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})
