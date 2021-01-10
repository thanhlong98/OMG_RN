import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'

const rootReducer = {
  auth: authReducer
}

const store = configureStore({
  reducer: rootReducer,
  devTools: false
})

export type RootState = ReturnType<typeof store.getState>
export * from './slices/authSlice'
export default store
