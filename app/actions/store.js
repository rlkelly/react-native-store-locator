// API methods
import { fetchStores } from '../api/store'
import { geocodeCoordinates } from '../api/location'

// Action types
export const SET_STORES = 'SET_STORES'
export const SET_CURRENT = 'SET_CURRENT'


function setStores (stores) {
	return {
		type: SET_STORES,
		stores,
	}
}

function setCurrent (current) {
	return {
		type: SET_CURRENT,
		current,
	}
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