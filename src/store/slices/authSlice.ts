import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  photo: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.username = 'longnguyen'
    },
    register(state, action) {},
    logout(state, action) {
      state.username = ''
    }
  }
})

const { actions, reducer } = authSlice

export const { login, register, logout } = actions

export default reducer
