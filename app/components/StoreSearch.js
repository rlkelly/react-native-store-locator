import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function StoreSearch (props) {
	return (
		<View>
			<TextInput
				placeholder={'Enter a search radius for stores.'}
				style={styles.input}
				onChangeText={props.handleInputChange} />
			<Text style={styles.storeCount}>
				{props.storeCount} stores found within {props.distance || '500'} miles.
			</Text>
		</View>
	)
}

var styles = StyleSheet.create({
	input : {
		height: 30,
		backgroundColor: '#fdfdfd',
		fontSize: 12,
		textAlign:"center"
	},
	storeCount : {
		textAlign:"center",
		backgroundColor:"#34495e",
		color:"#eee",
		fontSize:10,
		padding:5,
	}
})