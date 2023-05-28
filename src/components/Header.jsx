import { Link } from "react-scroll";
import { Link  as Nv} from "react-router-dom";
import styles from "../styles/header.module.css"
import logo from "../assets/LogoPandaXBlanco.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={"contenedor "+styles.contenedor__header}>
        <Link to="/" className={styles.logotipo}>
            <img className={styles.logo} src={logo} alt="" />
            <h1 className={styles.title} >PandaX {"/>"}</h1>
        </Link>
        <nav className={styles.nav}>
          <Link 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link} to="home">Home</Link>
          <Link 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link} to="skills">Skills</Link>
          <Link 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link} to="proyects">Proyects</Link>
          <Link 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link} to="about">About Me</Link>
          <Link 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link} to="blogs">Blogs</Link>
          <Link 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link} to="contact">Contact</Link>
          <Nv
          className={styles.link} to="/login">
          <FontAwesomeIcon  icon={faUser} />
          </Nv>
        </nav>
      </div>
    </header>
  )
}

export default Header