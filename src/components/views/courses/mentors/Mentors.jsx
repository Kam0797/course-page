

import { useContext } from 'react'
import Section from '../../../reusable/section/Section'
import './Mentors.css'
import { Context } from '../../../../Context'

export default function Mentors() {

  const {mentorsDetail} = useContext(Context)

  return(
    <>
      <div className='mentors-wrapper'>
      <Section title="Mentors:" >
        <div className='mentors-area'>
        {
          mentorsDetail?.map((mentor, index)=> {
            return <div className='mentor' key={index} >
              <img src={mentor.profilePic} className='mentor-pic' />
              <div className='mentor-details'>
                <span className='mentor-name'>
                  {mentor.name}
                </span>
                <span className='mentor-desg'>
                  {mentor.desg}
                </span>
              </div>
              <div className='mentor-exp'>
                {`Exp. ${mentor.experience} years`}
              </div>
            </div>
          })
        }
        </div>
      </Section>
      </div>
    </>
  )
}