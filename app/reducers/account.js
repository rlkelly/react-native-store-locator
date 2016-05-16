const initialState = {
	user: {},
	isAuthed: undefined
}

export default function accounts (state = initialState, action) {
  switch (action.type) {
  	case 'SET_CURRENT_USER' :
  		return {
  			...state,
  			user: action.user,
  			isAuthed: action.isAuthed,
  		}
    case 'REMOVE_CURRENT_USER' :
      return {
        ...state,
        user: {},
        isAuthed: false,
      }
    default :
      return state
  }
}