
import { Link } from "react-scroll";
import { Link  as Nv} from "react-router-dom";
import styles from "../styles/nav.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isAnimation, setIsAnimation] = useState(false)
  const handleClick = ()=>{
    
    if(!isAnimation){
      setIsAnimation(true)
      setTimeout(()=>{
        setIsAnimation(false)
        document.getElementById("navbar")?.classList?.remove("n-a")
        if(isOpen == true){
          setIsOpen(false)
        }else{
          setIsOpen(true)
        }
      }, 200)
    }
    }
    
  return (
    <div className={styles.navbar + " n-a"} id="navbar">

    <nav className={isOpen ? styles.nav : styles.nav + " " + styles.nav_active} >
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
        <FontAwesomeIcon className={isAnimation ? styles.icon : styles.icon_active}  icon={faBars} />
      ):(
        <FontAwesomeIcon className={isAnimation ? styles.icon : styles.icon_active}  icon={faXmark} />
      )}
    
    </button>
          
    </div>
  )
}

export default Nav