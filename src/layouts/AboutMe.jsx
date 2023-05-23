import styles from "../styles/about.module.css"
const AboutMe = () => {
  return (
    <section className={styles.about}>
      <h2 className="title">About Me</h2>
      <div className={"contenedor " + styles.contenedor__about}>
        <div className={styles.perfil}>
        </div>
        <div className={"style--b " +styles.info}>
          
        </div>
      </div>
    </section>
  )
}

export default AboutMe