import styles from "../styles/skills.module.css"

import img1 from "../assets/logos/001-design.png"
import img2 from "../assets/logos/002-illustrator.png"
import img3 from "../assets/logos/003-html.png"
import img4 from "../assets/logos/004-css-3.png"
import img5 from "../assets/logos/005-js.png"
import img6 from "../assets/logos/006-figma.png"
import img7 from "../assets/logos/007-leaf.png"
import img8 from "../assets/logos/008-sass.png"
import img9 from "../assets/logos/009-bootstrap.png"
import img10 from "../assets/logos/010-physics.png"
import img11 from "../assets/logos/011-node-js.png"
import img12 from "../assets/logos/012-paint-palette.png"

const logos = [
  img1, img2,
  img3, img4,
  img5, img6,
  img7, img8,
  img9, img10,
  img11, img12,
]

const msg = {
  diseno: "Diseño personalizado",
  web: "Desarrollo web, con sitios webs dinamicos, ",
  mantenimiento:"Mantenimieno de los sitios webs para optimizar el rendimiento, resolver necesidades"
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
            <img key={i} src={logo} alt="" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills