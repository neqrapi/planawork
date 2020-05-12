import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

 const Navbar = ()=>{
     return(
         <nav className='nav-background'>
             <div className="container">
                 
                 <Link to='/' className="nav-logo"> <div className="nav-skew1">Work Planner</div></Link>
                 <SignedInLinks/>
                 <SignedOutLinks/>
                 
             </div>



         </nav>
     )
 }
 export default Navbar;