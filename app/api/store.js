import axios from 'axios'

const BASE_URI = `https://store-locator.stamplayapp.com`
const metersPerMile = 1609.344

export function fetchStores ({ longitude, latitude }, distance = 500) {
	if(distance.length === 0) distance = 500
	let query = JSON.stringify({
		"_geolocation" : {
			"$near" : {
				"$geometry": {
					"type": "Point",
					"coordinates": [longitude, latitude]
				},
				"$maxDistance" : metersPerMile * distance,
				"$minDistance" : 0
			}
		}
	})
	return axios(`${BASE_URI}/api/cobject/v1/store?where=${query}`)
}