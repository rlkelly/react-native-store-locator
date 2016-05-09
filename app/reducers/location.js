import * as actions from '../actions/location'

const initialState = {
	position: {},
	error: '',
}

export default function location (state = initialState, action) {
  console.log(action)
  switch (action.type) {
  	case actions.SET_LOCATION :
  		return {
  			...state,
  			position: action.position
  		}
   	case actions.SET_LOCATION_ERROR :
  		return {
  			...state,
  			error: action.error
  		}
    default :
      return state
  }
}