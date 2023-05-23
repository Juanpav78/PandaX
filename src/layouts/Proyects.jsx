import { Link } from "react-router-dom"
import styles from "../styles/proyects.module.css"

const Proyects = () => {
  return (
    <main  className={styles.proyects}>
        <h2 className="title">Proyects</h2>

        <div className={"contenedor " +styles.contenedor__proyects}>
          <div className={"style--b "+styles.card}>
          </div>
          <div className={"style--b "+styles.card}>
          </div>
          <div className={"style--b "+styles.card}>
          </div>
          <div className={"style--b "+styles.card}>
          </div>
          <div className={"style--b "+styles.card}>
          </div>
          <div className={"style--b "+styles.card}>
          </div>

        <Link to="/" className={"style--b btn " + styles.btn}>Ver más</Link>
        </div>
    </main>
  )
}

export default Proyects