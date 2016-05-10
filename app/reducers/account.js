import * as actions from '../actions/account'

const initialState = {
	user: {},
	isAuthed: undefined
}

export default function account (state = initialState, action) {
	switch (action.type) {
		case actions.SET_CURRENT_USER :
			return {
				...state,
				user: action.user,
				isAuthed: action.isAuthed,
			}
		case actions.REMOVE_CURRENT_USER :
			return {
				...state,
				user: {},
				isAuthed: false
			}
		default :
			return state
	}
}