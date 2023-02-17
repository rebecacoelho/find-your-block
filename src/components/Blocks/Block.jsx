import Location from '../../assets/city.svg'
import styles from './Block.module.css';

export function Block(props) {
  return (
    <div className={styles.block}>
      <img className={styles.img} src={props.src} alt="" />
      <div className={styles.description}>
        <strong>{props.title}</strong>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        <div className={styles.location}>
          <img src={Location} alt="" />
          <p>{props.place}</p>
        </div>
      </div>
    </div>
  )
}