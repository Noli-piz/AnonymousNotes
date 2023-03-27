import Navbar from './navbar'
import Footer from './footer'

function MainLayout({children}) {
  return (
    <>
      <Navbar/>
        {children}
      <Footer/>
    </>
  )
}

export default MainLayout