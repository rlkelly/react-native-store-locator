import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

// Native Components
import { View, Text, StyleSheet } from 'react-native'
import Button from 'react-native-button'

// Action Creators
import * as locationActions from '../actions/location'
import * as accountActions from '../actions/account'

// Custom Components
import Location from './Location'
import GuestActions from './GuestActions'
import UserActions from './UserActions'



class Home extends Component {

	componentDidMount = () => {
		this.props.actions.account.fetchIfCurrentUser()
		this.props.actions.location.getAndSetCurrentLocation()
	}

	availableActions = (isAuthed) => {
			if(isAuthed === true) return <UserActions handleLogout={this.props.actions.account.logoutAndUnauthUser} />
			else if(isAuthed === false) return <GuestActions/>
			else return <Text>Loading...</Text>
	}

	render () {
		return (
			<View style={styles.container}>
				<Text style={styles.heading}>Store Locator</Text>
				<View>
					{this.availableActions(this.props.isAuthed)}
				</View>
				<Location enabled={this.props.enabled}/>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent:"space-between",
		backgroundColor: '#f2f2f2',
		paddingTop:40,
	},
	heading: {
		fontSize: 30,
		fontWeight: "100",
		textAlign: "center",
		justifyContent: "flex-start",
		margin: 10,
	}
});


export default connect(
	(state) => ({
		user: state.account.user,
		isAuthed: state.account.isAuthed,
		location: state.location.position,
		enabled: state.location.enabled
	}),
	(dispatch) => ({
		actions : {
			location: bindActionCreators(locationActions, dispatch),
			account: bindActionCreators(accountActions, dispatch)
		}
	})
)(Home)
