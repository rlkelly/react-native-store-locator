import React from 'react';
import { AccountForm } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import * as accountActionCreators from '../actions/accounts'

function Login (props) {

	handleFormSubmit = (credentials) => {
		props.loginAndAuthUser(credentials)
			.then(() => Actions.home())
	}

  return (
    <AccountForm onSubmit={handleFormSubmit}/>
  )
}

export default connect(
	(state) => ({}),
	(dispatch) => (bindActionCreators(accountActionCreators, dispatch))
	)(Login)
