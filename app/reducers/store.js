const initialState = {
	locations: [],
	current: {}
}

export default function store (state = initialState, action) {
	switch (action.type) {
		case 'SET_STORES' :
			return {
				...state,
				locations :action.stores
			}
		case 'SET_CURRENT' :
			return {
				...state,
				current: action.current,
			}
		default :
			return state
	}
}