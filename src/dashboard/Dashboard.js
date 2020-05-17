import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'

 class Dashboard extends Component{
     render(){
         const {projects}=this.props
         return(
             <div className='dashboard'>
                 <div className='dashboard-r'>
                    <div className="dashboard-left">
                    <ProjectList projects={projects} />
                    </div>
                    <div className="dashboard-right">
                        <Notifications/>
                    </div>
                 </div>
             </div>
         )
     }
 }
 const mapStateToProps=(state)=>{
     return{
         projects:state.project.projects
     }
 }
 export default connect(mapStateToProps) (Dashboard);