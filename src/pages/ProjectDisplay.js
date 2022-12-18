import React from 'react'
import {useParams} from 'react-router-dom'
import {ProjectList} from '../helpers/ProjectList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import './ProjectDisplay.css'

export default function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id];
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt='Project Demo'></img>
            <p> <b> Skills:</b> {project.skills}</p>
            <a href={project.link} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub}/></a>
        </div>
    )
}
