import axios from 'axios'
import { BASE_URI } from '../api'
let resource = 'store'
let metPerMile = 1609.344
export function fetchStores ({ longitude, latitude }, distance = 500) {
	if(distance === 'Any') distance = 10000
	let query = JSON.stringify({
		"_geolocation" : {
			"$near" : {
				"$geometry": {
					"type": "Point",
					"coordinates": [longitude, latitude]
				},
				"$maxDistance" : metPerMile * distance,
				"$minDistance" : 0
			}
		}
	})
	return axios(`${BASE_URI}/api/cobject/v1/${resource}?where=${query}`)
}