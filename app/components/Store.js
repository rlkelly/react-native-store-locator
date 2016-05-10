import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import * as storeActions from '../actions/store'
import Button from 'react-native-button'
import { StoreMap, StoreDetails } from '../components'

class Store extends Component {
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
		let region = this.props.region.coordinates
		this.setState({
			...this.state,
			region : {
				...this.state.region,
				longitude: region[0],
				latitude: region[1]
			},
   		url: `http://maps.apple.com/?ll=${region[1]},${region[0]}`
		})
	}

	render () {
		return (
			<View style={styles.container}>
					<StoreMap
						storeRegion={this.state.region}
						markerCoords={this.state.region}
						markerTitle={this.props.store.name} />
					<StoreDetails storeAddress={this.props.address} mapsUrl={this.state.url}/>
			</View>
		)
	}
}


var styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:64,
	}
})

export default connect(
	(state) => ({
		region: state.store.current._geolocation,
		address: state.store.current.address,
		store: state.store.current
	})
)(Store)