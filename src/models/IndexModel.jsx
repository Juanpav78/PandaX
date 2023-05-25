import Header from "../components/Header"
import Footer from "../components/Footer"

import { Outlet } from "react-router-dom"

const IndexModel = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default IndexModel