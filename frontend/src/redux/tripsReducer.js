
export default (state = [], action) => {
    switch (action.type) {
        case "SET_TRIPS": 
            return action.payload
        case "ADD_TRIPS":
            return [...state, action.payload]
        case "REMOVE_TRIP":
            return state.filter(item => item !== action.payload)
        default: 
            return state
    }
}