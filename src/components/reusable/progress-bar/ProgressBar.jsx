import styles from './ProgressBar.module.css'


export default function ProgressBar({progressPercent}) {

  return(
    <>
      <div className={styles.wrapper}>
        <div className={styles.progressIndicator} style={{width: `${progressPercent}%`}}></div>
        <div className={styles.fancy}></div>
      </div>
    </>
  )
}