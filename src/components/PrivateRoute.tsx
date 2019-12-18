import React from 'react'
import { useSelector } from 'react-redux'

import {  State } from '../reducers'
import {  Login } from './login'


export const PrivateRoute = (): JSX.Element|null => {
  const isAuthenticated = useSelector((state:State) => state.userState.isAuthenticated)
  return isAuthenticated?<>'Welcome'</>: <Login/>
}
