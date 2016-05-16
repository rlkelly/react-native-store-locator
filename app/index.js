import React from 'react'
import Routes from './config/routes'
import { Provider } from 'react-redux'
import configureStore from './stores'
const store = configureStore()
export default function App () {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	)
}