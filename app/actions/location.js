function setLocation (position) {
	return {
		type: 'SET_LOCATION',
		position,
	}
}

function setLocationError (error) {
	return {
		type: 'SET_LOCATION_ERROR',
		error,
	}
}

export function getAndSetCurrentLocation () {
	return function (dispatch) {
		return navigator.geolocation.getCurrentPosition(
      ({ coords }) => dispatch(setLocation(coords)),
      ({ message }) => dispatch(setLocationError(message)),
      {
			  enableHighAccuracy: true,
			  timeout: 20000,
			  maximumAge: 1000
			}
    )
	}
}