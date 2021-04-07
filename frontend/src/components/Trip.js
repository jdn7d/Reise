import React from 'react'
import { connect } from 'react-redux'
import {addTrip} from '../redux/actions'

class Trip extends React.Component {

    state = {
        title: '',
        date: '',
        season: '',
        people: '',
        completed: ''



    }
    handleOnSubmit = e => {
        e.preventDefault()
        this.props.addTrip(this.state)
    }
    render() {
        return (
            <div id="trip">
                <hi>My trips</hi>
                {console.log("hi")}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      addRestaurant: (newRestaurant) => {
        dispatch(addRestaurant(newRestaurant))
      }
    };
  };

export default connect(null, mapDispatchToProps)(Trip)