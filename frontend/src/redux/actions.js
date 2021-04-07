import { profileRequest } from "../services/api"

export const getUser = () => {
    return (dispatch) => {
        dispatch({ type: "FETCHING" })
        profileRequest().then(res => {
            debugger
            dispatch({type: 'SET_USER', payload: res})
        })
    }
}
  
  export const setFetchedUser = (email) => {
    return (dispatch) => {
      dispatch({ type: 'SET_USER', payload: email })
    }
  }
  
  export const clearUser = () => {
    return (dispatch) => {
      dispatch({ type: 'CLEAR_USER' })
    }
  }

  export const addTrip = (trip) => {
    return {
      type: 'ADD_TRIP', trip
    }
  }
