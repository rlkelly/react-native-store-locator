import {
	login, signup, 
	setAuth, checkAuth,
	revokeAuth, currentUser
} from '../api/account'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER'
export const ACCOUNT_ERROR = 'ACCOUNT_ERROR'
export const SET_AUTH_STATUS = 'SET_AUTH_STATUS'

function setCurrentUser (user) {
	return {
		type: SET_CURRENT_USER,
		user,
	}
}

function setAuthStatus (status) {
	return {
		type: SET_AUTH_STATUS,
		isAuthed: status
	}
}

function removeCurrentUser (user) {
	return {
		type: REMOVE_CURRENT_USER
	}
}

function setAccountError (error) {
	return {
		type: ACCOUNT_ERROR,
		error,
	}
}

function handleError (res) {
	return function (dispatch) {
		if(res.hasOwnProperty('data')) {
			dispatch(setAccountError(res.data.error.message))
		} else {
			dispatch(setAccountError(res))
		}
	}
}

export function loginAndAuthUser (credentials) {
	return function (dispatch) {
		return login(credentials)
			.then((res) => setAuth(res))
			.then((data) => {
				dispatch(setCurrentUser(data))
				dispatch(setAuthStatus(true))
				return
			})
			.catch((res) => handleError(res))
	}
}

export function signupAndAuthUser (credentials) {
	return function (dispatch) {
		return signup(credentials)
			.then((res) => setAuth(res))
			.then((data) => {
				dispatch(setCurrentUser(data))
				dispatch(setAuthStatus(true))
				return
			})
			.catch((res) => handleError(res))
	}
}

export function fetchIfCurrentUser () {
	return function (dispatch) {
		return checkAuth()
			.then((token) => { 
				return currentUser(token)
			})
			.then((res) => {
				if(res.hasOwnProperty('data')) {
					dispatch(setCurrentUser(res.data.user))
					dispatch(setAuthStatus(true))
				} else {
					dispatch(setCurrentUser({}))
					dispatch(setAuthStatus(false))
				}
				return
			})
			.catch((res) => handleError(res))
	}
}

export function logoutAndUnauthUser () {
	return function (dispatch) {
		revokeAuth()
		setTimeout(() => dispatch(removeCurrentUser()), 500)
	}
}