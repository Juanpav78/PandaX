import { createContext, useEffect, useRef, useState } from "react";
const ToolsContext = createContext();

const ToolsProvider = ({children}) => {
    const [windowPos, setWindowPos] = useState(0)
    const [isActiveHeader, setIsActiveHeader] = useState(false)
    const scrollPos = useRef(0);
    useEffect(()=>{
        const header    = document.getElementById("header")
        const home      = document.getElementById("home")
        const skills    = document.getElementById("skills")
        const proyects  = document.getElementById("proyects")
        const about     = document.getElementById("about")
        
        const handleScroll = () => {
            
           
            if((window.scrollY > scrollPos.current)  && (window.scrollY != 0)){
              setIsActiveHeader(true)
              scrollPos.current = window.scrollY
            }else if(window.scrollY != scrollPos.current){
              setIsActiveHeader(false)
              scrollPos.current = window.scrollY
            }
            
            if(isScrollWindow(skills.offsetTop - 800) && !skills.classList.contains("active")){
              skills.classList.add("active")
            }
            if(isScrollWindow(proyects.offsetTop - 800) && !proyects.classList.contains("active")){
              proyects.classList.add("active")
            }
            if(isScrollWindow(about.offsetTop - 800) && !about.classList.contains("active")){
              about.classList.add("active")
            }
            
            setWindowPos(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    const isScrollWindow = (pos) =>{  
            
        if(pos <  windowPos){
            return true
          }else{
            return false
          }
    }
  return (
    <ToolsContext.Provider
    value={{
    isActiveHeader
    }}
    >
         {children}
    </ToolsContext.Provider>
  )
}

export{
    ToolsProvider
}

export default ToolsContext