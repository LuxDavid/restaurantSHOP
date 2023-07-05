import React from "react";

const ProductDetail=({item})=>{

return(

<div id='container-detail'>

<div id="detail-product">

<img src={item.image} alt={item.nombre} />

<h3>{item.nombre}</h3>
<h3>{item.peso}</h3>

<p>{item.descripcion}</p>

<div id="product-buttons">

<button>-</button>
<span id="product-count">1</span>
<button>+</button>

</div>

<span id="available-product">Disponible</span>

</div>


</div>

)



}

export default ProductDetail