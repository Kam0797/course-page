import { useContext } from 'react'
import './TopBar.css'
import { Context } from '../../Context'
import { LucideBell } from 'lucide-react'
import { profileName } from '../../constVars'

export default function TopBar() {

  const { unreadNotifications } = useContext(Context)
  const profilePicAlt = profileName.split(" ")[0][0] + profileName.split(" ")[1][0]

  return(
    <>
      <div className='top-bar-wrapper' >
        {/* <div className='top-bar-heading'>
          {`${activeSidebarItem}.`}
        </div> */}
        <div className='top-bar-right-area'>
          <button className='notifications-button'>
            <LucideBell size={21} strokeWidth={2.5} />
            {unreadNotifications ? <div className='unread-notif-indicator'></div> : ""}
          </button>
          <div className='profile'>
            <span className='profile-name'>{profileName}</span>
            <img className='profile-pic' alt={profilePicAlt} src={null} />
          </div>
        </div>
      </div>
    </>
  )
}