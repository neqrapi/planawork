import React from 'react'
import {NavLink} from 'react-router-dom'
 const SignedOutLinks = ()=>{
     return(
        <ul className="nav-r2">
            <li><NavLink to='/'>Sign Up</NavLink></li>
            <li><NavLink to='/'>Log In</NavLink></li>
            
        </ul>
     )
 }
 export default SignedOutLinks ;