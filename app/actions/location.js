// Api Methods
import { geocodeCoordinates } from '../api/location'

// Action types
export const SET_LOCATION = "SET_LOCATION"
export const SET_LOCATION_ERROR = "SET_LOCATION_ERROR"

function setLocation (location) {
	return {
		type: SET_LOCATION,
		position: location,
	}
}

function setLocationError (error) {
	return {
		type: SET_LOCATION_ERROR,
		error,
	}
}

export function getAndSetCurrentLocation () {
	return function (dispatch) {
		return navigator.geolocation.getCurrentPosition(
      ({coords}) => dispatch(setLocation(coords)),
      (error) => dispatch(setLocationError(error.message)),
      {
			  enableHighAccuracy: true,
			  timeout: 20000,
			  maximumAge: 1000
			}
    )
	}
}

