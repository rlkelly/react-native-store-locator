import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Linking } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import * as storeActions from '../actions/store'
import MapView, { Marker } from 'react-native-maps'
import Button from 'react-native-button'

class Details extends Component {
	constructor () {
		super()
		this.state = {
			region :{
				latitude: 37.78825, longitude: -122.4324,
				latitudeDelta: 0.0055, longitudeDelta: 0.008
			},
			coordinate : {
				latitude: 37.78825, longitude: -122.4324,
			}
		}
	}

	componentDidMount = () => {
		let region = this.props.region
		this.setState({
			...this.state,
			region : {
				...this.state.region,
				longitude: region.position.lng,
				latitude: region.position.lat
			},
	    coordinate: {
				longitude: region.position.lng,
				latitude: region.position.lat
   		},
   		url: `http://maps.apple.com/?ll=${region.position.lat},${region.position.lng}`
		})
	}

	handleClick = () => {
    Linking.canOpenURL(this.state.url).then(supported => {
	    if (supported) {
	      Linking.openURL(this.state.url);
	    } else {
	      console.error('Don\'t know how to open URI: ' + this.state.url);
	    }
	  });
	}

	renderDetails = () => {
		if(this.props.region !== undefined) {
			return (
			  <View style={styles.details}>
			  	<View>
			  		<Button onPress={this.handleClick}>Get Directions</Button>
			  	</View>
			  	<View>
			  		<Text>{this.props.region.name}</Text>
			  		<Text>{this.props.region.locality}, {this.props.region.administrativeArea}</Text>
			  		<Text>{this.props.region.country}</Text>
			  	</View>
			  </View>
			)
		}
	}

	render () {
		return (
			<View style={styles.container}>
				  <MapView style={styles.map} region={this.state.region}>
				  	<Marker coordinate={this.state.coordinate} title={this.props.store.name}/>
				  </MapView>
				  {this.renderDetails()}
			</View>
		)
	}
}

let {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:64,
	},
	map :{
		width:width,
		height:200
	},
	details : {
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center",
	}
})

export default connect(
	(state) => ({
		region: state.store.current._geolocation,
		store: state.store.current
	})
)(Details)