// import Trip from './Trip';

import React, { Component } from 'react';
import { connect } from 'react-redux'

class TripsContainer extends Component {

  render() {
    return(
      <div>hi</div>
    )
  }
}

const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }

export default connect(mapStateToProps)(TripsContainer); 