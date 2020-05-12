import React, { Component } from 'react'

class CreateProject extends Component {
    state={
        title:'',
        content:''
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
                <label htmlFor="title">Title</label>
                <input type="text" id= "title" onChange={this.handleChange}/>
                </div>
                <div className="inputnav">
                <label htmlFor="content">Project Content</label>
                    <textarea id=''  className="text-area-project" onChange={this.handleChange}></textarea>
                </div>
                <div className="inputnav">
                    <button className='navbutton'>Create</button>
                </div>
                </form>
            </div>
        )
    }
}

export default CreateProject