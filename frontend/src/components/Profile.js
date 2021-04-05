import React from 'react'
import { connect } from 'react-redux'
//import {profileRequest} from '../api'
import {getUser} from '../redux/actions'


class Profile extends React.Component {
    
    state = {
        name: '',
        trips: []
    }

    componentDidMount() {
        this.props.getUser()
     
    }

    render() {
        return (
            <div>
                {this.props.user.name ? <h1> {this.props.user.name}'s Profile  </h1> : <h1> Loading...</h1>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {user, trips} = state
    return{
        user, trips
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: dispatch(getUser())
    }
}

export default connect(mapStateToProps)(Profile)