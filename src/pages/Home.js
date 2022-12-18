import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './Home.css'


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Jason</h2>
        <div className='prompt'>
            <p> A Student Passionate for Computer Science & Mathematics</p>
            <a href='https://www.linkedin.com/in/jason-gao-34571221b/' target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href={`mailto:jasongao@usc.edu`}><FontAwesomeIcon icon={faEnvelope}/></a>
            <a href='https://github.com/YGao119' target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub}/></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
            <li className='item'>
                <h2>Tech Stack</h2>
                <span>NodeJS, Java Spring Boot, ExpressJS, ReactJS, HTML, CSS, MySQL, Android, Unit Testing</span>
            </li>
            <li className='item'>
                <h2>Languages</h2>
                <span>C/C++, Java, Python, JavaScript</span>
            </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
