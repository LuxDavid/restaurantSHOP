import {useContext,useState} from "react";
import { useNavigate } from "react-router-dom";
import { ContextFunctions } from "../context/contextFunctions";
import Button from 'react-bootstrap/Button';


const ProductDetail=({item})=>{

const {addProduct,isInCart}=useContext(ContextFunctions);
const navigate=useNavigate();
const [quantityProduct,setQuantityProduct]=useState(1);

return(

<div id='container-detail'>

<div id="detail-product">

<img src={item.image} alt={item.nombre} />

<h3>{item.nombre}</h3>
<h3>{item.peso}</h3>

<p>{item.descripcion}</p>

<div id="product-buttons">

<button onClick={()=>quantityProduct > 1 && setQuantityProduct(prev=>prev-1)} >-</button>
<span id="product-count">{quantityProduct}</span>
<button onClick={()=>setQuantityProduct(prev=>prev+1)}>+</button>

</div>

<Button variant="outline-danger" className="addCart" onClick={e=>addProduct(item,quantityProduct)}>Agregar al carrito</Button>

<span id="available-product">Disponible</span>

</div>


</div>

)



}

export default ProductDetail