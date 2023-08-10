import { createContext,useState,useEffect } from "react";
import Swal from 'sweetalert2';

export const ContextFunctions= createContext([]);

export const ContextProvider=({children})=>{

const [carrito, setCarrito]=useState([]);
const [totalAmount, setTotalAmount]=useState(0);

//------------------------------------------------------------------------------

useEffect(()=>{

const pago=carrito.map(product=>parseInt(product.item.precio)*product.quantityAdded)
           .reduce((acumulador,prod)=>acumulador+prod,0);

setTotalAmount(pago);


},[carrito])

//------------------------------------------------------------------------------
const addProduct=(item,quantity)=>{

    const inCart=isInCart(item.id);
    
    if(inCart){
    
    setCarrito((prevState)=>
    prevState.map((product)=>
    product.item.id === item.id
    ?{ 
        ...product, 
        quantityAdded:product.quantityAdded+quantity
    }
    :product
    )
    
    );

    notificacion("Agregado al carrito",'green','success');
    
    } else{
        setCarrito((prevState)=>prevState.concat({item, quantityAdded:quantity}));
        notificacion("Agregado al carrito",'green','success');
       
    }
    
    }

//------------------------------------------------------------------------------

const removeProduct=(itemId)=>{

setCarrito(prevState=>prevState.filter(prod=>prod.item.id !== itemId))
}

//------------------------------------------------------------------------------

const cleanCart=()=>{
    setCarrito([]);
    setTotalAmount(0);
}

//------------------------------------------------------------------------------

const isInCart=(itemId)=>{

return Boolean(carrito.find(product=>product.item.id === itemId))
}

//------------------------------------------------------------------------------

const notificacion = (notificacion,color,icono) => {

    Swal.fire({
        icon:icono,
        title: notificacion,
        position: 'top-end',
        showConfirmButton: false,
        toast: true,
        timer: 1000,
        background:color,
        color: "white"
    })
  
  }

return(
<ContextFunctions.Provider value={{
addProduct,
removeProduct,
cleanCart,
isInCart,
carrito,
totalAmount,
}}>{children}</ContextFunctions.Provider>
);
}