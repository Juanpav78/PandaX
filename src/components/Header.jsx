//Dependencias
import { Link } from "react-router-dom"; 
//Estilos e imagenes
import styles from "../styles/header.module.css"
import logo from "../assets/LogoPandaXBlanco.svg"
//Componentes
import Nav from "./Nav";
import useTools from "../hooks/useTools";

const Header = () => {
  const {isActiveHeader} = useTools()

  return (
    <header className={isActiveHeader ? styles.header_active : styles.header} id="header">
      <div className={styles.header__contenedor}>
        <Link to="/" className={styles.header__logotipo}>
            <img className={styles.header__logo} src={logo} alt="PandaX logo Panda Rojo" />
            <h1 className={styles.header__title} >PandaX<span className={styles.header__span}>/</span>{">"}</h1>
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header