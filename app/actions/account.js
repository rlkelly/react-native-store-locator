// Api methods
import {
	login, signup,
	setAuth, checkAuth,
	revokeAuth, currentUser
} from '../api/account'

// Action types
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER'

function setCurrentUser (user, isAuthed = true) {
	return {
		type: SET_CURRENT_USER,
		user,
		isAuthed,
	}
}

function removeCurrentUser () {
	return {
		type: REMOVE_CURRENT_USER
	}
}

export function loginAndAuthUser (credentials) {
	return function (dispatch) {
		return login(credentials)
			.then((res) => setAuth(res))
			.then((user) => dispatch(setCurrentUser(user)))
			.catch((err) => console.warn(err))
	}
}

export function signupAndAuthUser (credentials) {
	return function (dispatch) {
		return signup(credentials)
			.then((res) => setAuth(res))
			.then((user) => dispatch(setCurrentUser(user)))
			.catch((err) => console.warn(err))
	}
}

export function fetchIfCurrentUser () {
	return function (dispatch) {
		return checkAuth()
			.then((token) => currentUser(token))
			.then(({ data = {} }) => {
				if(data.user) dispatch(setCurrentUser(data.user))
				else dispatch(setCurrentUser({}, false))
			})
			.catch((err) => console.warn(err))
	}
}

export function logoutAndUnauthUser () {
	return function (dispatch) {
		return revokeAuth()
			.then(() => dispatch(removeCurrentUser()))
	}
}