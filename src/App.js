import Layout from "./components/Layout";
import Carrusel from "./components/Carousel";
import Novedades from "./components/Novedades";
import Apartado from "./components/Apartado";
function App() {

  return (
       
       <Layout>
       
       <Apartado name={"Ultimate pizza"}/>

      <Carrusel/>
      <Novedades/>
      </Layout>
       
  );
}

export default App;
