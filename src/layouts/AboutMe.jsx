import styles from "../styles/about.module.css"

const info =[
  "Como Frontend Developer, mi enfoque principal se encuentra en aprender y aplicar mis conocimientos en el desarrollo web. Poseo un sólido dominio de los lenguajes HTML, CSS y JavaScript, así como de frameworks como React.js. ",
  "Mi objetivo es trabajar en colaboración con equipos de desarrollo para crear interfaces de usuario atractivas y funcionales. ",
  "Actualmente estoy trabajando en proyectos utilizando React JS, aprendiendo typescript, diseño UI/UX y utilizando herramientas como Figma para la creación del diseño, tambien estoy aprendiendo idiomas como Ingles y Frances"
]
const AboutMe = () => {
  return (
    <section className={styles.about}>
      <h2 className="title">About Me</h2>
      <div className={"contenedor " + styles.contenedor__about}>
        <div className={styles.perfil}>
        <img className={styles.img} src="/src/assets/profiles/perfil.png" alt="" />
        </div>
        <div className={"style--b " +styles.info}>
          <h2 className={styles.title}>Juan Pablo Alvarado Valero</h2>
          <p>{info[0]}</p>
          <p>{info[1]}</p>
          <p>{info[2]}</p>
          <p>{info[3]}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe