import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button'

export default function GuestActions () {
	return (
		<View>
			<Button
				onPress={Actions.login}
				style={styles.btnText}
				containerStyle={[styles.btn, styles.bgGreen]}>Login</Button>
			<Button
				onPress={Actions.signup}
				style={styles.btnText}
				containerStyle={[styles.btn, styles.bgBlue]}>Signup</Button>
		</View>
	)
}

var styles = StyleSheet.create({
	btnText: {
		color: "#f2f2f2",
	},
	btn : {
		width:200,
		padding:8,
		borderRadius:6,
		margin:8
	},
	bgGreen : {
		backgroundColor:"#2ecc71",
	},
	bgBlue : {
		backgroundColor:"#3498db",
	},
})