import styles from "../styles/home.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faWhatsapp, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <section className={styles.home} id="home">

      <div className={styles.home__contain}>
        <div className={styles.info}>
        <h2>Bienvenido</h2>
        <p>Soy un Desarrollador Web </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, adipisci magni doloribus id voluptatum exercitationem aspernatur distinctio mollitia veritatis fugiat sunt quasi vero molestiae atque cumque alias omnis, quod fugit!</p>
        <a href="">Ver Proyectos</a>
        </div>
        <div className={styles.social}>
          <Link className={styles.links} to="/" ><FontAwesomeIcon className={styles.icon} icon={faFacebook} /></Link>
          <Link className={styles.links} to="/" ><FontAwesomeIcon className={styles.icon} icon={faWhatsapp} /></Link>
          <Link className={styles.links} to="/" ><FontAwesomeIcon className={styles.icon} icon={faInstagram} /></Link>
          <Link className={styles.links} to="/" ><FontAwesomeIcon className={styles.icon} icon={faLinkedin} /></Link>
          <Link className={styles.links} to="/" ><FontAwesomeIcon className={styles.icon} icon={faGithub} /></Link>
        </div>
      </div>
      <div className={styles.sun__contain}>
      <div className={styles.sun}></div>
      </div>
      <div className={styles.montains}></div>
    </section>
  )
}

export default Home