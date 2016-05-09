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

let locationOptions = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
}

export function getAndSetCurrentLocation () {
	return function (dispatch) {
		return navigator.geolocation.getCurrentPosition(
      ({ coords: { longitude, latitude } }) => {
      	dispatch(setLocation({ longitude, latitude }))
      	dispatch(setLocationError(''))
      },
      (error) => dispatch(setLocationError(error.message)),
      locationOptions
    )
	}
}