import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button'
import * as locationActions from '../actions/location'
import * as accountActions from '../actions/account'



class Home extends Component {

	componentDidMount = () => {
		this.props.actions.account.fetchIfCurrentUser()
		this.props.actions.location.getAndSetCurrentLocation()
	}

	render () {
		let status,
				locationEnabled = this.props.locationError.length > 0 ?
				<View>
					<Text style={styles.errorMsg}>Unable to retrieve your location.</Text>
					<Text style={styles.errorMsg}>Please ensure your location is enabled.</Text>
				</View> :
				null

		if (this.props.isAuthed === false) {
			status = (
				<View style={styles.container}>
					<View>
						<Button containerStyle={[styles.btn, styles.bgGreen]} style={styles.btnText} onPress={Actions.login}>Login</Button>
						<Button containerStyle={[styles.btn, styles.bgBlue]} style={styles.btnText} onPress={Actions.signup}>Signup</Button>
					</View>
				</View>
			)
		} else if(this.props.isAuthed === true) {
			status = (
				<View style={styles.container}>
					<View>
						<Button disabled={this.props.locationError.length > 0} styleDisabled={{opacity: 0.8}} containerStyle={[styles.btn, styles.bgGreen]} style={styles.btnText} onPress={Actions.stores}>Stores Near Me</Button>
						<Button containerStyle={[styles.btn, styles.bgDark]} style={styles.btnText} onPress={this.props.actions.account.logoutAndUnauthUser}>Logout</Button>
					</View>
					{locationEnabled}
				</View>
			)
		}

		return (
			<View style={styles.container}>
				<Text style={styles.heading}>Store Locator</Text>
				{status}
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: '#f2f2f2',
		paddingTop:40,
	},
	heading: {
		fontSize: 30,
		fontWeight: "100",
		textAlign: "center",
		justifyContent: "flex-start",
		margin: 10,
	},
	btnText: {
		textAlign: "center",
		color: "#f2f2f2",
		marginBottom: 5,
	},
	btn : {
		width:200,
		paddingTop:6,
		paddingRight:5,
		paddingLeft:5,
		paddingBottom:2,
		borderRadius:6,
		margin:7
	},
	errorMsg : {
		fontSize: 11,
		color: "#bbb",
		textAlign: "center",
	},
	bgGreen : {
		backgroundColor:"#2ecc71",
	},
	bgBlue : {
		backgroundColor:"#3498db",
	},
	bgDark : {
		backgroundColor:"#333",
	}
});


export default connect(
	(state) => ({
		user: state.account.user,
		isAuthed: state.account.isAuthed,
		location: state.location.position,
		locationError: state.location.error
	}),
	(dispatch) => ({
		actions : {
			location: bindActionCreators(locationActions, dispatch),
			account: bindActionCreators(accountActions, dispatch)
		}
	})
)(Home)
