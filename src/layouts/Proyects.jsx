import { Link } from "react-router-dom"

import { useState } from "react"
import Modal from "../components/Modal.jsx"
import styles from "../styles/proyects.module.css"
import proyectos from "../mocks/proyecto.json"
const Proyects = () => {
  const [modal, setModal] = useState({
    "isModal": false,
    "proyecto" : {},
    "key" : null
  })

  const handleClick = (e, proy, o)=>{
    if(!modal.isModal){
      setModal({
        "isModal": true,
        "proyecto" : proy,
        "key" : o
      })
    }
  }

  const closeModal = ()=>{
    setModal({
      "isModal": false,
      "proyecto" : {},
      "key" : null
    })
  }
  return (
    <main  className={styles.proyects} id="proyects">
        <h2 className="title">Proyects</h2>

        <div className={"contenedor " +styles.contenedor__proyects}>
          {proyectos.map((proy, i )=>(
            
          <div id={proy.titulo} key={i} className={"style--b "+styles.card} onClick={e => handleClick(e, proy, i)}>
            <img className={styles.img} src={proy.imagen} alt={proy.titulo} />
            <div className={styles.text}>
              <h3 className={styles.title}>{proy.titulo}</h3>
              </div>
            <p className={styles.type}>{proy.tipo}</p>
            {modal.key==i && (
            <Modal info={modal.proyecto} fun={closeModal} />
            )}
          </div>
          ))}
          
        <Link to="/" className={"style--b btn " + styles.btn}>Ver más</Link>
        </div>
    </main>
  )
}

export default Proyects