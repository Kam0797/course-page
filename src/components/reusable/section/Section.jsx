import styles from "./Section.module.css";

export default function Section({title, titleRight=null, children}) {


  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleArea}>
          <span className={styles.title}>{title}</span>
          <span className={styles.titleRight}>{titleRight}</span>
        </div>
        {children}
      </div>
    </>
  );
}
