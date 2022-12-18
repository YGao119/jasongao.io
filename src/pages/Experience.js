import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import './Experience.css'

export default function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor="#242424">
            <VerticalTimelineElement 
                className='vertical-timeline-element-education' 
                date="2017 - 2020"
                iconStyle={{background: 'black', color: 'white'}}
                icon={<FontAwesomeIcon icon={faGraduationCap}/>}
                >
                <h3 className='vertical-timeline-element-title'> 
                    Hamde Hall Country Day School, Connecticut, CT
                </h3>
                <p> High School Diploma
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className='vertical-timeline-element-education' 
                date="2020 - 2024"
                iconStyle={{background: 'black', color: 'white'}}
                icon={<FontAwesomeIcon icon={faGraduationCap}/>}
                >
                <h3 className='vertical-timeline-element-title'> 
                    University of Southern California, Los Angeles, CA
                </h3>
                <h4 className='vertical-timeline-element-title'>
                   Bachelor of Science
                </h4>
                <p>Double Degree in Computer Science & Mathematics
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}
