import React from 'react';
import { AccountForm } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import * as accountActionCreators from '../actions/accounts'

function Signup (props) {

	handleFormSubmit = (credentials) => {
		props.signupAndAuthUser(credentials)
			.then(() => Actions.home())
	}

  return (
    <AccountForm onSubmit={handleFormSubmit}/>
  )
}

export default connect(
	(state) => ({}),
	(dispatch) => (bindActionCreators(accountActionCreators, dispatch))
	)(Signup)
