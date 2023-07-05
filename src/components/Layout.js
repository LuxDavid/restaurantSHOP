import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout= ({children})=>{

    return(
      
      <section id="container">

        <Navbar/>
        
        {children}
        
        <Footer/>
      </section>
    )
  }
  
  export default Layout