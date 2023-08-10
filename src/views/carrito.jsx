import React,{useContext} from 'react'
import Layout from '../components/Layout'
import EmptyCart from '../components/EmptyCart';
import { ContextFunctions } from '../context/contextFunctions';
import ProductCart from '../components/ProductCart';

const Carrito=()=> {

const {carrito}=useContext(ContextFunctions)

  return (
    <Layout>

{carrito.length ===0 ?(<EmptyCart/>)

: (
  <div id='container-carrito'>
  {carrito.map((prod)=><ProductCart item={prod.item} quantity={prod.quantityAdded}/>)}
  </div>
)  }

    <div id='container-total'></div>
   
    </Layout>
  )
}

export default Carrito