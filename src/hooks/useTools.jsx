import { useContext } from "react"
import ToolsContext from "../context/ToolsProvider"
const useTools = () => {
  return useContext(ToolsContext)
}

export default useTools