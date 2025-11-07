

import { useContext } from 'react'
import ProgressBar from '../../../reusable/progress-bar/ProgressBar'
import Section from '../../../reusable/section/Section'
import './LearningProgress.css'
import { Context } from '../../../../Context'

export default function LearningProgress() {

  const {progressingCourses} = useContext(Context)

  return(
    <>
      <div className='learning-progress-wrapper'>
        <Section title="Learning Progress" float={true} >{
          progressingCourses.map((course, index) => {
            return <div className='progress-widget' key={index}>
              <div className='course-name-progress'>
                <span className='course-name'> {course.name} - Unit {course.unit}</span> <span className='course-progress'>{course.progress}% </span>
              </div>
              <ProgressBar progressPercent={course.progress} />          
            </div>
          })}
        </Section>
      </div>
    </>
  )
}