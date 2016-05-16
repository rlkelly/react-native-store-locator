const initialState = {
  position: {},
  enabled: undefined,
}

export default function location (state = initialState, action) {
  switch (action.type) {
    case 'SET_LOCATION' :
      return {
        ...state,
        position: action.position,
        enabled: true
      }
    case 'SET_LOCATION_ERROR' :
      return {
        ...state,
        enabled: false
      }
    default :
      return state
  }
}