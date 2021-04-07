// import Trip from './Trip'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Trips from './Trips'

class TripsContainer extends Component {

  renderTrips = () => this.props.trips.map((trip, id) => <Trips key={id} name={trip} />)
  
  render() {
    return(
      <div>
        <h1> My Trips</h1>
        {this.renderTrips}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      trips: state.trips
    }
  }

export default connect(mapStateToProps)(TripsContainer)