import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button'
import * as storeActions from '../actions/store'


class Stores extends Component {
	  constructor(props) {
    super(props);
    this.state = {
      distance: 500
    };
  }
	componentDidMount = () => {
		this.props.fetchAndSetStores(this.state.distance)
	}

	setStoreAndNavgiate = (store) => {
		this.props.setCurrentStore(store)
		.then(() => Actions.details())	
	}

  onUpdateDistance = (distance) => {
    this.setState({ ...this.state, distance, });
  	this.props.fetchAndSetStores(distance)
  }

	render () {
		return (
			<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
				<TextInput
					placeholder={'Enter a search radius for stores.'}
					style={styles.input}
					onChangeText={this.onUpdateDistance} />
				<Text style={styles.storeCount}>
					{this.props.stores.length} stores found within {this.state.distance || 500} miles.
				</Text>
				{this.props.stores.map((store, idx) => {
					return (
						<Button
							key={idx} 
							onPress={this.setStoreAndNavgiate.bind(this, store)}
							containerStyle={styles.btn}
							style={styles.btnTxt}>
							{store.name}
						</Button>
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
	btn : {
		padding:15,
		borderBottomColor:"#eee",
		backgroundColor:"#fafafa",
		borderBottomWidth:1
	},
	btnTxt: {
		color:"#666"
	},
	input : {
		height: 30,
		backgroundColor: '#fdfdfd',
		fontSize: 12,
		textAlign:"center"
	},
	dropdown : {
		height:40,
		flex:1,
		backgroundColor:"#34495e",

	},
	storeCount : {
		textAlign:"center",
		backgroundColor:"#34495e",
		color:"#eee",
		fontSize:10,
		padding:5,
	}
})

export default connect(
	(state) => ({ stores: state.store.locations }),
	(dispatch) => (bindActionCreators(storeActions, dispatch)),
)(Stores)