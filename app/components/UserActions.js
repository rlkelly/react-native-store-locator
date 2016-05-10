import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux'

export default function UserActions (props) {
	return (
		<View style={styles.container}>
			<Button disabled={props.disabled} styleDisabled={styles.btnDisabled} containerStyle={[styles.btn, styles.bgGreen]} style={styles.btnText} onPress={Actions.stores}>Stores Near Me</Button>
			<Button containerStyle={[styles.btn, styles.bgDark]} style={styles.btnText} onPress={props.handleLogout}>Logout</Button>
		</View>
	)
}

var styles = StyleSheet.create({
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
	bgGreen : {
		backgroundColor:"#2ecc71",
	},
	bgDark : {
		backgroundColor:"#333",
	},
	btnDisabled:{
		opacity: 0.8
	},
})