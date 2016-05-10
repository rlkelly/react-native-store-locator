import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Location (props) {
 	if(props.enabled === false) {
 		return (
 			<View>
				<Text style={styles.errorMsg}>Unable to retrieve your location.</Text>
				<Text style={styles.errorMsg}>Please ensure your location is enabled.</Text>
			</View>
		)
 	} else {
 		return <View></View>
 	}	
}

var styles = StyleSheet.create({
	address : {
		fontSize:11,
		textAlign:"center",
		color:"#aaa"
	},
	errorMsg : {
		fontSize: 11,
		color: "#bbb",
		textAlign: "center",
	},
})