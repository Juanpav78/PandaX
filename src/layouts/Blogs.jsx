import styles from "../styles/blogs.module.css"
import { Link } from "react-router-dom"
const Blogs = () => {
  return (
    <section className={styles.blogs}>
      <h2 className="title">Blogs</h2>
      <div className={"contenedor " + styles.contenedor__blogs}>
        <div className={"style--b "+styles.blog}></div>
        <div className={"style--b "+styles.blog}></div>
        <div className={"style--b "+styles.blog}></div>
        <Link to="/" className={"style--b btn " + styles.btn}>Ver más</Link>
      </div>

    </section>
  )
}

export default Blogs