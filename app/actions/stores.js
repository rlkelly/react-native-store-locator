import RNGeocoder from 'react-native-geocoder'
import { fetchStores } from '../api/stores'

function setStores (stores) {
	return {
		type: 'SET_STORES',
		stores,
	}
}

function setCurrent (current) {
	return {
		type: 'SET_CURRENT',
		current,
	}
}

function geocodeCoordinates (coordinates) {
	return new Promise((resolve, reject) => {
		RNGeocoder.reverseGeocodeLocation({
			longitude: coordinates[0],
			latitude: coordinates[1]
		}, function(err, [data, ...rest]) {
			if(err) reject(err)
			resolve(data)
		})
	}) 
}

export function fetchAndSetStores (distance) {
	return function (dispatch, getState) {
		return fetchStores(getState().location.position, distance)
			.then((res) => dispatch(setStores(res.data.data)))
			.catch((err) => console.log(err))
	}
}

export function setCurrentStore (store) {
	let coordinates = store._geolocation.coordinates
	return function (dispatch, getState) {
		return geocodeCoordinates(coordinates)
			.then((address) => store.address = address)
			.then(() => dispatch(setCurrent(store)))
			.catch((err) => console.log(err))
	}
}
