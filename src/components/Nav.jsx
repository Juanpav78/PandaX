
import { Link } from "react-scroll";
import { Link  as Nv} from "react-router-dom";
import styles from "../styles/nav.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(true)
  const handleClick = ()=>{
    if(isOpen == true){
      setIsOpen(false)
    }else{
      setIsOpen(true)
    }

  }
  return (
    <div className={styles.navbar}>

    <nav className={styles.nav}>
          <Link 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link} to="home">Home</Link>
          <Link 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link} to="skills">Skills</Link>
          <Link 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link} to="proyects">Proyects</Link>
          <Link 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link} to="about">About Me</Link>
          <Link 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link} to="blogs">Blogs</Link>
          <Link 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link} to="contact">Contact</Link>
          <Nv
          className={styles.link} to="/login">
          <FontAwesomeIcon  icon={faUser} />
          </Nv>
    
    </nav>

    <button className={styles.menu} onClick={handleClick}>
      {isOpen ? (
        <FontAwesomeIcon className={styles.icon}  icon={faBars} />
      ):(
        <FontAwesomeIcon className={styles.icon}  icon={faXmark} />
      )}
    
    </button>
          
    </div>
  )
}

export default Nav