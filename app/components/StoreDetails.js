import React from 'react'
import { StyleSheet, View, Text, Linking, Dimensions } from 'react-native'
import Button from 'react-native-button'

export default function StoreDetails (props) {

	handleClick = () => {
		Linking.openURL(props.mapsUrl)
	}

 return (
	<View style={styles.detailsContainer}>
		<View style={styles.btnContainer}>
			<Button style={styles.btn} onPress={handleClick}>Get Directions</Button>
		</View>
		<View style={styles.addressContainer}>
			<Text style={styles.addressLine}>{props.storeAddress.name}</Text>
			<Text style={styles.addressLine}>{props.storeAddress.locality}, {props.storeAddress.administrativeArea}</Text>
			<Text style={styles.addressLine}>{props.storeAddress.country}</Text>
		</View>
	</View>
 )

}

let {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
	detailsContainer : {
		flex: 1,
		justifyContent: "space-between",
		backgroundColor:"#fafafa",
	},
	btnContainer: {
		width:width
	},
	btn: {
		padding:30
	},
	addressContainer: {
		backgroundColor:"#fff",
		width:width,
		paddingTop:20,
		paddingBottom:20,
	},
	addressLine: {
		textAlign:"center",

	}
})