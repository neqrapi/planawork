import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

 class Dashboard extends Component{
     render(){
         return(
             <div className='dashboard'>
                 <div className='dashboard-r'>
                    <div className="dashboard-left">
                    <ProjectList/>
                    </div>
                    <div className="dashboard-right">
                        <Notifications/>
                    </div>
                 </div>
             </div>
         )
     }
 }
 export default Dashboard;