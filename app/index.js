import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Routes from './config/routes'
import configureStore from './stores'
const store = configureStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App