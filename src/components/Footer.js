import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import "./Footer.css"


export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/jason-gao-34571221b/' target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href={`mailto:jasongao@usc.edu`}><FontAwesomeIcon icon={faEnvelope}/></a>
            <a href='https://github.com/YGao119' target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub}/></a>
        </div>
        <p> &copy; 2020 Yuxuan Gao. All rights reserved.</p>
    </div>
  )
}
