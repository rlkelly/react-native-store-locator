// Native modules
import RNGeocoder from 'react-native-geocoder'

export function geocodeCoordinates (coordinates) {
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