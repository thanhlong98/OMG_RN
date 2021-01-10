import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { IconProps } from 'react-native-vector-icons/Icon'

type Props = Omit<IconProps, 'name'>

export const HomeIcon = (styles?: Props) => {
  return <AntDesign name='home' {...styles} />
}

export const SettingIcon = (styles?: Props) => {
  return <AntDesign {...styles} name='setting' />
}

export const DemoIcon = (styles?: Props) => {
  return <AntDesign {...styles} name='tool' />
}

export const ProfileIcon = (styles?: Props) => {
  return <AntDesign {...styles} name='user' />
}

export const ArrowLeft = (styles?: Props) => {
  return <AntDesign {...styles} name='arrowleft' />
}
