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
                <h5 className="grey">Sign In</h5>
                <div className="inputnav">
                <label htmlFor="email">Email</label>
                <input type="email" id= "email" onChange={this.handleChange}/>
                </div>
                <div className="inputnav">
                <label htmlFor="password">Password</label>
                <input type="password" id= "password" onChange={this.handleChange}/>
                </div>
                <div className="inputnav">
                    <button className='navbutton'>Login</button>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn
