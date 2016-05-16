import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GuestActions, UserActions, Location } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as accountActions from '../actions/accounts'
import * as locationActions from '../actions/location'

 class Home extends Component {

 	componentDidMount = () => {
 		this.props.actions.account.fetchIfCurrentUser()
 		this.props.actions.location.getAndSetCurrentLocation()
 	}

	availableActions = (isAuthed) => {
		if(isAuthed === true) return <UserActions handleLogout={this.props.actions.account.logoutAndUnauthUser} />
		else if(isAuthed === false) return <GuestActions />
		else return <Text>Loading...</Text>
	}

	render () {
		return (
      <View style={styles.container}>
      	<Text style={styles.heading}>Store Locator</Text>
      	<View>
          {this.availableActions(this.props.isAuthed)}
        </View>
        <Location enabled={this.props.locationEnabled} />
      </View>
  	)  	
	}
}

var styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems: "center",
		justifyContent:"space-around",
		backgroundColor: '#f2f2f2',
	},
	heading: {
		fontSize: 30,
		fontWeight: "100",
	}
})

export default connect(
	(state) => ({
		user: state.account.user,
		isAuthed: state.account.isAuthed,
		locationEnabled: state.location.enabled
	}),
	(dispatch) => ({
		actions: {
			account: bindActionCreators(accountActions, dispatch),
			location: bindActionCreators(locationActions, dispatch),
		}
	})
	)(Home)