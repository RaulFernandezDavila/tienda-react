import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout