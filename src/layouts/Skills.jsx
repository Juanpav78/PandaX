import styles from "../styles/skills.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5,
  faFigma, faGithub,
  faBootstrap, faGit,
  faNodeJs, faReact,
  faJsSquare, faSass,
  faWordpress, faPhp,
  faAws,faAngular, faVuejs, faCss3Alt
} from "@fortawesome/free-brands-svg-icons"
import illustrator from "../assets/logos/illustrator.png"
import photoshop from "../assets/logos/photoshop.png"

const logos = [
    {
    logo : faHtml5,
    class  : "logo--orange" ,
    name : "html5"
    },
    {
      logo : faCss3Alt,
      class  : "logo--blue" ,
      name : "html5"
    },
    {
      logo : faJsSquare,
      class  : "logo--yellow" ,
      name : "html5"
    },
    {
      logo : faGithub,
      class  : "logo--black" ,
      name : "html5"
    },
    {
    logo : faGit,
    class  : "logo--orange--git" ,
    name : "html5"
    },
    {
    logo : faNodeJs,
    class  : "logo--green--node" ,
    name : "html5"
    },
    {
    logo : faBootstrap,
    class  : "logo--purple--b" ,
    name : "html5"
    },
    {
    logo : faSass,
    class  : "logo--pink" ,
    name : "html5"
    },
    {
      logo : faWordpress,
      class  : "logo--blue--w" ,
      name : "html5"
    },
    {
      logo : faPhp,
      class  : "logo--purple--php" ,
      name : "html5"
    },
    {
    logo : faReact,
    class  : "logo--blue--r" ,
    name : "html5"
    },
    {
    logo : faAws,
    class  : "logo--black" ,
    name : "html5"
    },
        {
    logo : faAngular,
    class  : "logo--red" ,
    name : "html5"
    },
    {
      logo : faVuejs,
      class  : "logo--green--vue" ,
      name : "html5"
    },
    {
      logo : faFigma,
      class  : "logo--black" ,
      name : "html5"
    }

]

const msg = {
  diseno: "Diseño personalizado que implica la creación de la apariencia visual y la estructura de un sitio, incluyendo la disposición de elementos, la selección de colores y tipografías, y la creación de una interfaz de usuario intuitiva que se adapte tanto para el usuario como para el cliente",
  web: "Se realizan sitios o aplicaciones webs dinamicos, utilizando lenguajes de programación como HTML, CSS, JavaScript, React, entre otros, desarrollando asi la codificación de las funcionalidades del sitio, como formularios, bases de datos y sistemas de gestión de contenido.",
  mantenimiento:"Actualización y el monitoreo continuo del sitio para garantizar su funcionamiento óptimo, la corrección de errores, la aplicación de parches de seguridad y la mejora de la experiencia del usuario"
}


const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className="title">Skills</h2>
      <div className={"contenedor " + styles.contenedor__skills}>
        <div className={styles.contenedor_services}>
          <div className={"style--b " + styles.card}>
            <h3 className={styles.subtitle}>Diseño</h3>
            <p className={styles.text}>
            {msg.diseno}
            </p>
          </div>
          <div className={"style--b " + styles.card}>
            <h3 className={styles.subtitle}>Desarrollo Web</h3>
            <p className={styles.text}>
            {msg.web}
            </p>
          </div>
          <div className={"style--b " + styles.card}>
            <h3 className={styles.subtitle}>Mantenimiento</h3>
            <p className={styles.text}>
            {msg.mantenimiento}
            </p>
          </div>
        </div>

        <div className={"style--b " + styles.tecnologias}>
          {logos.map((logo, i) =>(
            <FontAwesomeIcon className={styles.logos + " " +logo.class} key={i} icon={logo.logo} alt={logo.name} />
          ))}
          <img className={styles.logos__img} src={illustrator} alt="adobe illustrator" />
          <img className={styles.logos__img} src={photoshop} alt="adobe photoshop" />
        </div>
      </div>
    </section>
  )
}

export default Skills