

import { useEffect, useState } from 'react'
import './Calendar.css'
import { LucideSquareArrowLeft, LucideSquareArrowRight } from 'lucide-react'
import Section from '../reusable/section/Section'

export default function Calendar() {



    let days = ["Sun" ,"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let months = [
      {
        name: "January",
        n: 31
      },
      {
        name: "February",
        n: 28
      },
      {
        name: "March",
        n: 31
      },
      {
        name: "April",
        n: 30
      },
      {
        name: "May",
        n: 31
      },
      {
        name: "June",
        n: 30
      },
      {
        name: "July",
        n: 31
      },
      {
        name: "August",
        n: 31
      },
      {
        name: "September",
        n: 30
      },
      {
        name: "October",
        n: 31
      },
      {
        name: "November",
        n: 30
      },
      {
        name: "December",
        n: 31
      }
    ]
    let date = new Date()

    const [calMonth, setCalMonth] = useState(date.getMonth())
    const [calYear, setCalYear] = useState(date.getFullYear())
    const [calWeek, setCalWeek] = useState([0,0,0,0,0,0,0])
    const [calRefDate, setCalRefDate] = useState(new Date())



    
    function getWeek(dateObj) {

      if(! (dateObj instanceof Date)) {
        return
      }
      const date = dateObj.getDate()
      const day = dateObj.getDay()
      
      let week = [0,0,0,0,0,0,0]

      week[day] = date;
      for(let i=day; i>0; i--) {
        if(week[i]-1 > 0) {
          week[i-1] = week[i] - 1
        }
        else {
          let n = months[calMonth-1].n
          week[i-1] = n
        }
      }
      for(let i = day; i < 6 ; i++) {
        if(week[i] + 1 < months[calMonth].n) {
          week[i+1] = week[i] + 1
        }
        else {
          week[i] = 1
        }
      }

      return week
    }

    function getAdjacentWeek(refDate, next) {

      const n = next ? 7 : -7
      const newDate = new Date(refDate)
      newDate.setDate(refDate.getDate() + n)
      setCalRefDate(newDate)
      return getWeek(newDate)
    }

    function handleWeekShift(next=false) {
      const ArabianDates = getAdjacentWeek(calRefDate, next); 
      setCalWeek(ArabianDates)
    }

    useEffect(()=> {
      let x = getWeek(date)
      setCalWeek(x)
    },[])

    useEffect(()=>{
      setCalMonth(calRefDate.getMonth())
      setCalYear(calRefDate.getFullYear())
    }, [calRefDate])

  

    const today = calMonth == date.getMonth() && calYear == date.getFullYear() ? date.getDate() : null
  
  

  // const [selectedDate, setSelectedDate] = useState({date:'',month:'', year:'', day:''}) //maynot be needed

  const titleRight = <span className='cal-buttons'>
  <button type='button' className='cal-button-left' onClick={()=>handleWeekShift()}><LucideSquareArrowLeft /></button>
  <button type='button' className='cal-button-right' onClick={()=>handleWeekShift(true)}><LucideSquareArrowRight /></button>
</span>

  return(
    <>
      <div className='calendar-area-wrapper'>
      <Section title={<span className='cal-month-year'>{months[calMonth].name} {calYear} </span>} titleRight={titleRight} >
        <div className='calendar-wrapper'>
        {
          calWeek?.map((date, index) => {
            return <div className={`date-wrapper ${today == date ? 'date-wrapper-today' : ''}`} key={index} >
              <div className='day'>{days[index].toUpperCase()}</div>
              <div className={`date ${today == date ? 'date-today' : ''}`}>{date}</div>
            </div>
          })
        } 
        </div>
      </Section>
      </div>
    </>
  )
}