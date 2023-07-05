import carritoVacio from '../images/carritoVacio.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const EmptyCart=()=>{

const navigate= useNavigate();

return(
<>
    <h2 id="carrito-titulo">Parece que tu carrito esta vacio....</h2>
    <div id="carrito-vacio">
    <div><img src={carritoVacio} alt="carrito vacio"/></div>
        <Button size="lg" className="btn-emptyCart" onClick={() => navigate("/products")}>Buscar productos</Button>
    </div>
   
</>
)


}

export default EmptyCart