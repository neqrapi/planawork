import React, { Component } from 'react'

class SignUp extends Component {
    state={
        email:'',
        password:'',
        firstName:'',
        lastName:''
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
            <div className="signup">
                
                <form onSubmit={this.handleSubmit} className="whie">
                <h5 className="signup-title">Sign Up</h5>
                <div className="inputnav">
                <label htmlFor="email" className='signup-label-text'>Email</label>
                <input type="email" id= "email" onChange={this.handleChange}/>
                </div>
                <div className="inputnav">
                <label htmlFor="firstName"className='signup-label-text'>First Name</label>
                <input type="text" id= "firstName" onChange={this.handleChange}/>
                </div>
                <div className="inputnav">
                <label htmlFor="lastName"className='signup-label-text'>Last Name</label>
                <input type="text" id= "lastName" onChange={this.handleChange}/>
                </div>
                <div className="inputnav">
                <label htmlFor="password" className='signup-label-text'>Password</label>
                <input type="password" id= "password" onChange={this.handleChange}/>
                </div>
                <div className="inputnav">
                    <button className='button-signup'>Login</button>
                </div>
                </form>
            </div>
        )
    }
}

export default SignUp
