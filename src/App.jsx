//Navegacion
import {BrowserRouter, Route, Routes} from "react-router-dom"
//Providers
import { ToolsProvider } from "./context/ToolsProvider"
import { CloudProvider } from "./context/CloudProvider" // funciones para la creación de imagenes optimizadas conectadas a la nube
//Interfaces
import IndexModel from "./models/IndexModel"
import Index from "./pages/Index"

function App() {

  return (
    <BrowserRouter>
    <ToolsProvider>
    <CloudProvider>
      <Routes>
        <Route path='/'                          element={<IndexModel />}>
            <Route index                            element={<Index />} />
        </Route>
      </Routes>
    </CloudProvider>
    </ToolsProvider>
    </BrowserRouter>
  )
}

export default App
