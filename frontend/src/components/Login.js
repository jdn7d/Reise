import React from 'react'

class Login extends React.Component {
    
    state = {
        name: '',
        email: '',
        password: '',
        message: ''
    }

    handleSubmit = e => {
        e.preventDefault()
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

export default Login