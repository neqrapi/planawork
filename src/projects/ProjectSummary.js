import React from 'react'
const ProjectSummary =({project})=>{
    return(
        <div className='ProjectListSec'>
            <div className='ProjectListSec2'>
                <span className="project-title"> {project.title}</span>
                <p className="postedby">Posted by Pioter</p>
                <p className="date">3rd March ,2am</p>
            </div>
        </div>
    )
}
export default ProjectSummary;