import styles from "./Section.module.css";

export default function Section({title, titleRight=null, float=false, children}) {


  return (
    <>
      <div className={`${styles.wrapper} ${float ? styles.float : ''}`}>
        <div className={styles.titleArea}>
          <span className={styles.title}>{title}</span>
          <span className={styles.titleRight}>{titleRight}</span>
        </div>
        {children}
      </div>
    </>
  );
}
