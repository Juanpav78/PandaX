import { createContext } from "react";
const CloudContext = createContext();

const CloudProvider = ({children}) => {
    

    const uploadImage=()=>{}
    const getImage=()=>{}
  return (
    <CloudContext.Provider
    value={{  uploadImage,
    getImage}}
  
    >
         {children}
    </CloudContext.Provider>
  )
}

export{
    CloudProvider
}

export default CloudContext