import styles from "../styles/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2 className="title">Contact Me</h2>
      <div className={"contenedor " + styles.contenedor__contact}>
      <form action="">
        <input type="text" placeholder="dd" />
        <input type="text" placeholder="dd" />
        <input type="text" placeholder="dd" />

        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
      </div>
    </section>
  )
}

export default Contact