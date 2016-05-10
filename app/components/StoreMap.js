import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default function StoreMap (props) {
	return (
		<MapView style={styles.map} region={props.storeRegion}>
	  	<Marker coordinate={props.markerCoords} title={props.markerTitle}/>
	  </MapView>
	)
}

let {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
	map :{
		width:width,
		height:200
	},
})