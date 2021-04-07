import React, { Component } from 'react';
import { addTrip } from '../redux/actions';
import { connect } from 'react-redux';

export class AddTrip extends Component {

    state = {
        title: '',
        date: '',
        season: '',
        people: '',
        completed: ''
    }


    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleDateChange = e => {
        this.setState({
            date: e.target.value
        })
    }

    handleSeasonChange = e => {
        this.setState({
            season: e.target.value
        })
    }

    handlePeopleChange = e => {
        this.setState({
            people: e.target.value
        })
    }

    handleCompletedChange = e => {
        this.setState({
            completed: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        console.log("submitted")
        this.props.addTrip(this.state)
    }

    render() {
        return(
          <form onSubmit={(e) => this.handleOnSubmit(e)}>
            
            <p>
              <input
                type="text"
                onChange={(e) => this.handleNameChange(e)}
                value={this.state.name}
                placeholder= "name" />
            </p>
            <p>
              <input
                type="text"
                onChange={(e) => this.handleDateChange(e)}
                value={this.state.date}
                placeholder="date" />
            </p>
            <p>
              <input
                type="text"
                onChange={(e) => this.handleSeasonChange(e)}
                value={this.state.season}
                placeholder="season" />
            </p>
            <p>
              <input
                type="text"
                onChange={(e) => this.handlePeopleChange(e)}
                value={this.state.people}
                placeholder="people" />
            </p>
            <p>
              <input
                type="text"
                onChange={(e) => this.handleCompletedChange(e)}
                value={this.state.completed}
                placeholder="completed?" />
            </p>
            <input type="submit" />
          </form>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
      addTrip: (newTrip) => dispatch(addTrip(newTrip))
    }
  }

export default connect(null, mapDispatchToProps)(AddTrip)
// we are not getting information from our store so 
// we can use null instead of mapStateToProps as the 
//first argument