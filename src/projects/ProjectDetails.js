import React from 'react'

const ProjectDetails = (props) => {
    const id=props.match.params.id;
    return (
        <div className='Projectdetails'>
        <div className='card'>
        <div className='card-content'>
    <span className="card-title">Project Title- {id}</span>
            <p>lorem sasdsa d a dsa dsadsadadssddsasadsd ds </p>
        </div>
        <div className='card-action'>
        <div>Posted by Pioter</div>
        <div >2nd March,2am</div>
        </div>
        </div>
        </div>
    )
}

export default ProjectDetails
