import { createContext,useState,useEffect } from "react";

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
    
    } else{
        setCarrito((prevState)=>prevState.concat({item, quantityAdded:quantity}));
       
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