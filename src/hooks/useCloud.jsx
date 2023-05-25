import { useContext } from "react"
import CloudContext from "../context/CloudProvider"
const useCloud = () => {
  return useContext(CloudContext)
}

export default useCloud