import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../styles/modal.module.css"
import { Link } from "react-router-dom"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
const Modal = ({info, fun}) => {
    const {tipo, imagen,titulo,descripcion, link, git} = info
  return (
    <div className={styles.modal} >
      <div className={styles.contain__modal}>
        <div className={styles.contain__img}>
        <img className={styles.img} src={imagen} alt="" />
        </div>
        <div className={styles.contain__info}>
          <h2 className={styles.title}>{titulo}</h2>
          <span className={styles.tipo}>{tipo}</span>
          <p className={styles.text}>{descripcion}</p>
          <div className={styles.botones}>
          <Link className={styles.btn} target="_blank" rel="noreferrer" to={link}>Ver Proyecto</Link>

          {git && (
          <Link className={styles.btn} target="_blank" rel="noreferrer" to={git}>
            <FontAwesomeIcon icon={faGithub} />
            Ver Github</Link>
          )}
          </div>
        </div>

      </div>
      <span className={styles.close} onClick={fun}></span>
    </div>
  )
}

export default Modal