import { Link } from "react-router-dom"
import styles from "../styles/proyects.module.css"

const Proyects = () => {
  return (
    <main  className={styles.proyects}>
        <h2 className="title">Proyects</h2>

        <div className={"contenedor " +styles.contenedor__proyects}>
          <div className={"style--b "+styles.card}>
            <img className={styles.img} src="/src/assets/proyectos/PrPortafolio2.png" alt="" />
            <div className={styles.text}>
              <h3 className={styles.title}>portafolio title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis, quaerat accusamus ea, ipsa laboriosam labore numquam ad veniam facere unde modi earum voluptatum repellendus quasi totam consectetur asperiores officia. </p>

              </div>
          </div>
          <div className={"style--b "+styles.card}>
            <img className={styles.img} src="/src/assets/proyectos/PrGateaux.png" alt="" />
            <div className={styles.text}>
              <h3 className={styles.title}>portafolio title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis, quaerat accusamus ea, ipsa laboriosam labore numquam ad veniam facere unde modi earum voluptatum repellendus quasi totam consectetur asperiores officia. </p>

              </div>
          </div>
          <div className={"style--b "+styles.card}>
            <img className={styles.img} src="/src/assets/proyectos/PrPokemon.png" alt="" />
            <div className={styles.text}>
              <h3 className={styles.title}>portafolio title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis, quaerat accusamus ea, ipsa laboriosam labore numquam ad veniam facere unde modi earum voluptatum repellendus quasi totam consectetur asperiores officia. </p>

              </div>
          </div>
          <div className={"style--b "+styles.card}>
            <img className={styles.img} src="/src/assets/proyectos/PrReact01.png" alt="" />
            <div className={styles.text}>
              <h3 className={styles.title}>portafolio title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis, quaerat accusamus ea, ipsa laboriosam labore numquam ad veniam facere unde modi earum voluptatum repellendus quasi totam consectetur asperiores officia. </p>

              </div>
          </div>
          <div className={"style--b "+styles.card}>
            <img className={styles.img} src="/src/assets/proyectos/PrReact02.png" alt="" />
            <div className={styles.text}>
              <h3 className={styles.title}>portafolio title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis, quaerat accusamus ea, ipsa laboriosam labore numquam ad veniam facere unde modi earum voluptatum repellendus quasi totam consectetur asperiores officia. </p>

              </div>
          </div>
          <div className={"style--b "+styles.card}>
            <img className={styles.img} src="/src/assets/proyectos/PrHelado.png" alt="" />
          </div>

        <Link to="/" className={"style--b btn " + styles.btn}>Ver más</Link>
        </div>
    </main>
  )
}

export default Proyects