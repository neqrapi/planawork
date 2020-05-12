import React, { Component } from 'react'

class SignIn extends Component {
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()

    }
    render() {
        return (
            <div className="signin">
                
                <form onSubmit={this.handleSubmit} className="whie">
                <h5 className="signin-title">Sign In</h5>
                <div className="inputnav">
                <label htmlFor="email" className='signin-label-text'>Email</label>
                <input type="email" id= "email" onChange={this.handleChange}/>
                </div>
                <div className="inputnav">
                <label htmlFor="password" className='signin-label-text'>Password</label>
                <input type="password" id= "password" onChange={this.handleChange}/>
                </div>
                <div className="inputnav">
                    <button className='button-signin'>Login</button>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn
