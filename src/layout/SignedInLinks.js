import React from 'react'
import {NavLink} from 'react-router-dom'
 const SignedInLinks = ()=>{
     return(
        <ul className="nav-r">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            
        </ul>
     )
 }
 export default SignedInLinks ;