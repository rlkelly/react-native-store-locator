import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as storeActions from '../actions/stores'
import { Actions } from 'react-native-router-flux'
import { StoreListItem, StoreSearch } from '../components'

class StoreList extends Component {
	constructor() {
    super()
    this.state = {
    	distance: 500,
    	storeCount: "Loading"
    }
  }

	componentWillMount = () => {
		this.props.fetchAndSetStores(this.state.distance)
			.then(() => this.setState({
				...this.state,
				storeCount:this.props.stores.length
			}))
	}

	onStoreSelect = (store) => {
		this.props.setCurrentStore(store)
			.then(() => Actions.details())	
			.catch(() => alert("Opps, something didn't work correctly! Try again."))
	}

	onUpdateDistance = (distance) => {
  	this.setState({
			...this.state,
			storeCount: "Loading"
		})
		this.props.fetchAndSetStores(distance)
			.then(() => this.setState({
				...this.state,
				distance,
				storeCount:this.props.stores.length
			}))	
	}

	render () {
		return (
			<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
				<StoreSearch
					handleInputChange={this.onUpdateDistance}
					storeCount={this.state.storeCount}
					distance={this.state.distance} />
				{this.props.stores.map((store, idx) => {
					return (
						<StoreListItem
							key={idx}
							store={store}
							handlePress={this.onStoreSelect}
						/>
					)
				})}
			</ScrollView>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop:64,
		backgroundColor: '#fdfdfd',
	},
	contentContainer : {
		justifyContent: "flex-start",
		alignItems: "stretch",
	},

})

export default connect(
	(state) => ({ stores: state.store.locations }),
	(dispatch) => (bindActionCreators(storeActions, dispatch))
	)(StoreList)