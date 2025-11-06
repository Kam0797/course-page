
import { useContext } from 'react'
import './Sidebar.css'
import { Context } from '../../Context'
import { sideBarItems } from '../../constVars'
import { LucideLogOut, LucideSquareDot } from 'lucide-react'

export default function Sidebar() {

  const {activeSidebarItem, setActiveSidebarItem} = useContext(Context)

  return(
    <>
      <div className='sidebar-wrapper'>
        <div className='sidebar-title'>
          <span className='sidebar-title-icon'><LucideSquareDot size={24} /></span>
          <span className='sidebar-title-text'>SUCCESS</span>
        </div>
        <div className='sidebar-items'>
          {
            sideBarItems.map((item, index) => {
              const Icon = item.icon;
              return <button className={`sidebar-item ${activeSidebarItem == item.id ? "sidebar-item-active" : ""}`} onClick={()=>(setActiveSidebarItem(item.id))} key={index}>
                <span className="sidebar-item-icon"><Icon size={18}/></span>
                <span className='sidebar-item-label'>{item.id}</span>
              </button>
            })
          }
        </div>
        <div className='logout-area'>
          <button type='button' className='logout-button'>
            <span className='logout-icon'><LucideLogOut size={18} /></span>
            <span className='logout-text'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}