import React from 'react'
import { loginRequest } from '../services/api'
import {connect} from 'react-redux'
class Login extends React.Component {
    
    state = {
        name: '',
        email: '',
        password: '',
        message: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        const {name, email, password } = this.state

        loginRequest({name, email, password})
        .then(res => {
            if (res.error) {
                this.setState({message: res.error})
            } else {
                localStorage.setItem('jwt', res.jwt)

                this.props.history.push('/profile')
            }
        })
    }

    
    handleChangeName = e => {
       this.setState({name: e.target.value})
    }

    handleChangeEmail = e => {
        this.setState({email: e.target.value})
    }

    handleChangePassword = e => {
        this.setState({password: e.target.value})
    }


    render() {
        return (
            <div id=''>
                <form onSubmit={this.handleSubmit}>

                    <p style={{color: 'red'}}>{this.state.message}</p>

                    <input type='text'
                    onChange = {this.handleChangeName}
                    value= {this.state.name} />

                    <input type='text'
                    onChange = {this.handleChangeEmail}
                    value= {this.state.email} />

                    <input type='text'
                    onChange = {this.handleChangePassword}
                    value= {this.state.password} />

                    <input type="submit"
                    value="Login" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      setUser: user => dispatch({type: 'SET_USER', payload: user})
    }
  }

export default connect(null, mapDispatchToProps)(Login)