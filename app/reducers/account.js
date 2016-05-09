import * as actions from '../actions/account'

const initialState = {
	user: {},
	error: '',
	isAuthed: undefined
}

export default function account (state = initialState, action) {
	switch (action.type) {
		case actions.SET_CURRENT_USER :
			return {
				...state,
				user: action.user,
				error: ''
			}
		case actions.SET_AUTH_STATUS :
			return {
				...state,
				user: action.user,
				isAuthed: action.isAuthed
			}
		case actions.REMOVE_CURRENT_USER :
			return {
				...state,
				user: {},
				error: '',
				isAuthed: false
			}
		case actions.ACCOUNT_ERROR :
			return {
				...state,
				error: action.error
			}
		default :
			return state
	}
}