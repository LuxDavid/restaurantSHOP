import { createContext,useState } from "react";

export const ContextFunctions= createContext([]);

export const ContextProvider=({children})=>{

const [carrito, setCarrito]=useState([]);


return(
<ContextFunctions.Provider value={{carrito}}>{children}</ContextFunctions.Provider>
);
}