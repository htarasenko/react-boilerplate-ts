import { combineReducers } from 'redux'
import { userReducer, UserState, Register, Authenticate } from './user'
// import { GetDataByRange } from '../sagas'

export interface State {
  userState: UserState
}

export const reducers = combineReducers<State>({
  userState: userReducer
})

type Action =
  | Register
  | Authenticate
export type Dispatch = (action: Action) => void
