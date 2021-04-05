import React from 'react'
import { connect } from 'react-redux'
import {profileRequest} from '../api'

class Profile extends React.Component {
    
    state = {
        name: '',
        trips: []
    }
    componentDidMount() {
        profileRequest()
        .then(res => {
            if (!res.error) {
                this.setState({name: res.name, trips: res.trips})
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.name ? <h1> {this.state.name}'s Profile  </h1> : <h1> Loading...</h1>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user, trips
    }
}

const mapDispatchToProps = dispatch => {
    return {
        user, trips
    }
}

export default connect(mapStateToProps)(Profile)