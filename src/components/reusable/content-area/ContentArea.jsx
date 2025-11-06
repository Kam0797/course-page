import { useContext } from 'react'
import './ContentArea.css'
import { Context } from '../../../Context'

export default function ContentArea({title,children}) {


  return(
    <>
      <div className='content-area-wrapper'>
        <div className='content-area-title'>{title}.</div>
        <div className='content-wrapper'>
          {children}
        </div>
      </div>
    </>
  )

}