import { useContext, useState } from 'react'
import ContentArea from '../../reusable/content-area/ContentArea'
import './Courses.css'
import { Context } from '../../../Context'
import CourseWidget from '../../reusable/course-widget/CourseWidget'
import Mentors from './mentors/Mentors'
import LearningProgress from './learning-progress/LearningProgress'
import Calendar from '../../calendar/Calendar'

export default function Courses() {

  const {activeSidebarItem, courseDetails} = useContext(Context)
  const [activeNavbarItem, setActiveNavbarItem] = useState("Design")

  // from API
  const navbarItems = [
    {
      id: "Advertising"
    },
    {
      id: "Design"
    },
    {
      id: "Marketing"
    },
    {
      id: "Illustration"
    },
    {
      id: "Brand"
    }
  ]

  return (
    <>{ activeSidebarItem == "Courses" && (
      <ContentArea title={activeSidebarItem}>
        <div className='courses-view-grid-provider'>
          <div className='navbar-wrapper'>
            {
              navbarItems.map((item, index)=> {
                return <button type='button' className={`navbar-item ${item.id == activeNavbarItem ? "navbar-item-active" : ""}`} key={index} onClick={()=> setActiveNavbarItem(item.id)}>{item.id}</button>
              })
            }
          </div>
          <div className='courses-wrapper'>
            {
              courseDetails?.map((courseDetail, index)=> {
                if(courseDetail.category == activeNavbarItem.toLowerCase()) {
                return <CourseWidget courseDetail={courseDetail} key={index} />
                }
              })
            }
          </div>
          <Mentors />
          <LearningProgress />
          <Calendar />
        </div>
      </ContentArea>
      )}
    </>
  )
}