import { Link } from "react-router-dom"
import styles from "../styles/header.module.css"
import logo from "../assets/LogoPandaXBlanco.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={"contenedor "+styles.contenedor__header}>
        <Link to="/" className={styles.logotipo}>
            <img className={styles.logo} src={logo} alt="" />
            <h1 className={styles.title} >PandaX {"/>"}</h1>
        </Link>
        <nav className={styles.nav}>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/">Skills</Link>
          <Link className={styles.link} to="/">Proyects</Link>
          <Link className={styles.link} to="/">About Me</Link>
          <Link className={styles.link} to="/">Blogs</Link>
          <Link className={styles.link} to="/">Contact</Link>
          <Link className={styles.link} to="/">
          <FontAwesomeIcon  />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header