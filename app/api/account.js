import { AsyncStorage } from 'react-native'
import axios from 'axios'
import { BASE_URI } from '../api'

export function login (credentials) {
	return axios(`${BASE_URI}/auth/v1/local/login`, {
		method: 'POST',
		data: credentials
	})
}

export function signup (credentials) {
	return axios(`${BASE_URI}/api/user/v1/users`, {
		method: 'POST',
		data: credentials
	})
}

export function revokeAuth () {
	return AsyncStorage.removeItem('stamplay-user') 
}

export function setAuth ({ headers, data }) {
	AsyncStorage.setItem('stamplay-user', headers['x-stamplay-jwt'])
	return data
}

export function checkAuth () {
	return AsyncStorage.getItem('stamplay-user')
}

export function currentUser (token) {
	if(token === null) return {}
	return axios(`${BASE_URI}/api/user/v1/getstatus`, {
		method: "GET",
		headers : {
			"x-stamplay-jwt": token,
			"Content-Type": 'application/json'
		}
	})
}

