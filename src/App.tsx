import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

import { reducers } from './reducers'
import {PrivateRoute} from './components/PrivateRoute'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
// sagaMiddleware.run(sagaDataByRange)
const theme = createMuiTheme({})

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PrivateRoute/>
      </Provider>
    </ThemeProvider>
  );
}

