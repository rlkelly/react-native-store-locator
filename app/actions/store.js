import { fetchStores } from '../api/store'
import RNGeocoder from 'react-native-geocoder'
export const FETCHING_STORES = 'FETCHING_STORES'
export const FETCH_ERROR = 'FETCH_ERROR'
export const SET_STORES = 'SET_STORES'
export const SET_CURRENT = 'SET_CURRENT'

function fetchingStore (status) {
	return {
		type: FETCHING_STORES,
		fetching: status
	}
}

function fetchError (error) {
	return {
		type: FETCH_ERROR,
		error: error
	}
}

function setStores ({ data, pagination}) {
	return {
		type: SET_STORES,
		stores:data,
		pagination,
	}
}

function setCurrent (store) {
	return {
		type: SET_CURRENT,
		current: store,
	}
}

export function fetchAndSetStores (distance) {
	return function (dispatch, getState) {
		return fetchStores(getState().location.position, distance)
			.then((res) => dispatch(setStores(res.data)))
			.catch((err) => dispatch(fetchError(err)))
	}
}

export function setCurrentStore (store) {
	return function (dispatch) {
		return RNGeocoder.reverseGeocodeLocation({
			longitude: store._geolocation.coordinates[0],
			latitude: store._geolocation.coordinates[1]
		}, (err, data) => {
			if(err) return dispatch(fetchError(err))
			store._geolocation = data[0]
			dispatch(setCurrent(store))
		})
	}
}