import { useContext } from 'react'
import './ContentArea.css'
import { Context } from '../../../Context'
import TopBar from '../../top-bar/TopBar'

export default function ContentArea({title,children}) {


  return(
    <>
      <div className='content-area-wrapper'>
          <div className='content-area-title'>{title}.<TopBar /></div>

        <div className='content-wrapper'>
          {children}
        </div>
      </div>
    </>
  )

}