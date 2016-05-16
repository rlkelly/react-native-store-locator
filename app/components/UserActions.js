import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button'

export default function UserActions (props) {
	return (
		<View style={styles.container}>
			<Button
				style={styles.btnText}
				containerStyle={[styles.btn, styles.bgGreen]}
				onPress={Actions.stores}>Stores Near Me</Button>
			<Button
				style={styles.btnText} 
				containerStyle={[styles.btn, styles.bgDark]}
				onPress={props.handleLogout}>Logout</Button>
		</View>
	)
}

var styles = StyleSheet.create({
	btnText: {
		color: "#f2f2f2"
	},
	btn: {
		width:200,
		padding:8,
		borderRadius:6,
		margin:8
	},
	bgGreen: {
		backgroundColor:"#2ecc71",
	},
	bgDark: {
		backgroundColor:"#333",
	},
	btnDisabled:{
		opacity: 0.8
	},
})