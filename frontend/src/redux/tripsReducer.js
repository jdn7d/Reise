
const tripReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_TRIPS": 
            //  logging the updating state value
            return action.payload || state
        case "ADD_TRIPS":
            return [...state, action.payload]
        case "REMOVE_TRIP":
            return state.filter(item => item !== action.payload)
        default: 
            return state
    }
}

export default tripReducer