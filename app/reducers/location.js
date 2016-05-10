import * as actions from '../actions/location'

const initialState = {
	position: {},
	enabled: undefined,
}

export default function location (state = initialState, action) {
  switch (action.type) {
  	case actions.SET_LOCATION :
  		return {
  			...state,
  			position: action.position,
        enabled: true
  		}
   	case actions.SET_LOCATION_ERROR :
  		return {
  			...state,
  			enabled: false
  		}
    default :
      return state
  }
}