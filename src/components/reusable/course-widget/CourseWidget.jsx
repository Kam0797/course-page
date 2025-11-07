

import { LucideArrowRight, LucideStar } from 'lucide-react'
import Section from '../section/Section'
import styles from './CourseWidget.module.css'

export default function CourseWidget({courseDetail}) {
  const courseDuration = `${courseDetail.startDate} - ${courseDetail.endDate}`
  const CardIcon = courseDetail.icon

  return(
    <>
      <div className={styles.wrapper}>
        <div className={styles.card}> {/* this looks worthy enough for a reusable comp, but it appears only here and has no use elsewhere , so making it just a div */}
          <div className={styles.cardTop}>
            <div className={styles.icon}>{<CardIcon />}</div>
            <div className={styles.start}>Start:</div>
            <div className={styles.duration}>{courseDuration}</div>
          </div>
          <div className={styles.priceArea}>
            <span className='priceLabel'>Price</span>
            <span className='price'>{`$ ${courseDetail.price}`}</span>
          </div>
        </div>
        <div className={styles.detailsWrapper}>
          <Section title={courseDetail.name} titleRight={<span className={styles.ratingArea}> <LucideStar size={20} /> {courseDetail.rating}</span>}>
            <span className={styles.description}>{courseDetail.description}</span>
          </Section>
          <div className={styles.detailsBottom}>
            <div className={styles.tagsWrapper}>
              {
                courseDetail?.tags.map((tag, index) => {
                  return <div className={styles.tag} key={index}>{tag}</div>
                })
              }
            </div>
            <button type='button' className={styles.goButton} onClick={()=>{}}><LucideArrowRight size={20} /> </button>
          </div>
        </div>
      </div>
    </>
  )

}