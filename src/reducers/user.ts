export interface UserState {
    login: string | null
    password: string | null
    isAuthenticated: boolean
}
  
  export interface Register {
    login: string | null
    password: string | null
  }
  
  export const REGISTER = 'REGISTER'
  export interface SetUser {
    type: typeof REGISTER
    payload: Register
  }
  
  export const register = (payload: Register): SetUser => ({
    type: REGISTER,
    payload
  })
  
  

  export interface Authenticate {
    isAuthenticated: boolean
}
  
  export const AUTH = 'AUTH'
  export interface SetAuth {
    type: typeof AUTH
    payload: Authenticate
  }
  
  export const authenticate = (payload: Authenticate): SetAuth => ({
    type: AUTH,
    payload
  })
  
  export const userReducer = (
    state: UserState = {
      login: 'John',
      password: 'Doe',
      isAuthenticated: false
    },
    action: SetUser | SetAuth
  ): UserState => {
    switch (action.type) {
      case REGISTER:
        return {
          ...state,
          ...action.payload
        }
        case AUTH:
            return {
              ...state,
              ...action.payload
            }
          default:
        return state
    }
  }
  