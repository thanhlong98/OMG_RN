/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import Navigation from './navigation'
import store from './store'

declare const global: { HermesInternal: null | {} }

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
